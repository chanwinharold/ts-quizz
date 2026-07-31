import React, {useEffect, useState} from 'react';
import {Categories} from "../config.ts";
import {Category} from "../components/Category.tsx";
import DifficultySelector, {type Difficulty} from "../components/DifficultySelector.tsx";
import BtnPrimary from "../components/BtnPrimary.tsx";


function Home(): React.JSX.Element {
    const [level, setLevel] = useState<Difficulty>("Medium")

    useEffect(() => {
        console.log(level)
    }, [level]);

    return (
        <div className={`grid gap-12 py-12`}>
            <header className={`w-fit m-auto text-center grid gap-4`}>
                <h1 className={`text-6xl font-bold`}>QuizMaster</h1>
                <p className={``}>Test your knowledge, beat your score</p>
            </header>
            <div className={`w-96 m-auto inline-flex justify-center`}>
                <DifficultySelector defaultValue={level} onChange={setLevel} />

            </div>
            <div className={`w-fit m-auto grid grid-cols-2 gap-6 place-content-center place-items-center`}>
                {
                    Categories.map(c => (
                        <Category
                            key={`${c.name.toLowerCase()}-${c.id}`}
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            description={c.description}
                        />
                    ))
                }
            </div>
            <div className={`w-fit m-auto`}>
                <BtnPrimary className={`text-surface-tint hover:text-white cursor-pointer border-inverse-primary hover:bg-on-primary shadow-surface-bright hover:shadow-inverse-primary bg-primary-container`} type={"submit"}>Start Quiz</BtnPrimary>
            </div>
        </div>
    );
}

export default Home;