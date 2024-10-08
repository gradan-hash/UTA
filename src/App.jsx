import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// Components
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import CallForPapers from "./components/Call for Papers/CallForPapers";
import Submissions from "./components/Submissions Portal/Submissions";
import PeerReview from "./components/Peer Review/PeerReview";
import Schedule from "./components/Schedule & Agenda/Schedule";
import Registration from "./components/register &Ticketing/Registration";
import VirtualConference from "./components/Virtual Conference/VirtualConference";
import CareerDevelopment from "./components/Career Development/CareerDevelopment";
import Mentorship from "./components/Mentorship/Mentorship";
import Contact from "./components/Contact Us/Contact";
import AdminDashboard from "./components/Admin/dashboard/AdminDashboard";
import ManageConferences from "./components/Admin/dashboard/ManageConferences";
import ManageUsers from "./components/Admin/dashboard/ManageUsers";
import ManageReports from "./components/Admin/dashboard/ManageReports";
import AdminLogin from "./components/Admin/Login/AdminLogin";

const App = () => {
  // State to manage admin login status
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Admin login handler (this is simplified, replace with real auth logic)
  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Routes that include the Navbar */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/peer-review" element={<PeerReview />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/virtual-conference" element={<VirtualConference />} />
          <Route path="/career-development" element={<CareerDevelopment />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Login Route */}
        <Route
          path="/admin/adminlogin"
          element={<AdminLogin onLogin={handleAdminLogin} />}
        />

        {/* Admin routes without the Navbar (protected) */}
        <Route
          path="/admin"
          element={
            isAdminAuthenticated ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin/adminlogin" replace />
            )
          }
        />
        <Route
          path="/admin/manage-conferences"
          element={
            isAdminAuthenticated ? (
              <ManageConferences />
            ) : (
              <Navigate to="/admin/adminlogin" replace />
            )
          }
        />
        <Route
          path="/admin/manage-users"
          element={
            isAdminAuthenticated ? (
              <ManageUsers />
            ) : (
              <Navigate to="/admin/adminlogin" replace />
            )
          }
        />
        <Route
          path="/admin/reports"
          element={
            isAdminAuthenticated ? (
              <ManageReports />
            ) : (
              <Navigate to="/admin/adminlogin" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

// Layout with Navbar
const LayoutWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the child routes (like Homepage, etc.) */}
    </>
  );
};

export default App;
