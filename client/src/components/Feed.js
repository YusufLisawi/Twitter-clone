import React from "react";
import "./styles/Feed.css";
import { useEffect, useState } from "react";
import TweetBox from "./TweetBox";
import Posts from "./Posts";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import db from "../firebase";
import { useStateValue } from "../features/StateProvider";

function Feed() {
	const [posts, setPosts] = useState([]);
	const [{ user }] = useStateValue();

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				);
			});
	}, []);

	return (
		<div className="feed">
			<div className="feed__header">
				<h2>Latest Tweets</h2>
				<AutoAwesomeOutlinedIcon />
			</div>

			<TweetBox
				avatar={user.photoURL}
				displayName={user.displayName}
				username={user.email}
			/>

			<Posts posts={posts} />
		</div>
	);
}

export default Feed;
