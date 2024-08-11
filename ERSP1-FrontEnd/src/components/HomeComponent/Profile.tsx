import axios from "axios"
import { useState, useEffect } from "react"
import { store } from "../../globalData/store"
import { UserInterface } from "../../interfaces/UserInterface"
import { Table } from "react-bootstrap"

export const Profile: React.FC = () =>{

    const [users, setUsers] = useState<UserInterface>({
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

    useEffect(() =>{
        getUsersProfile()
        
    }, [])

    const getUsersProfile = async () => {

        const response = await axios.get("http://localhost:8080/users/u/" + store.loggedInUser.usersId)

        setUsers(response.data)
        //alert(response.data)
        
    }
    return(
        <div className="profile">
            <Table variant="dark" striped bordered hover>
                <tbody>
                    <tr>
                        <th>Hello, {users.firstName} {users.lastName}</th>
                    </tr>
                </tbody>
            </Table>
            <Table variant="dark" striped bordered hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>{users.username}</th>
                    </tr>
                    <tr>
                        <th>
                            Password
                        </th>
                        <th>
                            {users.password}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Job Title</th>
                        <th>{users.roles.name}</th>
                    </tr>
                    <tr>
                        <th>Salary</th>
                        <th>{users.roles.baseSalary}</th>
                    </tr>
                    <tr>
                        <th>Accrued PTO</th>
                        <th>{users.roles.basePTO}</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}