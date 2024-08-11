import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoleInterface } from "../../interfaces/RoleInterface";

export const NewRoles: React.FC = () => {

    let navigate = useNavigate();
    const toHome = () => {
        let path = "../Home";
        navigate(path)
    }
    const toRoles = () => {
        let path = "../Roles";
        navigate(path)
    }

    const [role, setRole] = useState<RoleInterface>(({
        
            rolesId:0,
            name:"",
            baseSalary:0,
            basePTO:0
        
    }))

    const storeValues = (input:any) =>{
        if (input.target.name === "name") {
            setRole((role) => ({...role, name:input.target.value}))
            
        } else if (input.target.name === "baseSalary") {
            setRole((role) => ({...role, baseSalary:input.target.value}))

        } else if (input.target.name === "basePTO") {
            setRole((role) => ({...role, basePTO:input.target.value}))

        }
    }

    const register = async () => {
        const response = await axios.post("http://localhost:8080/roles", role)
        .then((response) =>{
            alert("Role registered successfully!")
        })
        .catch(() =>{
            alert("Register Failed!")
        })
    }
        
    

    return(
        <div>
            
            <div className="text-container">
                <h2>Create new Role</h2>
                <div className="input-container">
                    <input type="text" name="name" placeholder="Name" onChange={storeValues} />
                    <br />
                    <input type="number" name="baseSalary" placeholder="Salary" onChange={storeValues}/>
                    <br />
                    <input type="number" name="basePTO" placeholder="Paid Time Off" onChange={storeValues}/>
                    <br />
                    
                    <button onClick={register}>Submit</button>
                    <button onClick={toRoles}>Back to Roles</button>
                </div>
            </div>
        </div>
    )
}