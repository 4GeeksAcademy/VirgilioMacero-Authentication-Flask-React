import React, { useContext, useState } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

export default function Login() {

    const { store, actions } = useContext(Context)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(e) {
        e.preventDefault()

        if (email != "" & password != "") {

            actions.login(email, password)

        }
        else {
            alert("You need to enter al the values to log in")
        }


    }

    return (<form className="container loginContainer">
        <div className="loginForm">
            <h1 className="mb-2">Login</h1>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="email_field" id="email">Email</label>
                <input type="text" className="form-control" id="email_field" value={email} onChange={(event) => { setEmail(event.target.value) }} aria-label="Username" aria-describedby="email" required></input>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="password_field" id="password">Password</label>
                <input type="password" className="form-control" id="password_field" value={password} onChange={(event) => { setPassword(event.target.value) }} aria-label="Password" aria-describedby="password" required></input>
            </div>
            <div style={{ textAlign: "right" }}>
                <Link to={"/register"}>
                    New User ?
                </Link>
            </div>
            <button onClick={handleLogin} className="btn btn-success" style={{ width: "100%", marginTop: "20px" }}>Log in</button>
        </div>
    </form>)


} 