import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/SideBar";
import AddStudent from "./pages/AddStudent";
import { Toaster } from "react-hot-toast";
import EditStudent from "./pages/EditStudent";

const App = () => {
  return (
    <div className="flex  bg-gray-100flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student" element={<EditStudent />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
