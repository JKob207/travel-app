import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

export default function App()
{
    return(
        <Router>
            <div>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/main-page" element={<MainPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
