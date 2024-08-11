import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInterface } from "../../interfaces/UserInterface";
import axios from "axios";

export const Register: React.FC = () => {

    let navigate = useNavigate();
    const toHome = () => {
        let path = "../Home";
        navigate(path)
    }
    const toLogin = () => {
        let path = "../Login";
        navigate(path)
    }

    const [user, setUser] = useState<UserInterface>(({
        usersId: 0,
        firstName:"",
        lastName:"",
        username:"",
        password:"",
        roles:{
            rolesId:0,
            name:"",
            baseSalary:0,
            basePTO:0
        }
    }))

    const storeValues = (input:any) =>{
        if (input.target.name === "username") {
            setUser((user) => ({...user, username:input.target.value}))
        } else if (input.target.name === "firstName") {
            setUser((user) => ({...user, firstName:input.target.value}))

        } else if (input.target.name === "lastName") {
            setUser((user) => ({...user, lastName:input.target.value}))

        } else if(input.target.name === "password"){
            setUser((user) => ({...user, password:input.target.value}))
        }
    }

    const register = async () => {
        const response = await axios.post("http://localhost:8080/users", user)
        .then((response) =>{
            alert("User registered successfully!")
        })
        .catch(() =>{
            alert("Register Failed!")
        })
    }
        
    

    return(
        <div>
            
            <div className="text-container">
                <h2>Register to become a new User</h2>
                <div className="input-container">
                    <input type="text" name="username" placeholder="Username" onChange={storeValues} />
                    <br />
                    <input type="text" name="firstName" placeholder="First Name" onChange={storeValues}/>
                    <br />
                    <input type="text" name="lastName" placeholder="Last Name" onChange={storeValues}/>
                    <br />
                    <input type="password" name="password" placeholder="Password" onChange={storeValues}/>
                    <br />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                    <br />
                    <button onClick={register}>Submit</button>
                    <button onClick={toLogin}>Back to Login</button>
                </div>
            </div>
        </div>
    )
}