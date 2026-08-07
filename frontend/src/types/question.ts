export type Difficulty = "Easy" | "Medium" | "Hard";

export type Question = {
    id: string;
    category: string;
    difficulty: Difficulty;
    question: string;
    options: string[];
    correctIndex: number;
};
