import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import { Home } from './components/HomeComponent/Home';
import { Login } from './components/LoginComponent/Login';
import { UserContainer } from './components/UsersComponent/UserContainer';
import { RolesContainer } from './components/RolesComponent/RolesContainer';
import { ReimbursementsContainer } from './components/ReimbursementsComponent/GlobalReimbursements/ReimbursementContainer';
import { Register } from './components/LoginComponent/Register';
import { NewRoles } from './components/RolesComponent/NewRoles';
import { MyReimbursementsContainer } from './components/ReimbursementsComponent/UserReimbursements/MyReimbursementsContainer';
import { NewReimbursements } from './components/ReimbursementsComponent/UserReimbursements/NewReimbursements';

function App() {

  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login/>}></Route>
          <Route path="/register" element = {<Register/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Roles" element={<RolesContainer/>}></Route>
          <Route path="/NewRoles" element={<NewRoles/>}></Route>
          <Route path="/Users" element={<UserContainer/>}></Route>
          <Route path="/Reimbursements" element={<ReimbursementsContainer/>}></Route>
          <Route path="/MyReimbursements" element={<MyReimbursementsContainer/>}></Route>
          <Route path="/NewReimbursement" element={<NewReimbursements/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
