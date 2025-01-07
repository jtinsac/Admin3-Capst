import { Routes, Route } from 'react-router-dom';
import Window1 from './Pages/Window1';
import Dashboard from './Pages/Dashboard';
import LogAdmin from './Pages/Login';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Window1 />} />
        <Route path="/e" element={<LogAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
