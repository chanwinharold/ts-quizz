import type {Category} from "../types/category.ts";

export function Category(cat: Category) {
    return (
        <article className={`max-w-80 flex gap-4 rounded-default p-6 border border-outline-variant`}>
            <span className={`min-w-12 h-12 rounded-default bg-primary-container inline-grid place-content-center`}>{<cat.image />}</span>
            <div className={`flex flex-col gap-2`}>
                <strong>{cat.name}</strong>
                <p>{cat.description}</p>
            </div>
        </article>
    );
}

