import './App.css';
import LoginSignup from './Components/LoginSignup';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayData from './Components/DisplayData';
import UserPortal from './Components/UserPortal';

function App() {
  return (
    <Router>
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginSignup pageTitle="Billing-Login/SignUp" />} />
        <Route path="/Admin-Portal" element={<DisplayData pageTitle="Admin Portal" />} />
        <Route path="/User-portal" element={<UserPortal pageTitle="User Portal" />} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;
