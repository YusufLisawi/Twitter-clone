import React from "react";
import "./styles/Widgets.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

function Widgets() {
	return (
		<div className='widgets'>
			<div className='widgets__input'>
				<SearchOutlinedIcon className='widgets__searchIcon' />
				<input type='text' placeholder='Search Twitter' />
			</div>
			<div className='widgets__widgets'>
				<h2>What's happening</h2>
				<TwitterTimelineEmbed
					sourceType='profile'
					screenName='yusufisawi'
					options={{ height: 400 }}
				/>
				<TwitterTweetEmbed tweetId={"1563162686049120258"} />
			</div>
		</div>
	);
}

export default Widgets;
