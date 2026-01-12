import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Layout() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            disable: "mobile",
        });
    }, []);

    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;