import React, {
  Fragment,
  StrictMode as ReactStrictMode,
  PropsWithChildren,
} from "react";

interface StrictModeProps extends PropsWithChildren {
  isEnabled?: boolean;
}

export function StrictMode({ children, isEnabled }: StrictModeProps) {
  const StrictModeWrapper = isEnabled ? ReactStrictMode : Fragment;

  return <StrictModeWrapper>{children}</StrictModeWrapper>;
}
