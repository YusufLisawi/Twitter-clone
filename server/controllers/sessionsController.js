const asyncHandler = require("express-async-handler");
const Session = require("../models/sessionModel");
const User = require("../models/userModel");
/* 
+desc   Get all sessions
+route	GET /api/sessions/all
+access	Public
*/
const getSessions = asyncHandler(async (req, res) => {
	const sessions = await Session.find();
	res.status(200).json(sessions);
});
/* 
+desc   Get all sessions
+route	GET /api/sessions
+access	Private
*/
const getMySessions = asyncHandler(async (req, res) => {
	const sessions = await Session.find({ user: req.user.id });
	if (!sessions) {
		res.status(400);
		throw new Error("No sessions found");
	}
	res.status(200).json(sessions);
});
/* 
+desc   Add a new session
+route	POST /api/sessions
+access	Private
*/
const addSession = asyncHandler(async (req, res) => {
	if (!req.body) {
		res.status(400);
		throw new Error("Please add data");
	}

	const session = new Session({
		user: req.user.id,
		tutor: req.user.username,
		title: req.body.title,
		description: req.body.description,
		tags: req.body.tags,
		location: req.body.location,
		type: req.body.type,
		date: req.body.date,
		maxSubscribers: req.body.maxSubscribers,
		subscribers: [],
	});
	const createdSession = await session.save();

	res.status(200).json(createdSession);
});
/* 
+desc   Update a session where id = :id
+route	UPDATE /api/sessions/:id
+access	Private
*/
const updateSession = asyncHandler(async (req, res) => {
	const session = await Session.findById(req.params.id);
	if (!session) {
		res.status(400);
		throw new Error("Session not found");
	}
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}
	if (session.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("Not authorized to update this session");
	}
	const updatedSession = await Session.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	res.status(200).json(updatedSession);
});
/* 
+desc   Delete a session where id = :id
+route	Delete /api/sessions/:id
+access	Private
*/
const deleteSession = asyncHandler(async (req, res) => {
	const session = await Session.findById(req.params.id);
	if (!session) {
		res.status(400);
		throw new Error("Session not found");
	}
	if (!req.user) {
		res.status(400);
		throw new Error("User not found");
	}
	if (session.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("Not authorized to delete this session");
	}
	const deletedSession = await Session.findByIdAndDelete(req.params.id);
	res.status(200).json(deletedSession);
});

module.exports = {
	getSessions,
	getMySessions,
	addSession,
	updateSession,
	deleteSession,
};
