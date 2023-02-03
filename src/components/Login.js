import { useState } from "react";
import { login } from "../utils";

const Login = ({setter}) => {
    // State variables
    const [username, setUserName] =useState();
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();

    const submitHandler = async (event) => {
        // This prevents the default clearing of screen after input
        event.preventDefault();
        console.log("executing login request");
        await login(username, email, password, setter);
    }
    return (
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setUserName(event.target.value)} />
            <input onChange={(event) => setEmail(event.target.value)} />
            <input onChange={(event) => setPassword(event.target.value)} />
            <button onclick={submitHandler}>Submit</button>
        </form>
    )
}

export default Login;