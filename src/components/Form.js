import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passwordConfirm };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <label>First Name:
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </label> 
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </label>
                <label>
                    Email Address:
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" value={passwordConfirm} onChange={ (e) => setPasswordConfirm(e.target.value) } />
                </label>
            </form>
            <div className="infoBox">
                <h3>Your Form Data:</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email Address: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {passwordConfirm}</p>
            </div>
        </div>
    );
};
    
export default UserForm;