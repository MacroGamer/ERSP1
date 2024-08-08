import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import { UserInterface } from "../../interfaces/UserInterface";
import { Users } from "./Users";

export const UserContainer: React.FC = () =>{

    let navigate = useNavigate();
    const toHome = () => {
        let path = "../Home";
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
    
    return(
        <div className="collection-container">
            <h3>Users</h3>
            <button onClick={toHome}>Home</button>
                
            <Users users = {users}></Users>
            
        </div>
    )
}