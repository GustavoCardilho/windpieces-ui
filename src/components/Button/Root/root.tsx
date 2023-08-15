import { Slot } from "@radix-ui/react-slot";
import { tv } from "tailwind-variants";

export interface IWPRootComponent {
    testid: string;
    children: React.ReactNode;
    asChild?: boolean;
    bold?: "light" | "normal" | "semibold" | "bold" | "800" | "900";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    className?: string;
}

const root = tv({
    base: "w-full flex flex-row items-center justify-center gap-2",
});

export function WPRootComponent({
    className = "",
    children,
    ...props
}: IWPRootComponent) {
    return (
        <div data-test-id={props.testid} className={root()}>
            {children}
        </div>
    );
}
