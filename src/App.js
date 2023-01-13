import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
//routes insted of Switch
import Login from './components/Login'
import './App.css';
import Header from './components/Header'
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
     <Router>
      <Header />
    <Routes>
        <Route exact path='/'  element={<Login />} />
        <Route exact path='/home'  element={<Home />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
