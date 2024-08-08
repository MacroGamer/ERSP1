
import React, { useEffect, useState } from "react"
import { UserInterface } from "../../interfaces/UserInterface";
import "./Users.css"
import { Button, Table } from "react-bootstrap";
import { RoleInterface } from "../../interfaces/RoleInterface";



export const Users: React.FC<{users:UserInterface[]}> = ({users}) =>{

    useEffect(() =>{
        console.log(users)
    })

    return(
        <div>
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
                            <td><Button variant="info">Update</Button><Button variant="danger">Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}