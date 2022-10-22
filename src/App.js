import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import FileManager from "./pages/FileManager";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Ecommerce from "./pages/Ecommerce";
import Email from "./pages/Email";
import Invoice from "./pages/Invoice";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Authentication from "./pages/Authentication";
import Utility from "./pages/Utility";
import Profile from "./pages/Profile";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/email" element={<Email />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/utility" element={<Utility />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
