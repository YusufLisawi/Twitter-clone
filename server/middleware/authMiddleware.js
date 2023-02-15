const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const verifyToken = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			// Get token from header
			token = req.headers.authorization.split(" ")[1];
			// Verify token
			const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
			// Get user from database by the id in the token (without password)
			req.user = await User.findById(decodedToken.id).select(
				"-password -__v"
			);
			next();
		} catch (err) {
			console.error(err);
			res.status(401);
			throw new Error("Not authorized, Invalid token");
		}
	}
	if (!token) {
		res.status(401);
		throw new Error("Not authorized, no token");
	}
});

module.exports = { verifyToken };
