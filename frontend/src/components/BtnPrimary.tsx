import type { ButtonHTMLAttributes, ReactNode } from "react";

type BtnPrimaryProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

function BtnPrimary({ children, className = "", ...props }: BtnPrimaryProps) {
    return (
        <button
            className={`w-56 h-10 rounded-xl shadow-2xl border-2 transition-all duration-300 text-base font-semibold ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default BtnPrimary;