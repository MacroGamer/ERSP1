import React, { useEffect } from "react"
import { ReimbursementInterface } from "../../../interfaces/ReimbursementInterface";
import { Table, Button } from "react-bootstrap";

export const MyReimbursements: React.FC<{reimbursements:ReimbursementInterface[]}> = ({reimbursements}) =>{

    
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
                        </tr>
                </thead>
                <tbody>
                    {reimbursements.map((reimbursement, index) => (
                        <tr key = {reimbursement.reimbursementsId}>
                            <td>{index}</td>
                            <td>{reimbursement.description}</td>
                            <td>{reimbursement.amount}</td>
                            <td>{reimbursement.status}</td>
                            </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}