import React, { useEffect } from "react"
import {useNavigate} from "react-router-dom";
import { RoleInterface } from "../../interfaces/RoleInterface";
import { Table, Button } from "react-bootstrap";

export const Roles: React.FC<{roles:RoleInterface[]}> = ({roles}) =>{

    useEffect(() =>{
        console.log(roles)
    })

    return(
        <div>
            <Table variant="dark" striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>PTO Days</th>
                        <th>Update / Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role, index) => (
                        <tr key = {role.rolesId}>
                            <td>{index}</td>
                            <td>{role.name}</td>
                            <td>{role.baseSalary}</td>
                            <td>{role.basePTO}</td>
                            <td><Button variant="info">Update</Button><Button variant="danger">Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}