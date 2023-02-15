const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");
const {
	registerUser,
	loginUser,
	getMe,
	getUser,
} = require("../controllers/userController");

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/me", verifyToken, getMe);
router.get("/:id", verifyToken, getUser);

module.exports = router;
