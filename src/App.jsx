
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
function App() {
  return (
    <Router>
      {/* Navbar is persistent across all routes */}
      <Navbar />

      {/* Routes for the different pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/call-for-papers" element={<CallForPapers/>}/>
        <Route path="/submissions" element={<Submissions/>}/>
        <Route path="/peer-review" element={<PeerReview/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/virtual-conference" element={<VirtualConference/>}/>
        <Route path="/career-development" element={<CareerDevelopment/>}/>
        <Route path="/mentorship" element={<Mentorship/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
