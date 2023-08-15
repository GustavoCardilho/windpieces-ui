import { Slot } from "@radix-ui/react-slot";
import { ElementType } from "react";
import { tv } from "tailwind-variants";

export interface IWPIconProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const iconClass = tv({
  base: "text-white",
  defaultVariants: {
    size: "md",
  },
});

export function WPIconComponent({
  asChild = false,
  children,
}: IWPIconProps & ElementType) {
  const Comp = asChild ? Slot : "h3";

  return (
    <>
      <Comp className={iconClass()} children={children}></Comp>
    </>
  );
}
