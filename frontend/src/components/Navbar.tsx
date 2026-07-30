import React from 'react';
import {Settings, User} from "lucide-react"
import {HoverCardUI} from "./HoverCard.tsx";

function Navbar(): React.JSX.Element {
    return (
        <header className={`p-6 bg-surface-container-lowest`}>
            <div className={`flex justify-between items-center w-full max-w-max-screen m-auto`}>
                <span className={`font-headline-md text-2xl`}>QuizMaster</span>

                <div className={`flex gap-6`}>
                    <HoverCardUI element={<User className={`cursor-pointer`}/>}/>
                    <HoverCardUI element={<Settings className={`cursor-pointer`}/>} />
                </div>
            </div>
        </header>
    );
}

export default Navbar;