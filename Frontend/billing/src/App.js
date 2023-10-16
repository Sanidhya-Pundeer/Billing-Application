import './App.css';
import LoginSignup from './Components/LoginSignup';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer />
      <LoginSignup pageTitle="Billing-Login/SignUp"/>
    </div>
  );
}

export default App;
