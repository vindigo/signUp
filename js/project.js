// project.js

// FORM CONFIG ---------------------------- //
var config = {
	"username": {
		"format": "email",
		"max_length": 56,
		"required": true
	},
	"password": {
		"format": "password",
		"min_length": 6,
		"required": true
	},
	"confirm_password": {
		"format": "password",
		"min_length": 6,
		"required": true
	},
	"firstname": {
		"format": "text",
		"max_length": 50,
		"required": true
	},
	"lastname": {
		"format": "text",
		"max_length": 50,
		"required": false
	},
	"birthday": {
		"min_age": 14,
		"max_age": 150,
		"required": true
	}
};

// FORM ELEMENTS ---------------------------- //
var username = document.getElementById('username');
var password = document.getElementById('password');
var confirm_password = document.getElementById('confirm_password');
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var birthday = document.getElementById('birthday');
var btn_submit = document.getElementById('btn_submit');

// EVENT LISTENERS ---------------------------- //
username.addEventListener("blur", function () {
	valid_username(username);
});

password.addEventListener("blur", function () {
	valid_password(password);
});

confirm_password.addEventListener("blur", function () {
	valid_confirm_password(confirm_password, password);
});

firstname.addEventListener("blur", function () {
	valid_firstname(firstname);
});

lastname.addEventListener("blur", function () {
	valid_lastname(lastname);
});

// birthday.addEventListener("blur", function () {
// 	valid_birthday(birthday);
// 	// TODO: implement date picker
// 	//
// 	// must be visible to the user in MM/DD/YYYY
// 	// user must be between 14 and 150 inclusive
// 	// required
// });

btn_submit.addEventListener("click", function (event) {
	event.preventDefault();
	submit_form();
});

// FUNCTIONS ---------------------------- //

/**
 * Checks if username is an email and that it is no longer than 56 characters.
 * Field is required.
 *
 * @param {string} givenStr - A given string
 */
function valid_username (givenStr) {
	console.log("username was called ===============================");
	var username = givenStr.value;
	var max = config.username.max_length;
	var isEmail = Utilities.isEmail(username);
	var isEmpty = Utilities.isEmpty(username);
	var isRequired = config.username.required;
	var msg = "";

	if (isRequired && isEmpty){
		msg += "Username is required.\n";
	}

	if (username.length > max) {
		msg += "Username cannot be longer than " + max + " characters.\n";
	}

	if (!isEmail) {
		msg += "Username must be an email.\n";
	}

	if ( msg !== "") { open_modal(msg); }
}

/**
 * Checks if password is at least 6 characters long.
 * Field is required.
 *
 * @param {string} givenStr - A given string
 */
function valid_password (givenStr) {
	console.log("Password was called ===============================");
	var password = givenStr.value;
	var min = config.password.min_length;
	var isRequired = config.password.required;
	var isEmpty = Utilities.isEmpty(password);
	var msg = "";

	if (isRequired && isEmpty) {
		msg += "Password is required.\n";
	}

	if (password.length < min) {
		msg += "Password must be at least " + min + " characters.\n";
	}

	if ( msg !== "") { open_modal(msg); }
}

/**
 * Checks if confirm password is at least 6 characters long and matches
 * password input. Field is required.
 *
 * @param {string} givenStr - A given string
 */
function valid_confirm_password (givenStr, passwordStr) {
	var confirm_password = givenStr.value;
	var password = passwordStr.value;
	var min = config.confirm_password.min_length;
	var isRequired = config.confirm_password.required;
	var isEmpty = Utilities.isEmpty(confirm_password);
	var msg = "";

	if (isRequired && isEmpty) {
		msg += "Confirm password is required.\n";
	}

	if (confirm_password.length < min) {
		msg += "Confirm password must be at least " + min + " characters.\n";
	}

	if (confirm_password !== password) {
		msg += "Password and Confirm Password must match.\n";
	}

	if ( msg !== "") { open_modal(msg); }
}

/**
 * Checks if firstname contains only letters and that it is no longer than 50
 * characters. Field is required.
 *
 * @param {string} givenStr - A given string
 */
function valid_firstname (givenStr) {
	var firstname = givenStr.value;
	var max = config.firstname.max_length;
  var isRequired = config.firstname.required;
	var isText = Utilities.isText;
	var isEmpty = Utilities.isEmpty(firstname);
	var msg = "";

	if (isRequired && isEmpty) {
		msg += "Firstname is required.\n";
	}

	if (firstname.length > max) {
		msg += "Firstname must not be longer than " + max + " letters.\n";
	}

	if ( !isText(firstname) ) {
		msg += "Firstname must contain only letters.\n";
	}

	if ( msg !== "") { open_modal(msg); }
}

/**
 * Checks if laststname contains only letters and that it is no longer than 50
 * characters.
 *
 * @param {string} givenStr - A given string
 */
function valid_lastname (givenStr) {
	var lastname = givenStr.value;
	var max = config.lastname.max_length;
	var isText = Utilities.isText;
	var isEmpty = Utilities.isEmpty(lastname);
	var msg = "";

	if (!isEmpty) {
		if (lastname.length > max) {
			msg += "Lastname must not be longer than " + max + " letters.\n";
		}

		if ( !isText(lastname) ) {
			msg += "Lastname must contain only letters.\n";
		}

		if ( msg !== "") { open_modal(msg); }
	}
}

/**
 * Checks if birthday is in MM/DD/YYYY format and that age is from 14 to 150.
 * Required.
 *
 * @param {string} givenStr - A given string
 */
function valid_birthday (givenStr) {
	// TODO: write validation for birthday field
}

/**
 * Opens a modal dialog
 *
 * @param {string} msg - A string to append to body of modal.
 */
function open_modal (msg) {
	$('#alert-body').text(msg);
	$('#alertModal').modal('show');
}

/**
 * Clears form
 */
function clear_form () {
	var fields = document.querySelectorAll('.form-control');
	for (var i in fields) {
		fields[i].value = "";
	}
}

/**
 * Checks to see if all required fields are filled and submits form
 */
function submit_form () {
	var msg = '';
	var isNull = username.value !== '' &&
		password.value !== '' &&
		confirm_password.value !== '' &&
		firstname.value !=='';

	if (isNull) {
		msg += 'Form has been submitted.';
		clear_form();
	} else {
		msg += 'Required fields are not complete. Please try again.';
	}

	open_modal(msg);
}
