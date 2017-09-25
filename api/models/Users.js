/* global PasswordService */
/**
* Users.js
*/

const PASSWORD_MIN_LENGTH = 5;
const PASSWORD_MAX_LENGTH = 30;

module.exports = {
	attributes: {
		firstName: {
			required: true,
		},

		mobileNo: {
			required: true,
			unique: true,
			type: 'string',
		},

		password: {
			required: true,
			minLength: PASSWORD_MIN_LENGTH,
			maxLength: PASSWORD_MAX_LENGTH,
			type: 'string',
		},

		// Override toJSON method to remove password from API
		toJSON() {
			const obj = this.toObject();
			delete obj.password;
			return obj;
		},
	},

	validationMessages: {
		firstName: {
			required: 'First name is required.',
		},
		mobileNo: {
			required: 'Mobile No is required.',
			unique: 'Mobile No already exists.',
		},
		password: {
			required: 'Password is required.',
			minLength: `Password is too short (min ${PASSWORD_MIN_LENGTH} characters).`,
			maxLength: `Password is too long (max ${PASSWORD_MAX_LENGTH} characters).`,
		},
	},

	beforeCreate(attrs, next) {
		PasswordService.encryptPassword(attrs.password).then((password) => {
			attrs.password = password; // This is the only way to assign the new encrypted password
			next();
		});
	},

	add(attrs, next) {
		const payload = {
			firstName: String(attrs.firstName).trim(),
			mobileNo: String(attrs.mobileNo).trim(),
			password: String(attrs.password).trim(),
		};
		return this.create(payload).exec(next);
	},
};
