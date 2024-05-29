import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	function handleLogOut() {

		localStorage.removeItem('token')

		document.location.href = '/'

	}

	return (store.isLoged ?
		<div className="container text-left mt-5" style={{ border: "1px solid black", borderRadius: "10px", padding: "15px" }}>
			<h1>You Are Loged</h1>
			<button onClick={handleLogOut} className="btn bg-primary">Log Out</button>
		</div>
		:
		<div className="container mt-5" style={{ border: "1px solid black", borderRadius: "10px", padding: "15px" }}>
			<h1>You Need to be loged</h1>
			<Link className="btn bg-primary" to={"/"}>Log In</Link>
		</div>
	)
};
