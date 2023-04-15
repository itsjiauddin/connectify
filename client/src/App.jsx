import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

export default function App() {
  const { mode } = useSelector((state) => state.mode);

  return (
    <div className={`${mode}`}>
      <div className="dark:bg-gray-800 h-full">
        <BrowserRouter>
          <div className="font-primary mx-auto text-text text-p max-w-7xl dark:text-primary-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <ToastContainer />
        </BrowserRouter>
      </div>
    </div>
  );
}
