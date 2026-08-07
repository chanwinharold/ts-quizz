import { useState } from "react";
import type { Difficulty } from "../types/question.ts";

export type { Difficulty };

interface DifficultySelectorProps {
    defaultValue?: Difficulty;
    onChange?: (value: Difficulty) => void;
}

const DIFFICULTY_CONFIG: Record<
    Difficulty,
    { activeColor: string; glowColor: string }
> = {
    Easy:   { activeColor: "#22c55e", glowColor: "rgba(34, 197, 94, 0.35)"  },
    Medium: { activeColor: "#8b5cf6", glowColor: "rgba(139, 92, 246, 0.35)" },
    Hard:   { activeColor: "#ef4444", glowColor: "rgba(239, 68, 68, 0.35)"  },
};

export default function DifficultySelector({
                                               defaultValue = "Medium",
                                               onChange,
                                           }: DifficultySelectorProps) {
    const [selected, setSelected] = useState<Difficulty>(defaultValue);
    const [hovered, setHovered] = useState<Difficulty | null>(null);

    const handleSelect = (d: Difficulty) => {
        setSelected(d);
        onChange?.(d);
    };

    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#13121f",
                borderRadius: "9999px",
                padding: "4px",
                gap: "2px",
                boxShadow: `0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)`,
            }}
        >
            {(["Easy", "Medium", "Hard"] as Difficulty[]).map((d) => {
                const isSelected = selected === d;
                const isHovered = hovered === d && !isSelected;
                const cfg = DIFFICULTY_CONFIG[d];

                return (
                    <button
                        key={d}
                        type="button"
                        onClick={() => handleSelect(d)}
                        onMouseEnter={() => setHovered(d)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                            padding: "7px 22px",
                            borderRadius: "9999px",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "13.5px",
                            fontWeight: 500,
                            fontFamily:
                                "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
                            letterSpacing: "0.01em",
                            transition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
                            backgroundColor: isSelected
                                ? cfg.activeColor
                                : isHovered
                                    ? "rgba(255,255,255,0.07)"
                                    : "transparent",
                            color: isSelected
                                ? "#ffffff"
                                : isHovered
                                    ? "rgba(255,255,255,0.75)"
                                    : "rgba(255,255,255,0.4)",
                            boxShadow: isSelected
                                ? `0 0 16px ${cfg.glowColor}, 0 1px 3px rgba(0,0,0,0.3)`
                                : "none",
                            transform: isSelected ? "scale(1.02)" : "scale(1)",
                        }}
                    >
                        {d}
                    </button>
                );
            })}
        </div>
    );
}
