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

import Upload from "./components/Bedrock/Bedrock-upload/Upload.jsx";
import Ai from "./components/Bedrock/Bedrock-ai/Ai";
import Calender from "./components/admin/Calender/Calender";
import Kanabn from "./components/admin/kanban/Kanabn";
import Billing from "./components/admin/Billing/Billing";
import Pricing from "./components/admin/Pricing/Pricing";
import Timeline from "./components/admin/Timeline/Timeline";
import MyDocumentsSelected from "./components/admin/DocumentsSelected/MyDocumentsSelected";
import Proofs from "./components/admin/Proofs/Proofs";
import Shares from "./components/admin/Shares/Shares";
import Error500 from "./components/common/Error500";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="bedrock" element={<Bedrock />} />
          <Route path="upload" element={<Upload />} />
          <Route path="Ai" element={<Ai />} />
          <Route path="billing" element={<Billing />} />
          <Route path="calender" element={<Calender />} />
          <Route path="kanban" element={<Kanabn />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="documents" element={<MyDocumentsSelected />} />
          <Route path="proofs" element={<Proofs />} />
          <Route path="shares" element={<Shares />} />
        </Route>

        <Route exact path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/signed-up" element={<AfterSignup />} />
        <Route path="/lock-screen" element={<LockScreen />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="*" element={<Error404 />} />
        <Route path="error" element={<Error500 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
