const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		fullname: { type: String, required: [true, "Please add a name"] },
		username: {
			type: String,
			required: [true, "Please add a username"],
			unique: true,
		},
		email: {
			type: String,
			required: [true, "Please add an email"],
			unique: true,
		},
		phone: { type: String, required: [true, "Please add a phone number"] },
		password: { type: String, required: [true, "Please set a password"] },
		avatar: { type: String },
		about: { type: String },
		role: { type: String, enum: ["member", "admin"], default: "member" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema, "users");
