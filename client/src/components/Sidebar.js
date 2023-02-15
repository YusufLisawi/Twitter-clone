import React from "react";
import "./styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import UserInfo from "./UserInfo";
// Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Button from "@mui/material/Button";
import TagIcon from "@mui/icons-material/Tag";
import { useStateValue } from "../features/StateProvider";

function Sidebar() {
	const [{ user }] = useStateValue();

	return (
		<div className="sidebar">
			<div className="sidebar__menu">
				<TwitterIcon />

				<SidebarOption active Icon={HomeRoundedIcon} text="Home" />
				<SidebarOption Icon={TagIcon} text="Explore" />
				<SidebarOption
					Icon={NotificationsOutlinedIcon}
					text="Notifications"
				/>
				<SidebarOption Icon={BookmarksOutlinedIcon} text="Bookmarks" />
				<SidebarOption Icon={PersonOutlinedIcon} text="Profile" />
				<SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

				<Button variant="outlined" fullWidth className="sidebar__tweet">
					Tweet
				</Button>
			</div>
			<UserInfo
				avatar={user.photoURL}
				displayName={user.displayName}
				username={user.email}
			/>
		</div>
	);
}

export default Sidebar;
