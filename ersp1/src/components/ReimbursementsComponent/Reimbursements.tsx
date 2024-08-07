import React from "react"
import {useNavigate} from "react-router-dom";
import { ReimbursementInterface } from "../../interfaces/ReimbursementInterface";

export const Reimbursements: React.FC<ReimbursementInterface> = (reimbursement:ReimbursementInterface) =>{



    return(
        <div className="reimbursement-container">
            <p>{reimbursement.description}  
            <br />
            {"Amount: " + reimbursement.amount}
            <br />
            {"Status: " + reimbursement.status}</p>
        </div>
    )
}