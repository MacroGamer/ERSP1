import React, { useEffect, useState } from "react"
import { ReimbursementInterface } from "../../../interfaces/ReimbursementInterface";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { store } from "../../../globalData/store";

export const MyPendingReimbursements: React.FC<{pendingReimbursements:ReimbursementInterface[]}> = ({pendingReimbursements}) =>{

    
    
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
                    {pendingReimbursements.map((reimbursement, index) => (
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