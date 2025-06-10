import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FamilyDashboard from "./pages/FamilyDashboard";
import EmergencySupport from "./pages/EmergencySupport";
import Schemes from "./pages/Schemes";
import Marketplace from "./pages/MarketPlace";
import Grievance from "./pages/Grievance";
import AdminDashboard from './pages/AdminDashboard';
import ManageUsers from './pages/ManageUsers';
import GrievanceList from './pages/GrievanceList';
import MarketplaceAdminView from './pages/MarketplaceAdminView';
import BroadcastNotice from './pages/BroadcastNotice';
import AdminChatBox from './pages/AdminChatBox';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/family-dashboard" element={<FamilyDashboard />} />
        <Route path="/emergency-support" element={<EmergencySupport />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
<Route path="/manage-users" element={<ManageUsers />} />
<Route path="/grievances" element={<GrievanceList />} />
<Route path="/MarketplaceAdminView" element={<MarketplaceAdminView />} />
<Route path="/broadcast" element={<BroadcastNotice />} />
<Route path="/admin-chat" element={<AdminChatBox />} />

      </Routes>
    </Router>
  );
}

export default App;
