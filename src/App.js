import React from "react";
import { Routes, Route } from "react-router-dom"
import LoginPage from "./Pages/LoginPage";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    )
}