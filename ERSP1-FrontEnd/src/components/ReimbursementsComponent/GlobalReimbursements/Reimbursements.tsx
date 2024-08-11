import React, { useEffect } from "react"
import {useNavigate} from "react-router-dom";
import { ReimbursementInterface } from "../../../interfaces/ReimbursementInterface";
import { Table, Button } from "react-bootstrap";
import { store } from "../../../globalData/store";
import axios from "axios";

export const Reimbursements: React.FC<{reimbursements:ReimbursementInterface[]}> = ({reimbursements}) =>{

    const approveReimbursement = async (id:any) => {
        const response = await axios.patch("http://localhost:8080/reimbursements/" + id, "APPROVED", {
            headers: {"Content-Type":"text/plain"}})
        .then((response) =>{
            alert("Reimbursement Approved Successfully!")
        })
        .catch(() =>{
            alert("Update Failed!")
        })
    }
    const denyReimbursement = async (id:any) => {
        const response = await axios.patch("http://localhost:8080/reimbursements/" + id, "DENIED", {
            headers: {"Content-Type":"text/plain"}})
        .then((response) =>{
            alert("Reimbursement Denied Successfully!")
        })
        .catch(() =>{
            alert("Update Failed!")
        })
    }
    useEffect(() =>{
        console.log(reimbursements)
    })

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
                        
                    </tr>
                </thead>
                <tbody>
                    {reimbursements.map((reimbursement, index) => (
                        <tr key = {reimbursement.reimbursementsId}>
                            <td>{index}</td>
                            <th>{reimbursement.users.firstName} {reimbursement.users.lastName}</th>
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