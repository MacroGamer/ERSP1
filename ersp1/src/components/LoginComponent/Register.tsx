import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInterface } from "../../interfaces/UserInterface";

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
            rolesId:1,
            name:"Employee",
            baseSalary: 50000,
            basePTO:12
        }
    }))

    const storeValues = (input:any) =>{
        if (input.target.name === "username") {
            setUser((user) => ({...user, username:input.target.value}))
            
        } else if (input.target.name === "email") {
            setUser((user) => ({...user, email:input.target.value}))

        } else if (input.target.name === "firstName") {
            setUser((user) => ({...user, firstName:input.target.value}))

        } else if (input.target.name === "lastName") {
            setUser((user) => ({...user, lastName:input.target.value}))

        } else if(input.target.name === "password"){
            setUser((user) => ({...user, password:input.target.value}))
        }
    }
    return(
        <div>
            
            <div className="text-container">
                <h2>Register to become a new User</h2>
                <div className="input-container">
                    <input type="text" name="username" placeholder="Username" />
                    <br />
                    <input type="text" name="email" placeholder="Email" />
                    <br />
                    <input type="text" name="firstName" placeholder="First Name" />
                    <br />
                    <input type="text" name="lastName" placeholder="Last Name" />
                    <br />
                    <input type="text" name="password" placeholder="Password" />
                    <br />
                    <input type="text" name="confirmPassword" placeholder="Confirm Password" />
                    <br />
                    <button onClick={toHome}>Submit</button>
                    <button onClick={toLogin}>Back to Login</button>
                </div>
            </div>
        </div>
    )
}