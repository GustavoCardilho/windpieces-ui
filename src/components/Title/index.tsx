import { Slot } from "@radix-ui/react-slot";
import { tv } from "tailwind-variants";

export interface IWPTitleProps {
    testid: string;
    children: React.ReactNode;
    asChild?: boolean;
    bold?: "light" | "normal" | "semibold" | "bold" | "800" | "900";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    className?: string;
    color?: "primary" | "secondary";
}

const button = tv({
    base: "font-medium bg-blue-500 text-white active:opacity-80",
    variants: {
        color: {
            primary: "bg-blue-500 text-white",
            secondary: "bg-purple-500 text-white",
        },
        size: {
            xs: "px-2 py-1 text-xs",
            sm: "text-sm",
            md: "text-base",
            lg: "px-4 py-3 text-lg",
            xl: "px-6 py-4 text-xl",
            "2xl": "px-8 py-5 text-2xl",
        },
    },
    compoundVariants: [
        {
            size: ["sm", "md"],
            class: "px-3 py-1",
        },
    ],
    defaultVariants: {
        size: "md",
    },
});

export function WPTitle({
    asChild = false,
    size = "md",
    bold = "bold",
    className = "",
    color = "secondary",
    ...props
}: IWPTitleProps) {
    const Comp = asChild ? Slot : "h3";

    return (
        <>
            <Comp
                data-test-id={props.testid}
                className={button({ color, size })}
                {...props}
            />
        </>
    );
}
