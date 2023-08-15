import { Slot } from "@radix-ui/react-slot";
import { tv } from "tailwind-variants";

export interface IWPIconProps {
  testid: string;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const icon = tv({
  base: "text-white",
  defaultVariants: {
    size: "md",
  },
});

export function WPIconComponent({
  asChild = false,

  className = "",
  ...props
}: IWPIconProps) {
  const Comp = asChild ? Slot : "h3";

  return (
    <>
      <Comp data-test-id={props.testid} className={icon()} {...props} />
    </>
  );
}
