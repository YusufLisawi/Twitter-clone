import React from "react";
import "./styles/UserInfo.css";
import { Avatar } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function UserInfo({ avatar, displayName, username }) {
	return (
		<div className="userInfo">
			<div className="userInfo__details">
				<Avatar className="avatar" src={avatar} />
				<div className="userInfo__names">
					<h3>{displayName}</h3>
					<h4>@{username.split("@")[0]}</h4>
				</div>
			</div>
			<MoreHorizOutlinedIcon />
		</div>
	);
}

export default UserInfo;
