/* eslint-disable react-refresh/only-export-components */
import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { fetchQuestions } from "../api/client.ts";
import type { Difficulty, Question } from "../types/question.ts";
import type { CategorySlug } from "../types/category.ts";

export type QuizStatus = "idle" | "loading" | "active" | "finished" | "error";

interface QuizContextValue {
    status: QuizStatus;
    category: CategorySlug | null;
    difficulty: Difficulty | null;
    questions: Question[];
    answers: (number | null)[];
    error: string | null;
    startQuiz: (category: CategorySlug, difficulty: Difficulty) => Promise<void>;
    answer: (index: number, selected: number | null) => void;
    finish: () => void;
    reset: () => void;
}

const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
    const [status, setStatus] = useState<QuizStatus>("idle");
    const [category, setCategory] = useState<CategorySlug | null>(null);
    const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [answers, setAnswers] = useState<(number | null)[]>([]);
    const [error, setError] = useState<string | null>(null);

    const startQuiz = useCallback(
        async (cat: CategorySlug, diff: Difficulty) => {
            setStatus("loading");
            setError(null);
            try {
                const fetched = await fetchQuestions(cat, diff);
                if (fetched.length === 0) {
                    throw new Error("Aucune question disponible pour cette sélection.");
                }
                setCategory(cat);
                setDifficulty(diff);
                setQuestions(fetched);
                setAnswers(new Array(fetched.length).fill(null));
                setStatus("active");
            } catch (e) {
                setError(e instanceof Error ? e.message : "Une erreur est survenue.");
                setStatus("error");
            }
        },
        [],
    );

    const answer = useCallback((index: number, selected: number | null) => {
        setAnswers((prev) => prev.map((a, i) => (i === index ? selected : a)));
    }, []);

    const finish = useCallback(() => setStatus("finished"), []);

    const reset = useCallback(() => {
        setStatus("idle");
        setCategory(null);
        setDifficulty(null);
        setQuestions([]);
        setAnswers([]);
        setError(null);
    }, []);

    const value = useMemo<QuizContextValue>(
        () => ({
            status,
            category,
            difficulty,
            questions,
            answers,
            error,
            startQuiz,
            answer,
            finish,
            reset,
        }),
        [status, category, difficulty, questions, answers, error, startQuiz, answer, finish, reset],
    );

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz(): QuizContextValue {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error("useQuiz must be used within a QuizProvider");
    }
    return context;
}
