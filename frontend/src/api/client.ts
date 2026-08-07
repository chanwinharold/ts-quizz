import type { Difficulty, Question } from "../types/question.ts";
import type { CategorySlug } from "../types/category.ts";

const API_BASE = import.meta.env.VITE_API_URL ?? "/api";

async function request<T>(path: string): Promise<T> {
    let response: Response;
    try {
        response = await fetch(`${API_BASE}${path}`);
    } catch {
        throw new Error("Impossible de joindre le serveur. Vérifiez votre connexion.");
    }

    if (!response.ok) {
        throw new Error(`Erreur serveur (${response.status})`);
    }

    const json = await response.json();
    return json.data as T;
}

export function fetchQuestions(
    category: CategorySlug,
    difficulty: Difficulty,
): Promise<Question[]> {
    const params = new URLSearchParams({ category, difficulty });
    return request<Question[]>(`/questions?${params.toString()}`);
}
