import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './components/login/Login';
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/login/Login";
import Bedrock from "./components/Bedrock/Bedrock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/about" element={<Login />} />
          <Route path="/bedrock" element={<Bedrock />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
