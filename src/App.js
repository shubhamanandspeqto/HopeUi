import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/login/Login";
import Bedrock from "./components/Bedrock/Bedrock";
import Signup from "./components/login/Signup";
import AfterSignup from "./components/login/AfterSignup";
import LockScreen from "./components/login/LockScreen";
import ResetPassword from "./components/login/ResetPassword";
import Error404 from "./components/common/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="bedrock" element={<Bedrock />} />
        </Route>
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/signed-up" element={<AfterSignup />} />
        <Route path="/lock-screen" element={<LockScreen />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
