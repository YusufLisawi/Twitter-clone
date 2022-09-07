import React from "react";
import "./Login.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
	const [state, dispatch] = useStateValue();

	const signIn = () => {
		auth.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
				console.log(result.user);
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<TwitterIcon className="logo" />
			<Button type="submit" className="btn btn-primary" onClick={signIn}>
				Sign In With Google
			</Button>
		</div>
	);
}

export default Login;
