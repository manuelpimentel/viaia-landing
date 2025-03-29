/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        color: "rgba(64, 64, 64, 0.9)",
      }}
    >
      {text}
      {!disabled && (
        <span
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: `shineEffect ${speed}s linear infinite`,
            mixBlendMode: "overlay",
          }}
        />
      )}
    </span>
  );
};

export default ShinyText;
