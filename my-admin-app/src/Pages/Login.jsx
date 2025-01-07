import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1-rPcvqin2WWSAA96N5Gp2L1538PCuJ8",
  authDomain: "easyq-s.firebaseapp.com",
  databaseURL: "https://easyq-s-default-rtdb.firebaseio.com",
  projectId: "easyq-s",
  storageBucket: "easyq-s.firebasestorage.app",
  messagingSenderId: "485410986210",
  appId: "1:485410986210:web:aa2dab9b4e00917212a6bb",
  measurementId: "G-VC0BZM9ERT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function LogAdmin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Reference the "admin" table in your Firebase database
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, "admin"));

      if (snapshot.exists()) {
        const admins = snapshot.val();

        // Check if the entered credentials match any stored admin credentials
        let isValid = false;
        for (const key in admins) {
          if (
            admins[key].Username === username &&
            admins[key].Password === password
          ) {
            isValid = true;
            break;
          }
        }

        if (isValid) {
          navigate('/dashboard'); // Redirect to the dashboard
        } else {
          alert('Invalid credentials. Please try again.');
        }
      } else {
        alert('No admin data found in the database.');
      }
    } catch (error) {
      console.error("Error fetching admin data:", error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="log-cont">
      <h2 className="logo">SmartQueues-Admin</h2>
      <div className="log-card">
        <div className="log-creds">
          <h2 className="credz">Username:</h2>
          <input
            className="inpz"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h2 className="credz">Password:</h2>
          <input
            className="inpz"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="log-submit" onClick={handleLogin}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogAdmin;
