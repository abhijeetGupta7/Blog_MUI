import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home";
import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* AUTH ROUTES */}
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* APP ROUTES */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
