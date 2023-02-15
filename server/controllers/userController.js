const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
/* 
+desc	Register a new user
+route	POST /api/users
+access	Public
*/
const registerUser = asyncHandler(async (req, res) => {
	const { fullname, username, phone, email, password } = req.body;
	if (!fullname || !username || !phone || !email || !password) {
		res.status(400);
		throw new Error("Please fill in all fields");
	}
	//  Check if user exists
	const userExists = await User.findOne({ $or: [{ username }, { email }] });
	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}
	//  Create user
	//  Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	const user = await User.create({
		fullname,
		username,
		phone,
		email,
		password: hashedPassword,
	});
	if (user) {
		res.status(200).json({
			_id: user.id,
			token: generateToken(user.id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});
/* 
+desc	Authenticate user
+route	POST /api/users/login
+access	Public
*/
const loginUser = asyncHandler(async (req, res) => {
	const { login, password } = req.body;
	if (!login || !password) {
		res.status(400);
		throw new Error("Please fill in all fields");
	}
	//  Check if user exists
	const user = await User.findOne({
		$or: [{ username: login }, { email: login }],
	});
	if (!user) {
		res.status(400);
		throw new Error("User does not exist");
	}
	//  Check if password is correct
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		res.status(400);
		throw new Error("Invalid password");
	} else {
		res.status(200).json({
			_id: user.id,
			username: user.username,
			token: generateToken(user.id),
		});
	}
});
/* 
+desc	Get current user data
+route	GET /api/users/me
+access	private
*/
const getMe = asyncHandler(async (req, res) => {
	res.status(200).json(req.user);
});
/* 
+desc	Get user data
+route	GET /api/users/:id
+access	private
*/
const getUser = asyncHandler(async (req, res) => {
	const user = await User.findOne({ username: req.params.id }).select(
		"-password -__v -role"
	);
	if (user) {
		res.status(200).json(user);
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "15d" });
};

module.exports = { registerUser, loginUser, getMe, getUser };
