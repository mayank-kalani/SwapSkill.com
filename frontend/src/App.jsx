import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import TokenLoader from "./components/TokenLoader";
import EditProfile from "./components/EditProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ChatPage from "./components/ChatPage";
import GroupSessionPage from "./components/GroupSessionPage";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <TokenLoader />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

        {/* PROTECTED */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />

        {/* 🔥 FIXED */}
        <Route path="/chat" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
        <Route path="/group-session" element={<ProtectedRoute><GroupSessionPage /></ProtectedRoute>} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;