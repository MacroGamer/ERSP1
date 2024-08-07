import axios from "axios";
import React, { useState } from "react"
import {useNavigate} from "react-router-dom"
export const Login: React.FC = () => {
    
    let navigate = useNavigate();
    
    const login = async () => {
        navigate("/Home")
    }
    const register = async () => {
        navigate("/register")
    }

    const [userRoleId, setUserRoleId] = useState(0);
    const [user, setUser] = useState({username:"", password:""})

    const storeLogin = (input:any) =>{
        if(input.target.name === "username"){
            setUser((user) =>({
                ...user, username:input.target.value
            }))
        } else{
            setUser((user) =>({
                ...user, password:input.target.value
            }))
        }
    }
    //axios.get("localhost:8080/Roles")
    
    return(
        <div>
            
            <h2>Please Login</h2>
            <input name="username" type="text" placeholder="Username" onChange={storeLogin} />
            <br />
            <input name="password" type="password" placeholder="Password" onChange={storeLogin}/>
            <br />
            
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
        </div>
    )
}