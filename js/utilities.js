var Utilities = (function(){

	/**
	 * Trims empty spaces from given string
	 *
	 * @param {string} givenStr - A given string
	 * @return {string} temp - Trimmed string
	 */
	var trimString = function (givenStr) {
		if (null === givenStr){ return ""; }

		var  temp = givenStr.replace(/^\s*/, "");
		temp = temp.replace(/\s*$/, "");

		return temp;
	};

	/**
	 * Checks to see if given string consists of digits only.
	 *
	 * @param {string} givenStr - A given string
	 * @return {boolean} true | false
	 */
	var isNumeric = function (givenStr) {
		var re = /^[0-9]+$/;

		return re.test(givenStr);
	};

	/**
	 * Checks to see if given string consists of letters only.
	 *
	 * @param {string} givenStr - A given string
	 * @return {boolean} true | false
	 */
	var isText = function (givenStr) {
		var re = /^[a-zA-Z]+$/;

		return re.test(givenStr);
	};

	/**
	 * Checks to see if given string consists of letters and digits.
	 *
	 * @param {string} givenStr - A given string
	 * @return {boolean} true | false
	 */
	var isAlphaNumeric = function (givenStr) {
		var re = /^[a-z0-9]+$/i;

		return re.test(givenStr);
	};

	/**
	 * Checks to see if given string is empty.
	 *
	 * @param {string} givenStr - A given string
	 * @return {boolean} true | false
	 */
	var isEmpty = function (givenStr) {
		if (givenStr === '' || givenStr === null){ return true; }

		return false;
	};

	/**
	 * Checks to see if given string is in email format..
	 *
	 * @param {string} givenStr - A given string
	 * @return {boolean} true | false
	 */
	var isEmail = function (givenStr){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return re.test(givenStr);
	};

	return {
		trimString: trimString,
		isNumeric: isNumeric,
		isText: isText,
		isAlphaNumeric: isAlphaNumeric,
		isEmpty: isEmpty,
		isEmail: isEmail
	};

})();
