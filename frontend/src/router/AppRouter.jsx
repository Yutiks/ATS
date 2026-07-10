import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Artists from "../pages/Artists/Artists";
import Artist from "../pages/Artist/Artist";
import Portfolio from "../pages/Portfolio/Portfolio";
import Services from "../pages/Services/Services";
import Pricing from "../pages/Pricing/Pricing";
import Blog from "../pages/Blog/Blog";
import Post from "../pages/Post/Post";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout";

import Dashboard from "@/pages/Admin/Dashboard/Dashboard";
import AdminArtists from "@/pages/Admin/Artists/AdminArtists";
import ArtistForm from "@/pages/Admin/ArtistForm/ArtistForm";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/artist" element={<Artist />} />
                    <Route path="/artists/:slug" element={<Artist />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />

                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="artists" element={<AdminArtists />} />
                        <Route path="artists/new" element={<ArtistForm />} />
                        <Route path="artists/:id/edit" element={<ArtistForm />} />
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;