import { Slot } from "@radix-ui/react-slot";
import { tv } from "tailwind-variants";

export interface IWPButtonProps {
    testid: string;
    children: React.ReactNode;
    asChild?: boolean;
    bold?: "light" | "normal" | "semibold" | "bold" | "800" | "900";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    className?: string;
}

const button = tv({
    base: "font-medium text-black bg-primary rounded hover:opacity/80 transition-all",
    variants: {
        size: {
            xs: "px-2 py-1 text-xs",
            sm: "text-sm",
            md: "text-base",
            lg: "px-4 py-3 text-lg",
            xl: "px-6 py-4 text-xl",
            "2xl": "px-8 py-5 text-2xl",
        },
        bold: {
            light: "font-light",
            normal: "font-normal",
            semibold: "font-semibold",
            bold: "font-bold",
            "800": "font-extrabold",
            "900": "font-black",
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

export function WPButtonComponent({
    asChild = false,
    size = "md",
    bold = "bold",
    className = "",
    ...props
}: IWPButtonProps) {
    const Comp = asChild ? Slot : "h3";

    return (
        <>
            <Comp
                data-test-id={props.testid}
                className={button({ size, bold })}
                {...props}
            />
        </>
    );
}
