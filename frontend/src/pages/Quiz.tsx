import React, {useState} from 'react';
import { Progress } from "../../components/ui/progress";
import { ArrowRight } from 'lucide-react';
import BtnPrimary from "../components/BtnPrimary.tsx";

function Quiz(): React.JSX.Element {
    const [number, ] = useState(5);
    const [currentQuestion, ] = useState("Who is the best basket ball player of all time ?")

    return (
        <div className={`max-w-150 m-auto p-6 grid gap-12 place-content-center place-items-center`}>
            <header className={`w-full flex justify-between items-center`}>
                <div className={`flex flex-col gap-2`}>
                    <span className={`text-sm font-semibold`}>Question {number} of 10</span>
                    <Progress value={number * 10} className={`w-50 h-[0.35rem]`} />
                </div>
                <div className={`w-16 h-16 rounded-full border-4 border-inverse-primary hover:border-on-primary-container transition-colors duration-300 inline-grid place-items-center`}>
                    <span className={`text-xl font-semibold`}>30</span>
                </div>
            </header>
            <section>
                <p className={`text-4xl font-bold font-label text-center`}>{currentQuestion}</p>
            </section>
            <section className={`w-full grid grid-cols-1 gap-3`}>
                <label className={`bg-surface-container-high w-full rounded-md py-4 px-4 flex gap-4 items-center`}>
                    <span className={`inline-grid place-items-center w-10 h-10 text-center border border-outline rounded-full text-lg font-semibold`}>A</span>
                    <span className={`font-bold text-md`}>Michael Jordan</span>
                    <input type={`radio`} name={`choice`} className={`hidden`}/>
                </label>
                <label className={`bg-surface-container-high w-full rounded-md py-4 px-4 flex gap-4 items-center`}>
                    <span className={`inline-grid place-items-center w-10 h-10 text-center border border-outline rounded-full text-lg font-semibold`}>B</span>
                    <span className={`font-bold text-md`}>Lebron James</span>
                    <input type={`radio`} name={`choice`} className={`hidden`}/>
                </label>
                <label className={`bg-surface-container-high w-full rounded-md py-4 px-4 flex gap-4 items-center`}>
                    <span className={`inline-grid place-items-center w-10 h-10 text-center border border-outline rounded-full text-lg font-semibold`}>C</span>
                    <span className={`font-bold text-md`}>Stephan Curry</span>
                    <input type={`radio`} name={`choice`} className={`hidden`}/>
                </label>
                <label className={`bg-surface-container-high w-full rounded-md py-4 px-4 flex gap-4 items-center`}>
                    <span className={`inline-grid place-items-center w-10 h-10 text-center border border-outline rounded-full text-lg font-semibold`}>D</span>
                    <span className={`font-bold text-md`}>Victor Wembanyama</span>
                    <input type={`radio`} name={`choice`} className={`hidden`}/>
                </label>
            </section>

            <BtnPrimary className={`inline-flex justify-center items-center gap-2 justify-self-end text-on-tertiary-fixed-variant hover:text-on-tertiary-fixed cursor-pointer hover:border-on-tertiary hover:bg-tertiary shadow-surface-bright hover:shadow-on-tertiary bg-primary border-primary`}>Next question <ArrowRight /></BtnPrimary>
        </div>
    );
}

export default Quiz;