import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import { Roles } from "./Roles";
import { RoleInterface } from "../../interfaces/RoleInterface";

export const RolesContainer: React.FC = () =>{
    let navigate = useNavigate();
    const toHome = () => {
        let path = "../Home";
        navigate(path)
    }

    const [roles, setRoles] = useState<RoleInterface[]>([])

    useEffect(() =>{
        getAllRoles()
        
    }, [])

    const getAllRoles = async () => {

        const response = await axios.get("http://localhost:8080/roles")

        setRoles(response.data)
        //alert(response.data)
        
    }
    
    return(
        <div className="collection-container">
            <h3>Roles</h3>
            <button onClick={toHome}>Home</button>
            {roles.map((role, index) => 
                <div>
                    <Roles {...role}></Roles>
                    
                    
                </div>
            )}
        </div>
    )
}