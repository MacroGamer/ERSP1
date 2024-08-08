import React, { useEffect } from "react"
import {useNavigate} from "react-router-dom";
import { ReimbursementInterface } from "../../interfaces/ReimbursementInterface";
import { Table, Button } from "react-bootstrap";

export const Reimbursements: React.FC<{reimbursements:ReimbursementInterface[]}> = ({reimbursements}) =>{

    useEffect(() =>{
        console.log(reimbursements)
    })

    return(
        <div>
            <Table variant="dark" striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Update / Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {reimbursements.map((reimbursement, index) => (
                        <tr key = {reimbursement.reimbursementsId}>
                            <td>{index}</td>
                            <td>{reimbursement.description}</td>
                            <td>{reimbursement.amount}</td>
                            <td>{reimbursement.status}</td>
                            <td><Button variant="info">Update</Button><Button variant="danger">Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}