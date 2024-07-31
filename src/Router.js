import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Video } from "./pages/video/Video";
import { Search } from "./pages/search/Search";
import { PageNotFound } from "./pages/PageNotFound";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/login/SignUp";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TopBtn } from "./components/TopBtn";
import { useEffect, useState } from "react";
import { FindUsername } from "./pages/login/FindUsername";
import { FindPassword } from "./pages/login/FindPassword";

export const Router = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const islogin = localStorage.getItem("isLoggedIn");

    if (islogin === "true") {
      setIsLogged(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLogged(true);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLogged(false);
  };

  return (
    <HashRouter>
      <Header isLogged={isLogged} onLogout={handleLogout} />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.video} element={<Video />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.login} element={<Login onLogin={handleLogin} />} />
        <Route path={routes.findusername} element={<FindUsername />} />
        <Route path={routes.findpassword} element={<FindPassword />} />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
      <TopBtn />
      <Footer />
    </HashRouter>
  );
};
