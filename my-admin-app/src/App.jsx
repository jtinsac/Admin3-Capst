import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Window1 from './Pages/Window1';
import LogAdmin from './Pages/Login';
import Users from './Pages/Users';
import AddAccount from './Pages/AddAccount';
import Wins from './Pages/Wins';






function App() {
  return (
    <>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/win1" element={<Window1/>} />
        <Route path="/log" element={<LogAdmin />} />
        <Route path="/users" element={<Users />} />
        <Route path="/acc" element={<AddAccount />} />
        <Route path="/prl" element={<Wins/>} /> 

      </Routes>
    </div>
    </>
  );
}

export default App;
