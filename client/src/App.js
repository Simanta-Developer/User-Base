import logo from './logo.svg';
import './App.css';
// components
import AddUser from './components/AddUser' ;
import NavBar from './components/NavBar' ;
import AllUsers from './components/AllUsers' ;
import UserBase from './components/UserBase' ;
import EditUser from './components/EditUser' ;


import {BrowserRouter, Routes, Route} from 'react-router-dom' ;
function App() {
  return (
    <BrowserRouter>      
      <NavBar />
      <Routes>
        <Route path='/' element = {<UserBase />}/>
        <Route path='/all' element = {<AllUsers />}/>
        <Route path='/add' element = {<AddUser />}/>
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>            
    </BrowserRouter>
  );
}

export default App;
