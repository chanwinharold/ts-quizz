import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from "react-router";
import { Progress } from "../../components/ui/progress";
import { ArrowRight, Check, LoaderCircle, X } from 'lucide-react';
import BtnPrimary from "../components/BtnPrimary.tsx";
import { useQuiz } from "../store/quiz.tsx";
import type { Question } from "../types/question.ts";

const PER_QUESTION_TIME = 30;

interface QuestionCardProps {
    question: Question;
    index: number;
    total: number;
    onAnswer: (option: number | null) => void;
    onNext: () => void;
}

function QuestionCard({ question, index, total, onAnswer, onNext }: QuestionCardProps) {
    const [selected, setSelected] = useState<number | null>(null);
    const [answered, setAnswered] = useState(false);
    const [timeLeft, setTimeLeft] = useState(PER_QUESTION_TIME);
    const timerRef = useRef<number | null>(null);
    const timeoutRef = useRef<number | null>(null);
    const answeredRef = useRef(false);

    const clearTimers = useCallback(() => {
        if (timerRef.current) {
            window.clearInterval(timerRef.current);
            timerRef.current = null;
        }
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    const handleAnswer = useCallback(
        (option: number | null) => {
            if (answeredRef.current) return;
            answeredRef.current = true;
            setAnswered(true);
            setSelected(option);
            onAnswer(option);
            clearTimers();
        },
        [onAnswer, clearTimers],
    );

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            setTimeLeft((t) => Math.max(t - 1, 0));
        }, 1000);
        timeoutRef.current = window.setTimeout(() => handleAnswer(null), PER_QUESTION_TIME * 1000);
        return clearTimers;
    }, [handleAnswer, clearTimers]);

    const progressValue = ((index + (answered ? 1 : 0)) / total) * 100;
    const timeIsUp = answered && selected === null;

    return (
        <div className={`max-w-150 m-auto p-6 grid gap-12 place-content-center place-items-center`}>
            <header className={`w-full flex justify-between items-center`}>
                <div className={`flex flex-col gap-2`}>
                    <span className={`text-sm font-semibold`}>Question {index + 1} of {total}</span>
                    <Progress value={progressValue} className={`w-50 h-[0.35rem]`} />
                </div>
                <div
                    className={`w-16 h-16 rounded-full border-4 inline-grid place-items-center transition-colors duration-300 ${
                        timeLeft <= 10
                            ? "border-tertiary text-tertiary"
                            : "border-inverse-primary text-on-surface"
                    }`}
                >
                    <span className={`text-xl font-semibold`}>{timeLeft}</span>
                </div>
            </header>

            <section>
                <p className={`text-4xl font-bold font-label text-center`}>{question.question}</p>
            </section>

            <section className={`w-full grid grid-cols-1 gap-3`}>
                {question.options.map((option, optionIndex) => {
                    const letter = String.fromCharCode(65 + optionIndex);
                    const isSelected = selected === optionIndex;
                    const isCorrect = answered && question.correctIndex === optionIndex;
                    const isWrong = answered && isSelected && question.correctIndex !== optionIndex;

                    return (
                        <label
                            key={optionIndex}
                            className={`w-full rounded-md py-4 px-4 flex gap-4 items-center border-2 transition-all duration-200 ${
                                isCorrect
                                    ? "bg-secondary/15 border-secondary"
                                    : isWrong
                                        ? "bg-tertiary/15 border-tertiary"
                                        : isSelected
                                            ? "bg-primary-container/20 border-primary cursor-pointer"
                                            : "bg-surface-container-high border-transparent cursor-pointer hover:border-outline"
                            }`}
                        >
                            <span
                                className={`inline-grid place-items-center w-10 h-10 text-center border rounded-full text-lg font-semibold ${
                                    isCorrect
                                        ? "border-secondary text-secondary"
                                        : isWrong
                                            ? "border-tertiary text-tertiary"
                                            : isSelected
                                                ? "border-primary text-primary"
                                                : "border-outline text-on-surface-variant"
                                }`}
                            >
                                {letter}
                            </span>
                            <span className={`font-bold text-md`}>{option}</span>
                            {isCorrect && <Check className={`ml-auto text-secondary shrink-0`} />}
                            {isWrong && <X className={`ml-auto text-tertiary shrink-0`} />}
                            <input
                                type="radio"
                                name={`choice-${index}`}
                                className={`hidden`}
                                checked={isSelected}
                                readOnly
                                onChange={() => handleAnswer(optionIndex)}
                            />
                        </label>
                    );
                })}
            </section>

            {answered && (
                <p className={`-mt-6 text-sm ${timeIsUp ? "text-tertiary" : "text-secondary"}`}>
                    {timeIsUp ? "Temps écoulé !" : question.correctIndex === selected ? "Bonne réponse !" : "Mauvaise réponse."}
                </p>
            )}

            {answered && (
                <BtnPrimary
                    className={`inline-flex justify-center items-center gap-2 justify-self-end btn-secondary`}
                    onClick={onNext}
                >
                    {index < total - 1 ? "Next question" : "Voir les résultats"} <ArrowRight />
                </BtnPrimary>
            )}
        </div>
    );
}

function Quiz(): React.JSX.Element {
    const { status, questions, answer, finish } = useQuiz();
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);

    const total = questions.length;

    const handleAnswer = useCallback(
        (option: number | null) => {
            answer(current, option);
        },
        [current, answer],
    );

    const handleNext = useCallback(() => {
        if (current < total - 1) {
            setCurrent((c) => c + 1);
        } else {
            finish();
            navigate("/final");
        }
    }, [current, total, finish, navigate]);

    if (status === "idle") {
        return <Navigate to="/" replace />;
    }

    if (status === "finished") {
        return <Navigate to="/final" replace />;
    }

    if (status === "loading") {
        return (
            <div className={`min-h-60 grid place-content-center place-items-center gap-4 text-on-surface-variant`}>
                <LoaderCircle className={`animate-spin text-primary`} />
                <span>Chargement des questions...</span>
            </div>
        );
    }

    if (status === "error" || !questions[current]) {
        return (
            <div className={`max-w-150 m-auto p-6 grid gap-6 place-items-center text-center`}>
                <p className={`text-lg`}>Impossible de charger le quiz.</p>
                <BtnPrimary className={`btn-primary`} onClick={() => navigate("/")}>
                    Retour à l'accueil
                </BtnPrimary>
            </div>
        );
    }

    return (
        <QuestionCard
            key={current}
            question={questions[current]}
            index={current}
            total={total}
            onAnswer={handleAnswer}
            onNext={handleNext}
        />
    );
}

export default Quiz;
