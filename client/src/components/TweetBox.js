import React from "react";
import "./styles/TweetBox.css";
import { useState } from "react";
import UploadIcon from "./UploadIcon";
import { Button, Avatar } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import db from "../firebase";

function TweetBox({ avatar, displayName, username }) {
	const [tweetMessage, setTweetMessage] = useState("");
	const sendTweet = (e) => {
		e.preventDefault();
		if (tweetMessage !== "") {
			db.collection("posts").add({
				avatar: avatar,
				displayName: displayName,
				username: username.split("@")[0],
				verified: true,
				text: tweetMessage,
				timestamp: new Date(),
			});
			setTweetMessage("");
		}
	};
	return (
		<div className="tweetbox">
			<form>
				<Avatar className="avatar" src={avatar} />
				<div className="tweetbox__input">
					<input
						type="text"
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="What's happening?"
					/>
					<div className="tweetbox__media-button">
						<div className="media">
							<UploadIcon
								Icon={ImageOutlinedIcon}
								type="image/jpg/png"
							/>
							<UploadIcon
								Icon={GifBoxOutlinedIcon}
								type="image/gif"
							/>
						</div>

						<Button
							onClick={sendTweet}
							type="submit"
							className="btn btn-primary"
						>
							Tweet
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default TweetBox;
