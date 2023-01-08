import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
//routes insted of Switch

import Login from './components/Login'

import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
    <Routes>
        <Route exact path='/'  element={<Login />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
