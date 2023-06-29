import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginForm from './component/loginpage';
import Home from './component/dashboardpage';
function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
 <div className="App">
<Router
 basename={process.env.PUBLIC_URL}
>
 <Routes>
<Route
path="login"
element={
<LoginForm isLoggedIn ={ isLoggedIn }  setIsLoggedIn ={setIsLoggedIn } />
 }
 />
<Route
path="home"
element={
<Home/>
 }
/>
</Routes>
</Router>

</div>
);
}

export default App;

