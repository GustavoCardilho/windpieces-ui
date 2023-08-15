import { Slot } from "@radix-ui/react-slot";
import { tv } from "tailwind-variants";

export interface IWPTextProps {
  children: React.ReactNode;

}

export function WPTextComponent({

  children,
}: IWPTextProps) {
  return <>{children}</>;
}
