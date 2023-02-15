const express = require("express");
const router = express.Router();
const {
	getSessions,
	getMySessions,
	addSession,
	updateSession,
	deleteSession,
} = require("../controllers/sessionsController");

const { verifyToken } = require("../middleware/authMiddleware");

// Public routes
router.get("/all", getSessions);

// Protected routes
router.route("/").get(verifyToken, getMySessions).post(verifyToken, addSession);

router
	.route("/:id")
	.put(verifyToken, updateSession)
	.delete(verifyToken, deleteSession);

module.exports = router;
