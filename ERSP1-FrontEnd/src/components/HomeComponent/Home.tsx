import {useNavigate} from "react-router-dom";
import { store } from "../../globalData/store";
import { Profile } from "./Profile";
import { MyReimbursementsContainer } from "../ReimbursementsComponent/UserReimbursements/MyReimbursementsContainer";
import { Table } from "react-bootstrap";
export const Home: React.FC = () =>{

    let navigate = useNavigate();
    const toUsers = () => {
        let path = "../Users";
        navigate(path)
    }
    const toReimbursements = () => {
        let path = "../Reimbursements";
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
    const toMyReimbursements = () => {
        let path = "../MyReimbursements";
        navigate(path)
    }
    return(
        <div>
            <Table variant="dark" striped hover>
                    <tbody>
                        <tr>
                            <th><h1>Welcome to your Dashboard</h1></th>
                        </tr>
                        <tr>
                            <th>
                                <button onClick={toLogin}>Log Out</button>
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toUsers}>Users</button>:<></>}
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toReimbursements}>All Reimbursements</button>:<></>}
                                {store.loggedInUser.rolesId === 1 ? <button onClick={toRoles}>Roles</button>:<></>}
                            </th>
                        </tr>
                    </tbody>
                </Table>
             <div className="d-flex flex-wrap" >
                <Profile></Profile>
            </div>
            <MyReimbursementsContainer></MyReimbursementsContainer>
        </div>
        
    )
}