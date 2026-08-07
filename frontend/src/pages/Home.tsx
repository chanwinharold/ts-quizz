import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { Categories } from "../config.ts";
import { Category } from "../components/Category.tsx";
import DifficultySelector, {type Difficulty} from "../components/DifficultySelector.tsx";
import BtnPrimary from "../components/BtnPrimary.tsx";
import { useQuiz } from "../store/quiz.tsx";


function Home(): React.JSX.Element {
    const [level, setLevel] = useState<Difficulty>("Medium")
    const [selectedId, setSelectedId] = useState<number>(Categories[0].id)
    const { startQuiz, status } = useQuiz()
    const navigate = useNavigate()

    const selected = Categories.find((c) => c.id === selectedId) ?? Categories[0]

    const handleStart = async () => {
        await startQuiz(selected.slug, level)
        navigate("/quiz")
    }

    return (
        <div className={`grid gap-12 py-12`}>
            <header className={`w-fit m-auto text-center grid gap-4`}>
                <h1 className={`text-6xl font-bold`}>QuizMaster</h1>
                <p className={`text-on-surface-variant`}>Test your knowledge, beat your score</p>
            </header>
            <div className={`w-96 m-auto inline-flex justify-center`}>
                <DifficultySelector defaultValue={level} onChange={setLevel} />
            </div>
            <div className={`w-fit m-auto grid grid-cols-1 sm:grid-cols-2 gap-6 place-content-center place-items-center`}>
                {
                    Categories.map((c) => (
                        <Category
                            key={c.id}
                            cat={c}
                            selected={c.id === selectedId}
                            onSelect={() => setSelectedId(c.id)}
                        />
                    ))
                }
            </div>
            <div className={`w-fit m-auto`}>
                <BtnPrimary
                    className={`btn-primary`}
                    onClick={handleStart}
                    disabled={status === "loading"}
                >
                    {status === "loading" ? "Chargement..." : "Start Quiz"}
                </BtnPrimary>
            </div>
        </div>
    );
}

export default Home;
