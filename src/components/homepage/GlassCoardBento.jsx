import { forwardRef } from "react";

/**
 * GlassCardBento - A customizable glassmorphism card component
 * @param {object} props
 * @param {ReactNode} props.children - Content inside the card
 * @param {string} props.className - Additional classes
 * @param {number} props.blurAmount - Controls blur intensity (0-20)
 * @param {ReactNode} props.topComponent - Component rendered at the top of the card
 * @param {ReactNode} props.bottomComponent - Component rendered at the bottom of the card
 * @param {object} props.rest - Additional props
 * @param {Ref} ref - Forwarded ref
 */
const GlassCardBento = forwardRef(({ 
  children, 
  className, 
  blurAmount = 10,
  topComponent,
  bottomComponent,
  ...props 
}, ref) => {
  // Convert blur amount to Tailwind class (0-20)
  const getBlurClass = (amount) => {
    const value = Math.max(0, Math.min(20, amount));
    if (value === 0) return 'backdrop-blur-none';
    if (value <= 2) return 'backdrop-blur-sm';
    if (value <= 6) return 'backdrop-blur';
    if (value <= 12) return 'backdrop-blur-md';
    if (value <= 16) return 'backdrop-blur-lg';
    return 'backdrop-blur-xl';
  };

  const blurClass = getBlurClass(blurAmount);

  return (
    <div
      ref={ref}
      className={`
        ${blurClass} rounded-3xl p-6
        border border-white/20 shadow-lg
        bg-white/10 bg-clip-padding
        relative overflow-hidden
        ${className || ""}
      `}
      {...props}
    >
      {/* Glassmorphism gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />
      
      {/* Top component slot */}
      {topComponent && (
        <div className="mb-4">
          {topComponent}
        </div>
      )}
      
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Bottom component slot */}
      {bottomComponent && (
        <div className="mt-4">
          {bottomComponent}
        </div>
      )}
    </div>
  );
});

GlassCardBento.displayName = "GlassCardBento";

export default GlassCardBento;