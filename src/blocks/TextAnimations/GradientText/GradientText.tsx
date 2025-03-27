/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
}: GradientTextProps) {
  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium ${className}`}
      style={{
        background: `linear-gradient(to right, ${colors.join(", ")})`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        backgroundSize: "200% 100%",
        animation: `gradient ${animationSpeed}s linear infinite`,
      }}
    >
      {children}
    </div>
  );
}
