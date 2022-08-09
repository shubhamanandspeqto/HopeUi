import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/login/Login';
import Signup from './components/login/Signup';
import AfterSignup from './components/login/AfterSignup';
import LockScreen from './components/login/LockScreen';
import ResetPassword from './components/login/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/signed-up' element={<AfterSignup />} />
        <Route path='/lock-screen' element={<LockScreen />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
