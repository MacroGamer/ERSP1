import {useNavigate} from "react-router-dom";
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

    return(
        <div>
            <h1>Welcome Home!</h1>
            <button onClick={toLogin}>Login</button>
            <button onClick={toUsers}>Users</button>
            <button onClick={toReimbursements}>Reimbursements</button>
            <button onClick={toRoles}>Roles</button>
        </div>
    )
}