import { forwardRef } from "react";

const GlassCard = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        backdrop-blur-none rounded-3xl p-6
        border border-white/20 shadow-lg
        bg-white/10 bg-clip-padding
        relative overflow-hidden
        ${className || ""}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

GlassCard.displayName = "GlassCard";

export default GlassCard;