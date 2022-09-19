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
import BuyOrderAccepted from "./components/admin/BuyOrder/BuyOrderAccepted";
import Vector from "./components/admin/Map/Vector";
import Packages from "./components/admin/Package/Packages";
import IncomingOrders from "./components/admin/IncomingOrders/IncomingOrders";
import Maintenance from "./components/common/Maintenance";
import DashboardHome from "./components/admin/DashboardHome/DashboardHome";
import WidgetCard from "./components/admin/WidgetCard/WidgetCard";
import WidgetBasic from "./components/admin/Widget/WidgetBasic";
import WidgetChart from "./components/admin/WidgetChart/WidgetChart";
import Maintenancee from "./components/common/Maintenancee";
import { Context } from "./ContextAPI/Context";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Context>
        <ScrollToTop />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route exact path="" element={<DashboardHome />} />
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
            <Route path="order" element={<BuyOrderAccepted />} />
            <Route path="map" element={<Vector />} />
            <Route path="package" element={<Packages />} />
            <Route path="incoming-orders" element={<IncomingOrders />} />
            <Route path="widgetCard" element={<WidgetCard />} />
            <Route path="widget-basic" element={<WidgetBasic />} />
            <Route path="widget-chart" element={<WidgetChart />} />
          </Route>

          <Route exact path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/signed-up" element={<AfterSignup />} />
          <Route path="/lock-screen" element={<LockScreen />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Error404 />} />
          <Route path="error" element={<Error500 />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="maintenance1" element={<Maintenancee />} />
        </Routes>
      </Context>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
