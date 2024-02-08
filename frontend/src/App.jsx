import {Route, Routes } from "react-router-dom";
//page imports
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import GamePage from "./pages/GamePage";

function App(){

    return(
        <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profilePage" element={<ProfilePage />} />
            <Route path="/gamePage" element={<GamePage />} />
        </Routes>
        </div>
    )
}

export default App;