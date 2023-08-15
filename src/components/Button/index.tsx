import { ElementType } from "react";
import { WPTextComponent } from "./Button/button";
import { WPIconComponent } from "./IconButton/icon";
import { WPRootComponent } from "./Root/root";

export const WPButton = {
  Text: WPTextComponent,
  Icon: WPIconComponent as ElementType,
  Root: WPRootComponent,
};
