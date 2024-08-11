import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import { ReimbursementInterface } from "../../../interfaces/ReimbursementInterface";
import { Table, Button } from "react-bootstrap";
import { store } from "../../../globalData/store";
import axios from "axios";

export const PendingReimbursements: React.FC<{pendingReimbursements:ReimbursementInterface[]}> = ({pendingReimbursements}) =>{
    
    const approveReimbursement = async (id:any) => {
        const response = await axios.patch("http://localhost:8080/reimbursements/" + id, "APPROVED", {
            headers: {"Content-Type":"text/plain"}})
        .then((response) =>{
            alert("Reimbursement registered successfully!")
        })
        .catch(() =>{
            alert("Update Failed!")
        })
    }
    const denyReimbursement = async (id:any) => {
        const response = await axios.patch("http://localhost:8080/reimbursements/" + id, "DENIED", {
            headers: {"Content-Type":"text/plain"}})
        .then((response) =>{
            alert("Reimbursement registered successfully!")
        })
        .catch(() =>{
            alert("Update Failed!")
        })
    }
    return(
        <div className="profile2">
            <Table variant="dark" striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Owner</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Update/Delete</th>
                        </tr>
                </thead>
                <tbody>
                {pendingReimbursements.map((reimbursement, index) => (
                        <tr key = {reimbursement.reimbursementsId}>
                            <td>{index}</td>
                            <th>{reimbursement.users.firstName} {reimbursement.users.lastName}</th>
                            <td>{reimbursement.description}</td>
                            <td>{reimbursement.amount}</td>
                            <td>{reimbursement.status}</td>
                            <td>
                                <Button variant="info" onClick={()=>{approveReimbursement(reimbursement.reimbursementsId)}}>Approve</Button>
                            <Button variant="danger" onClick={()=>{denyReimbursement(reimbursement.reimbursementsId)}}>Deny</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}