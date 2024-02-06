import {Route, Routes } from "react-router-dom";
//page imports
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

function App(){

    return(
        <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profilePage" element={<ProfilePage />} />
        </Routes>
        </div>
    )
}

export default App;