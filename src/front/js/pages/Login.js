import React, { useContext, useState } from "react";
import { Context } from "../store/appContext"

export default function Login() {

    const { store, actions } = useContext(Context)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    return (<form className="container loginContainer">
        <div className="loginForm">
            <h1 className="mb-2">Login</h1>
            <div class="input-group mb-3">
                <label class="input-group-text" htmlFor="email_field" id="email">Email</label>
                <input type="text" class="form-control" id="email_field" value={email} onChange={(event) => { setEmail(event.target.value) }} aria-label="Username" aria-describedby="email"></input>
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text" htmlFor="password_field" id="password">Password</label>
                <input type="password" class="form-control" id="password_field" value={password} onChange={(event) => { setPassword(event.target.value) }} aria-label="Password" aria-describedby="password"></input>
            </div>
            <button className="btn btn-success" style={{ width: "100%", marginTop: "20px" }}>Log in</button>
        </div>
    </form>)


} 