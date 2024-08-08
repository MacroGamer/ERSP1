import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import { Home } from './components/HomeComponent/Home';
import { Login } from './components/LoginComponent/Login';
import { UserContainer } from './components/UsersComponent/UserContainer';
import { RolesContainer } from './components/RolesComponent/RolesContainer';
import { ReimbursementsContainer } from './components/ReimbursementsComponent/ReimbursementContainer';
import { Register } from './components/LoginComponent/Register';

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
          <Route path="/Users" element={<UserContainer/>}></Route>
          <Route path="/Reimbursements" element={<ReimbursementsContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
