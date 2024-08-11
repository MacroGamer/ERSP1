import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import { Reimbursements } from "./Reimbursements";
import { ReimbursementInterface } from "../../../interfaces/ReimbursementInterface";
import { PendingReimbursements } from "./PendingReimbursements";
import { Table } from "react-bootstrap";
import { store } from "../../../globalData/store";

export const ReimbursementsContainer: React.FC = () =>{
    let navigate = useNavigate();
    const toHome = () => {
        let path = "../Home";
        navigate(path)
    }
    const toUsers = () => {
        let path = "../Users";
        navigate(path)
    }
    const toRoles = () => {
        let path = "../Roles";
        navigate(path)
    }
    const toLogin = () => {
        let path = "../Login";
        navigate(path)
    }
    const [reimbursements, setReimbursements] = useState<ReimbursementInterface[]>([])
    const [pendingReimbursements, setPendingReimbursements] = useState<ReimbursementInterface[]>([])

    useEffect(() =>{
        getAllReimbursements()
        getPendingReimbursements()
    }, [])

    const getAllReimbursements = async () => {

        const response = await axios.get("http://localhost:8080/reimbursements/all")

        setReimbursements(response.data)
        //alert(response.data)
        
    }
    
    const getPendingReimbursements = async () => {

        const response = await axios.get("http://localhost:8080/reimbursements/PENDING")

        setPendingReimbursements(response.data)
        //alert(response.data)
        
    }
    
    return(
        <div className="collection-container">
            <Table variant="dark" striped hover>
                    <tbody>
                        <tr>
                            <th><h1>Reimbursements</h1></th>
                        </tr>
                        <tr>
                            <th>
                                <button onClick={toLogin}>Log Out</button>
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toHome}>Home</button>:<></>}
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toUsers}>Users</button>:<></>}
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toRoles}>Roles</button>:<></>}
                            </th>
                        </tr>
                    </tbody>
                </Table>   
            <Reimbursements reimbursements = {reimbursements}></Reimbursements>
            <PendingReimbursements pendingReimbursements = {pendingReimbursements}></PendingReimbursements>
            
        </div>
    )
}