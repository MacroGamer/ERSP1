import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import { UserInterface } from "../../interfaces/UserInterface";
import { Users } from "./Users";
import { Table } from "react-bootstrap";
import { store } from "../../globalData/store";

export const UserContainer: React.FC = () =>{

    const toLogin = () => {
        let path = "../Login";
        navigate(path)
    }
    let navigate = useNavigate();
    const toHome = () => {
        let path = "../Home";
        navigate(path)
    }
    const toReimbursements = () => {
        let path = "../Reimbursements";
        navigate(path)
    }
    const toRoles = () => {
        let path = "../Roles";
        navigate(path)
    }
    const [users, setUsers] = useState<UserInterface[]>([])

    useEffect(() =>{
        getAllUsers()
        
    }, [])

    const getAllUsers = async () => {

        const response = await axios.get("http://localhost:8080/users")

        setUsers(response.data)
        //alert(response.data)
        
    }
    const [selectedUser, setSelectedUser] = useState<UserInterface>({
        usersId:0,
        username:"",
        firstName:"",
        lastName:"",
        password:"",
        roles:{
            rolesId: 0,
            name: "",
            baseSalary: 0,
            basePTO: 0
        }
    })
    const [userOptions, setUserOptions] = useState<boolean>(false)

    const selectUserData = (user:UserInterface)=>{
        setSelectedUser(user)
        setUserOptions(!userOptions)
    }
    return(
        <div className="collection-container">
            <Table variant="dark" striped hover>
                    <tbody>
                        <tr>
                            <th><h1>Users</h1></th>
                        </tr>
                        <tr>
                            <th>
                                <button onClick={toLogin}>Log Out</button>
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toHome}>Home</button>:<></>}
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toReimbursements}>All Reimbursements</button>:<></>}
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toRoles}>Roles</button>:<></>}
                            </th>
                        </tr>
                    </tbody>
                </Table>
                
            <Users users = {users}></Users>
            
        </div>
    )
}