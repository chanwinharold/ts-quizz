import type { LucideIcon } from "lucide-react";

export type CategorySlug = "science" | "history" | "tech" | "pop-culture";

export type Category = {
    id: number;
    slug: CategorySlug;
    image: LucideIcon;
    name: string;
    description: string;
};
