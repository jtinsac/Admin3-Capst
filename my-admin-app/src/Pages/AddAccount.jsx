import React, { useState } from 'react';
import { auth, database } from '../firebase.config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set, get, child } from 'firebase/database';
import Sidebar from '../components/sidebar.jsx';

// Function to generate unique numeric CustomUserId
function generateUniqueNumericID() {
  return Math.floor(Math.random() * 1000000000).toString();
}

// Check if the CustomUserId is unique
async function isIDUnique(id) {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `admin/${id}`));
  return !snapshot.exists();

}

function AddAccount() {
  const [username, setUserName] = useState('');
  const [number, setUserNumber] = useState('');
  const [name, setName] = useState('');
  const [AEmail, setEmail] = useState('');
  const [Apassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [response, setResponse] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (Apassword !== confirmPassword) {
      setResponse("Passwords do not match.");
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*[A-Z]).{8,}$/.test(Apassword)) {
      setResponse("Password must be at least 8 characters long, with at least one letter and one uppercase letter.");
      return;
    }

    try {
      // Generate a unique CustomUserId
      let customUserID;
      do {
        customUserID = generateUniqueNumericID();
      } while (!(await isIDUnique(customUserID)));

    
      const userCredential = await createUserWithEmailAndPassword(auth, AEmail, Apassword);
      const { uid } = userCredential.user; 

      // Get current date and time in PHT (Philippine Time)
      const now = new Date();
      const timeZoneOffset = 8 * 60; // Philippines is UTC+8
      now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + timeZoneOffset);
      const registrationDate = now.toISOString().slice(0, 19).replace('T', ' ');

      // Save additional user info to Firebase Realtime Database
      await set(ref(database, `admin/${uid}`), {
        Name: name,
        Username: username,
        Email: AEmail,
        Contact_Number: number,
        Date_and_Time_Registered: registrationDate,
        CustomUserId: customUserID, // Store the CustomUserId
        Password: Apassword,  
        Verification_Status: "Not Verified", 
      });

      setResponse('Registration Successful');
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
   <>
   <Sidebar/>
    <div className="d-container">
      <div className="reg-cont">
      <div className="d-head">
         <h4>Admin Registration</h4>
            <hr className="line"/>
      </div>
         
      <div className="register-card">

        <form id="regForm" onSubmit={handleSubmit}>
            
          <p className="creds">Username</p>
          <input type="text" className="rinput" id="username" name="username" value={username} onChange={(e) => setUserName(e.target.value)} required/>

          <p className="creds">Email</p>
          <input type="email" className="rinput" id="email" name="email" value={AEmail} onChange={(e) => setEmail(e.target.value)} required/>

          <p className="creds">Name</p>
          <input type="text" className="rinput" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <p className="creds">Contact Number</p>
          <input type="text" className="rinput" id="number" name="number" value={number} onChange={(e) => setUserNumber(e.target.value)} required />

          <p className="creds">Password</p>
          <input type="password" className="rinput" id="password" name="password" value={Apassword} onChange={(e) => setPassword(e.target.value)} required />

          <p className="creds">Confirm Password</p>
          <input type="password" className="rinput" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

          <button type="submit" className="rbtn" id="signupBtn"> Sign Up </button>
        </form>
        {response && <div id="response">{response}</div>}
      </div>
      </div>
    </div>
    </>
  );
}



export default AddAccount;
