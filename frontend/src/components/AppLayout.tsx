import React from 'react';
import {Outlet} from "react-router";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

function AppLayout(): React.JSX.Element {
    return (
        <>
            <Navbar />
            <main className={`min-h-[75vh] max-w-max-screen m-auto p-8`}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default AppLayout;