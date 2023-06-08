import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Logo from "./elements/Logo";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Logo />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
