import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "../src/pages/Home"

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<Navigate to='/' />} />
        </Routes>
    )
}