import React from 'react';
import {Outlet} from "react-router";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

function AppLayout(): React.JSX.Element {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default AppLayout;