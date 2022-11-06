import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import "./style.scss";
import HomePage from "./pages/home-page/HomePage";
import MainPage from "./pages/main-page/MainPage";

export default function App()
{
    const [notMainPageHeader, setNotMainPageHeader] = useState(false);

    let location = useLocation();

    useEffect(() => {
        if(location.pathname !== "/") setNotMainPageHeader(true);
    }, [location])

    return(
            <main className="main">
                <Header colorfulStyle={notMainPageHeader}/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/main-page" element={<MainPage />} />
                </Routes>
            </main>
    );
}