
import React, { useEffect, useState } from "react"
import { UserInterface } from "../../interfaces/UserInterface";
import "./Users.css"
import { Button, Table } from "react-bootstrap";
import { RoleInterface } from "../../interfaces/RoleInterface";
import axios from "axios";



export const Users: React.FC<{users:UserInterface[]}> = ({users}) =>{

    const deleteUser = async (usersId:any) => {
        const response = await axios.delete("http://localhost:8080/users/" + usersId)
        .then((response) =>{
            alert("FIRED!!!")
        })
        .catch(() =>{
            alert("Update Failed!")
        })
    }
    const promoteUser = async (usersId:any) => {
        const response = await axios.patch("http://localhost:8080/users/u/" + usersId, {
            headers: {"Content-Type":"text/plain"}})
        .then((response) =>{
            alert("User Promoted Successfully!")
        })
        .catch(() =>{
            alert("Update Failed!")
        })
    
    }
    useEffect(() =>{
        console.log(users)
    })

    return(
        <div className="profile2">
            <div>
            </div>
            <Table variant="dark" striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Update / Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key = {user.usersId}>
                            <td>{index}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.roles.name}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.roles.rolesId === 2 ? <Button onClick={()=>{promoteUser(user.usersId)}}>Promote</Button>:<></>}
                            <Button variant="danger" onClick={()=>{deleteUser(user.usersId)}}>Fire</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}