import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import "./style.scss";
import HomePage from "./pages/home-page/HomePage";
import MainPage from "./pages/main-page/MainPage";

export default function App()
{
    const [notMainPage, setNotMainPage] = useState(false);

    let location = useLocation();

    useEffect(() => {
        if(location.pathname !== "/") setNotMainPage(true);
    }, [location])

    return(
            <main className="main">
                <Header colorfulStyle={notMainPage}/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/main-page" element={<MainPage />} />
                </Routes>
            </main>
    );
}