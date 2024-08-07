import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import { Reimbursements } from "./Reimbursements";
import { ReimbursementInterface } from "../../interfaces/ReimbursementInterface";

export const ReimbursementsContainer: React.FC = () =>{
    let navigate = useNavigate();
    const toHome = () => {
        let path = "../Home";
        navigate(path)
    }

    const [reimbursements, setReimbursements] = useState<ReimbursementInterface[]>([])

    useEffect(() =>{
        getAllReimbursements()
        
    }, [])

    const getAllReimbursements = async () => {

        const response = await axios.get("http://localhost:8080/reimbursements")

        setReimbursements(response.data)
        //alert(response.data)
        
    }
    
    return(
        <div className="collection-container">
            <h3>Reimbursements</h3>
            <button onClick={toHome}>Home</button>
            {reimbursements.map((reimbursement, index) => 
                <div>
                    <Reimbursements {...reimbursement}></Reimbursements>
                    
                    
                </div>
            )}
        </div>
    )
}