import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AppLayout from "./components/AppLayout.tsx";
import Home from "./pages/Home.tsx";
import Quiz from "./pages/Quiz.tsx";
import Final from "./pages/Final.tsx";


const router = createBrowserRouter([
    {
        Component: AppLayout,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/quiz",
                Component: Quiz
            },
            {
                path: "/final",
                Component: Final
            }
        ]
    },
]);


function App(): React.JSX.Element {
    return (
        <RouterProvider router={router} />
    );
}

export default App;