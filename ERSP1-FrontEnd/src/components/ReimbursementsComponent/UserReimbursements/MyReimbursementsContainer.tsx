import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReimbursementInterface } from "../../../interfaces/ReimbursementInterface";
import { store } from "../../../globalData/store";
import { Table } from "react-bootstrap";
import { MyReimbursements } from "./../UserReimbursements/MyReimbursements";
import { MyPendingReimbursements } from "./MyPendingReimbursements";

export const MyReimbursementsContainer: React.FC = () =>{
    
    let navigate = useNavigate();
    const toHome = () => {
        let path = "../Home";
        navigate(path)
    }
    const newReimbursement = () => {
        let path = "../NewReimbursement";
        navigate(path)
    }

    const [reimbursements, setReimbursements] = useState<ReimbursementInterface[]>([])
    const [pendingReimbursements, setPendingReimbursements] = useState<ReimbursementInterface[]>([])

    useEffect(() =>{
        getAllReimbursements()
        getPendingReimbursements()
        
    }, [])
    const getAllReimbursements = async () => {

        const response = await axios.get("http://localhost:8080/reimbursements/u/" + store.loggedInUser.usersId)
    
        

        setReimbursements(response.data)
        //alert(response.data)
        
    }
    const getPendingReimbursements = async () => {

        const response = await axios.get("http://localhost:8080/reimbursements/PENDING/u/" + store.loggedInUser.usersId)

        setPendingReimbursements(response.data)
        //alert(response.data)
        
    }
    return(
        <div>
            <div className="profile2">
                <Table variant="dark" striped bordered hover>
                    <tbody>
                        <tr>
                            <th>Your Reimbursements</th>
                        </tr>
                    </tbody>
                </Table>
                <MyReimbursements reimbursements = {reimbursements}></MyReimbursements>
            </div>
            <div className="profile2">
                <Table variant="dark" striped bordered hover>
                    <tbody>
                        <tr>
                            <th>Your Pending Reimbursements</th>
                            <th><button onClick={newReimbursement}>Add Reimbursement</button></th>
                        </tr>
                    </tbody>
                </Table>
                <MyPendingReimbursements pendingReimbursements = {pendingReimbursements}></MyPendingReimbursements>
            </div>
            
        </div>
    )
}