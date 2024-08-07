import React from "react"
import {useNavigate} from "react-router-dom";
import { RoleInterface } from "../../interfaces/RoleInterface";

export const Roles: React.FC<RoleInterface> = (role:RoleInterface) =>{



    return(
        <div className="role-container">
            <p>{role.name}  
            <br />
            {"Salary: " + role.baseSalary}
            <br />
            {"PTO: " + role.basePTO}</p>
        </div>
    )
}