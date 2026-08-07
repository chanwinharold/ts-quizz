import { Check } from "lucide-react";
import type { Category as CategoryType } from "../types/category.ts";

interface CategoryProps {
    cat: CategoryType;
    selected: boolean;
    onSelect: () => void;
}

export function Category({ cat, selected, onSelect }: CategoryProps) {
    return (
        <label
            className={`w-full max-w-80 flex gap-4 rounded-default p-6 border transition-all duration-200 cursor-pointer ${
                selected
                    ? "border-primary bg-primary-container/20 shadow-primary-container/30"
                    : "border-outline-variant hover:border-outline hover:bg-surface-container-low"
            }`}
        >
            <span
                className={`min-w-12 h-12 rounded-default inline-grid place-content-center ${
                    selected ? "bg-primary text-on-primary" : "bg-primary-container"
                }`}
            >
                <cat.image />
            </span>
            <div className={`flex flex-col gap-2 flex-1`}>
                <strong>{cat.name}</strong>
                <p className={`text-sm text-on-surface-variant leading-snug`}>{cat.description}</p>
            </div>
            <input
                type="radio"
                name={`category`}
                className={`hidden`}
                checked={selected}
                onChange={onSelect}
            />
            {selected && <Check className={`text-primary shrink-0 mt-0.5`} />}
        </label>
    );
}
