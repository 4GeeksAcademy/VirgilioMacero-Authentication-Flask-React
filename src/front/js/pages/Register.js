import React, { useContext, useState } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

export default function Register() {
    const { store, actions } = useContext(Context)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    function handelRegister(e) {
        e.preventDefault()

        if (email != "" & password != "") {
            if (password === rePassword) {

                actions.register(email, password)

            }
            else {
                alert("Bouth passwords should be the same ")
            }
        }
        else {
            alert("You will need to enter all values")
        }


    }



    return (<form className="container loginContainer">


        <div className="loginForm">

            <h1 className="mb-2"><Link to={"/login"}><i className="bi bi-caret-left h3"></i></Link>Register</h1>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="email_field" id="email">Email</label>
                <input type="text" className="form-control" id="email_field" value={email} onChange={(event) => { setEmail(event.target.value) }} aria-label="Username" aria-describedby="email" required></input>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="password_field" id="password">Password</label>
                <input type="password" className="form-control" id="password_field" value={password} onChange={(event) => { setPassword(event.target.value) }} aria-label="Password" aria-describedby="password" required></input>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="rePassword_field" id="rePassword">Re-enter Password</label>
                <input type="password" className="form-control" id="rePassword_field" value={rePassword} onChange={(event) => { setRePassword(event.target.value) }} aria-label="Password" aria-describedby="password" required></input>
            </div>
            <button className="btn btn-success" onClick={handelRegister} style={{ width: "100%", marginTop: "20px" }}>Register</button>
        </div>
    </form>)
}
