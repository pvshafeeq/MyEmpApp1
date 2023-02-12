import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import ViewEmployee from './components/Employee/ViewEmployee'
import NewEmployee from './components/Employee/NewEmployee';
import EditEmployee from './components/Employee/EditEmployee';

function App() {
  return (
   <>
    <Router>
     <Routes>
       <Route path="/home" element={<ViewEmployee/>} />
       <Route path="/" element={<Login/>} />
       <Route path="/newemployee" element={<NewEmployee/>}/>
       <Route path="/editemployee" element={<EditEmployee/>}/>
     </Routes>
     </Router>
   </>
  );
}

export default App;
