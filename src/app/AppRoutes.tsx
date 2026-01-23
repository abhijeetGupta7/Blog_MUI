import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";
import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";
import BlogDetail from "../components/BlogDetail";
import Profile from "../pages/Profile";
import Blogs from "../pages/Blogs";

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
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs" element={<Blogs />} />
      </Route>

      {/* FALLBACK: MAYBE WE CAN ADD PAGE NOT FOUND INSTEAD OF REDIRECTING: A CHOICE */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
