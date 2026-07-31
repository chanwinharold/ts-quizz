import React from 'react';
import { CircleCheck, CircleX, House, RotateCcw } from 'lucide-react';
import BtnPrimary from "../components/BtnPrimary.tsx";


function Final(): React.JSX.Element {


    return (
        <div className={`max-w-150 m-auto grid gap-15 py-20`}>
            <div className={`w-96 h-125 rounded-full absolute -z-10 top-100 right-1/2 -translate-1/2`}></div>

            <header className={`grid gap-10 place-items-center`}>
                <div className={`w-50 h-50 rounded-full border-16 border-inverse-primary inline-grid place-items-center`}>
                    <span className={`text-4xl font-bold font-display`}>8/10</span>
                </div>
                <div className={`grid gap-2 text-center`}>
                    <strong className={`text-xl`}>🎉 Excellent !</strong>
                    <p className={`max-w-96`}>You've mastered most of the concepts.
                        Review your answers below to see where
                        you can improve</p>
                </div>
            </header>

            <section className={`grid gap-3 max-h-96 overflow-y-auto p-12 scrollbar-none`}>
                <article className={`w-full rounded-md bg-surface-bright/25 p-8 grid gap-4`}>
                    <span className={`text-md font-semibold`}>
                        1. Who is the best basket ball player of all time ?
                    </span>
                    <div className={`grid gap-2`}>
                        <div className={`flex items-center justify-between bg-secondary/25 p-4 rounded-md`}>
                            <div className={`flex gap-2`}>
                                <CircleCheck className={`stroke-secondary`} />
                                <span className={`text-secondary`}>Michael Jordan</span>
                            </div>
                            <span className={`uppercase text-xs`}>your answer</span>
                        </div>
                    </div>
                </article>
                <article className={`w-full rounded-md bg-surface-bright/25 p-8 grid gap-4`}>
                    <span className={`text-md font-semibold`}>
                        1. Who is the best basket ball player of all time ?
                    </span>
                    <div className={`grid gap-2`}>
                        <div className={`flex items-center justify-between bg-secondary/25 p-4 rounded-md`}>
                            <div className={`flex gap-2`}>
                                <CircleCheck className={`stroke-secondary`} />
                                <span className={`text-secondary`}>Michael Jordan</span>
                            </div>
                            <span className={`uppercase text-xs`}>correct</span>
                        </div>

                        <div className={`flex items-center justify-between bg-tertiary/25 p-4 rounded-md`}>
                            <div className={`flex gap-2`}>
                                <CircleX className={`stroke-tertiary`} />
                                <span className={`text-tertiary line-through`}>Michael Jordan</span>
                            </div>
                            <span className={`uppercase text-xs`}>your answer</span>
                        </div>
                    </div>
                </article>
            </section>

            <div className={`justify-self-end flex gap-6`}>
                <BtnPrimary className={`btn-primary capitalize inline-flex justify-center items-center gap-3`}><RotateCcw width={20} /> Play again</BtnPrimary>
                <BtnPrimary className={`inline-flex justify-center items-center gap-3 cursor-pointer hover:bg-primary hover:text-surface hover:border-surface-container-lowest`}><House width={20} /> Home</BtnPrimary>
            </div>
        </div>
    );
}

export default Final;