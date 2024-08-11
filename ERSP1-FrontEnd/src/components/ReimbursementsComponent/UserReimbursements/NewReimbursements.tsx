import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReimbursementInterface } from "../../../interfaces/ReimbursementInterface";
import { store } from "../../../globalData/store";
import { UserInterface } from "../../../interfaces/UserInterface";

export const NewReimbursements: React.FC = () =>{
    
    let navigate = useNavigate();
    const toHome = () => {
        let path = "../Home";
        navigate(path)
    }
    const toReimbursements = () => {
        let path = "../MyReimbursements";
        navigate(path)
    }

    const [reimbursement, setReimbursement] = useState<ReimbursementInterface>(({
        
            reimbursementsId:0,
            description:"",
            amount:0,
            status:"",
            users:{
                firstName:"",
                lastName:"",
                usersId:0
            } as UserInterface
        
    }))

    const storeValues = (input:any) =>{
        if (input.target.name === "description") {
            setReimbursement((reimbursement) => ({...reimbursement, description:input.target.value}))
            
        } else if (input.target.name === "amount") {
            setReimbursement((reimbursement) => ({...reimbursement, amount:input.target.value}))

        }
    }

    const register = async () => {
        const response = await axios.post("http://localhost:8080/reimbursements/new/u/" + store.loggedInUser.usersId, reimbursement)
        .then((response) =>{
            alert("Reimbursement registered successfully!")
            toHome()
        })
        .catch(() =>{
            alert("Register Failed!")
        })
    }
        
    

    return(
        <div>
            
            <div className="text-container">
                <h2>Create new Reimbursement</h2>
                <div className="input-container">
                    <input type="text" name="description" placeholder="Description" onChange={storeValues} />
                    <br />
                    <input type="number" name="amount" placeholder="Amount" onChange={storeValues}/>
                    <br />
                    
                    <button onClick={register}>Submit</button>
                    <button onClick={toHome}>Cancel</button>
                </div>
            </div>
        </div>
    )
}