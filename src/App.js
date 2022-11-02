import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.scss";
import HomePage from "./pages/home-page/HomePage";
import MainPage from "./pages/main-page/MainPage";

export default function App()
{
    return(
        <Router>
            <main className="main">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/main-page" element={<MainPage />} />
                </Routes>
            </main>
        </Router>
    );
}
