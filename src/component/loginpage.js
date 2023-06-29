import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
const LoginForm = ({isLoggedIn,setIsLoggedIn}) => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 
 let navigate = useNavigate();
 const handleSubmit = (e) => {
e.preventDefault();

 console.log('Username:', username);
 console.log('Password:', password);
 if (username=== "foo" && password === "bar") {
setIsLoggedIn(true);
navigate('/home')
}
};

return (
 <div className='body'>
<div className="container">
 <h2>Login Here</h2>
<form className="login-form" onSubmit={handleSubmit}>
<div className="form-group">
 <label htmlFor="username">Username</label>
 <input
type="text"
 id="username"
 value={username}
 onChange={(e) => setUsername(e.target.value)}
required
/>
 </div>
<div className="form-group">
<label htmlFor="password">Password</label>
<input
type="password"
 id="password"
value={password}
 onChange={(e) => setPassword(e.target.value)}
 required
 />
</div>
 <button type="submit" className="btn-login">Login</button>
</form>
 </div>
</div>
);
};

export default LoginForm;

