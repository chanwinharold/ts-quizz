import { FlaskConical } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { LaptopMinimal } from 'lucide-react';
import { Clapperboard } from 'lucide-react';

import type {Category} from "./types/category.ts";


export const Categories: Category[] = [
    {
        id: 1,
        slug: "science",
        image: FlaskConical,
        name: "Science",
        description: "Teste tes connaissances en physique, chimie, biologie et découvertes scientifiques."
    },
    {
        id: 2,
        slug: "history",
        image: BookOpenText,
        name: "History",
        description: "Voyage à travers les grandes périodes, événements et personnages de l’histoire."
    },
    {
        id: 3,
        slug: "tech",
        image: LaptopMinimal,
        name: "Tech",
        description: "Évalue tes connaissances sur l’informatique, les innovations et les nouvelles technologies."
    },
    {
        id: 4,
        slug: "pop-culture",
        image: Clapperboard,
        name: "Pop Culture",
        description: "Teste ta culture générale sur les films, séries, musiques, jeux vidéo et tendances actuelles."
    }
];
