import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import "./styles/Post.css";

const Post = forwardRef(
	(
		{ avatar, displayName, username, verified, text, image, timestamp },
		ref
	) => {
		return (
			<div className="post" ref={ref}>
				<div className="post__avatar">
					<Avatar className="avatar" src={avatar} />
				</div>
				<div className="post__body">
					<div className="post__header">
						<div className="post__owner">
							<h3>{displayName}</h3>
							<span>
								{verified && (
									<VerifiedIcon className="verified" />
								)}
							</span>
						</div>
						<h4>@{username}</h4>
						<h4 style={{ fontSize: "14px" }}>
							{" · "}
							{timestamp
								.toDate()
								.toString()
								.split(" ", 3)
								.join(" ")}
						</h4>
					</div>
					<div className="post__content">
						<p>{text}</p>
						{image && <img src={image} alt={text.substr(0, 10)} />}
					</div>
					<div className="post__footer">
						<ModeCommentOutlinedIcon fontSize="small" />
						<RepeatOutlinedIcon fontSize="small" />
						<FavoriteBorderOutlinedIcon fontSize="small" />
						<IosShareOutlinedIcon fontSize="small" />
					</div>
				</div>
			</div>
		);
	}
);

export default Post;
