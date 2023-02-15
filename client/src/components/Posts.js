import React from "react";
import Post from "./Post";
// import FlipMove from "react-flip-move";

function Posts({ posts }) {
	return (
		<div>
			{/* <FlipMove> */}
			{posts.map((post) => (
				<Post
					key={post.id}
					avatar={post.avatar}
					displayName={post.displayName}
					username={post.username}
					verified={post.verified}
					text={post.text}
					image={post.image}
					timestamp={post.timestamp}
				/>
			))}
			{/* </FlipMove> */}
		</div>
	);
}

export default Posts;
