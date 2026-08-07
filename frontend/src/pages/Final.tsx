import React, { useMemo } from 'react';
import { Navigate, useNavigate } from "react-router";
import { CircleCheck, CircleX, House, RotateCcw } from 'lucide-react';
import BtnPrimary from "../components/BtnPrimary.tsx";
import { useQuiz } from "../store/quiz.tsx";

function ResultRing({
    percent,
    score,
    total,
}: {
    percent: number;
    score: number;
    total: number;
}) {
    const radius = 74;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className={`relative w-40 h-40`}>
            <svg width="100%" height="100%" viewBox="0 0 160 160" className={`-rotate-90`}>
                <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="12"
                    fill="none"
                />
                <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="var(--secondary)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            <div className={`absolute inset-0 grid place-content-center`}>
                <span className={`text-4xl font-bold font-display`}>{score}/{total}</span>
            </div>
        </div>
    );
}

function Final(): React.JSX.Element {
    const { status, questions, answers, reset } = useQuiz();
    const navigate = useNavigate();

    const score = useMemo(
        () => questions.filter((q, i) => answers[i] === q.correctIndex).length,
        [questions, answers],
    );

    const total = questions.length;
    const percent = total > 0 ? Math.round((score / total) * 100) : 0;

    if (status !== "finished") {
        return <Navigate to="/" replace />;
    }

    const title =
        percent >= 80
            ? "Excellent !"
            : percent >= 50
                ? "Bien joué !"
                : "Continue de t'entraîner !";

    const handlePlayAgain = () => {
        reset();
        navigate("/");
    };

    return (
        <div className={`max-w-150 m-auto grid gap-15 py-20`}>
            <header className={`grid gap-10 place-items-center`}>
                <ResultRing percent={percent} score={score} total={total} />
                <div className={`grid gap-2 text-center`}>
                    <strong className={`text-xl`}>{title}</strong>
                    <p className={`max-w-96 text-on-surface-variant`}>
                        Tu as obtenu {score} bonnes réponses sur {total}.
                        Consulte tes réponses ci-dessous pour voir où progresser.
                    </p>
                </div>
            </header>

            <section className={`grid gap-3 max-h-96 overflow-y-auto p-12 scrollbar-none`}>
                {questions.map((q, index) => {
                    const userAnswer = answers[index];
                    const isCorrect = userAnswer === q.correctIndex;

                    return (
                        <article
                            key={q.id}
                            className={`w-full rounded-md bg-surface-bright/25 p-8 grid gap-4`}
                        >
                            <span className={`text-md font-semibold`}>
                                {index + 1}. {q.question}
                            </span>
                            <div className={`grid gap-2`}>
                                {userAnswer === null && (
                                    <div className={`flex items-center justify-between bg-tertiary/25 p-4 rounded-md`}>
                                        <div className={`flex gap-2`}>
                                            <CircleX className={`stroke-tertiary`} />
                                            <span className={`text-tertiary`}>Pas de réponse</span>
                                        </div>
                                        <span className={`uppercase text-xs text-tertiary`}>temps écoulé</span>
                                    </div>
                                )}
                                {userAnswer !== null && (
                                    <div
                                        className={`flex items-center justify-between p-4 rounded-md ${
                                            isCorrect ? "bg-secondary/25" : "bg-tertiary/25"
                                        }`}
                                    >
                                        <div className={`flex gap-2`}>
                                            {isCorrect ? (
                                                <CircleCheck className={`stroke-secondary`} />
                                            ) : (
                                                <CircleX className={`stroke-tertiary`} />
                                            )}
                                            <span className={isCorrect ? "text-secondary" : "text-tertiary"}>
                                                {q.options[userAnswer]}
                                            </span>
                                        </div>
                                        <span className={`uppercase text-xs ${isCorrect ? "text-secondary" : "text-tertiary"}`}>
                                            {isCorrect ? "correct" : "ta réponse"}
                                        </span>
                                    </div>
                                )}
                                {!isCorrect && (
                                    <div className={`flex items-center justify-between bg-secondary/25 p-4 rounded-md`}>
                                        <div className={`flex gap-2`}>
                                            <CircleCheck className={`stroke-secondary`} />
                                            <span className={`text-secondary`}>{q.options[q.correctIndex]}</span>
                                        </div>
                                        <span className={`uppercase text-xs text-secondary`}>bonne réponse</span>
                                    </div>
                                )}
                            </div>
                        </article>
                    );
                })}
            </section>

            <div className={`justify-self-end flex gap-6 flex-wrap`}>
                <BtnPrimary
                    className={`btn-primary capitalize inline-flex justify-center items-center gap-3`}
                    onClick={handlePlayAgain}
                >
                    <RotateCcw width={20} /> Play again
                </BtnPrimary>
                <BtnPrimary
                    className={`inline-flex justify-center items-center gap-3 cursor-pointer hover:bg-primary hover:text-surface hover:border-surface-container-lowest`}
                    onClick={handlePlayAgain}
                >
                    <House width={20} /> Home
                </BtnPrimary>
            </div>
        </div>
    );
}

export default Final;
