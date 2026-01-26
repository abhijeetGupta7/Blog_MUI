import { Suspense, lazy } from "react";
import PageLoader from "../components/PageLoader";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy-loaded pages
const SignIn = lazy(() => import("../pages/auth/SignIn"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const Home = lazy(() => import("../pages/Home"));
const CreatePost = lazy(() => import("../pages/CreatePost"));
const AuthLayout = lazy(() => import("./layout/AuthLayout"));
const AppLayout = lazy(() => import("./layout/AppLayout"));
const BlogDetail = lazy(() => import("../components/BlogDetail"));
const Profile = lazy(() => import("../pages/Profile"));
const Blogs = lazy(() => import("../pages/Blogs"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
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

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
