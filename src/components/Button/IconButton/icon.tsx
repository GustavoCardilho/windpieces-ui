import { Slot } from "@radix-ui/react-slot";
import { tv } from "tailwind-variants";

export interface IWPIconProps {
    testid: string;
    children: React.ReactNode;
    asChild?: boolean;
    bold?: "light" | "normal" | "semibold" | "bold" | "800" | "900";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    className?: string;
}

const icon = tv({
    base: "text-black",
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

    defaultVariants: {
        size: "md",
    },
});

export function WPIconComponent({
    asChild = false,
    size = "md",
    bold = "bold",
    className = "",
    ...props
}: IWPIconProps) {
    const Comp = asChild ? Slot : "h3";

    return (
        <>
            <Comp
                data-test-id={props.testid}
                className={icon({ size, bold })}
                {...props}
            />
        </>
    );
}
