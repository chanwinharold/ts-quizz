import React from "react";
import type {LucideProps} from "lucide-react";

export type Category = {
    id: number,
    image: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    name: string,
    description: string
}