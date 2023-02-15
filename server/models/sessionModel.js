const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		tutor: {
			type: String,
			required: true,
		},
		title: { type: String, required: [true, "Please add a title"] },
		description: {
			type: String,
			required: [true, "Please add a description"],
		},
		tags: { type: [String], required: [true, "Please add a tag"] },
		type: {
			type: String,
			required: [true, "Please specify the type of this session"],
		},
		location: { type: String, required: [true, "Please add a location"] },
		date: { type: Date, required: [true, "Please add a date"] },
		subscribers: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: "User",
		},
		maxSubscribers: {
			type: Number,
			required: [true, "Please add a number"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Session", sessionSchema, "sessions");
