import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import { Roles } from "./Roles";
import { RoleInterface } from "../../interfaces/RoleInterface";
import { store } from "../../globalData/store";
import { Table } from "react-bootstrap";

export const RolesContainer: React.FC = () =>{
    let navigate = useNavigate();
    const toHome = () => {
        let path = "../Home";
        navigate(path)
    }
    const newRoles = () => {
        let path = "../NewRoles";
        navigate(path)
    }
    const toUsers = () => {
        let path = "../Users";
        navigate(path)
    }
    const toReimbursements = () => {
        let path = "../Reimbursements";
        navigate(path)
    }
    const toLogin = () => {
        let path = "../Login";
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
            <Table variant="dark" striped hover>
                    <tbody>
                        <tr>
                            <th><h1>Roles</h1></th>
                        </tr>
                        <tr>
                            <th>
                                <button onClick={toLogin}>Log Out</button>
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toHome}>Home</button>:<></>}
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toUsers}>Users</button>:<></>}
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toReimbursements}>All Reimbursements</button>:<></>}
                                {store.loggedInUser.rolesId === 1 ? <button onClick={newRoles}>New Role</button>:<></>} 
                            </th>
                        </tr>
                    </tbody>
                </Table>
             
            <Roles roles = {roles}></Roles>
            
        </div>
    )
}