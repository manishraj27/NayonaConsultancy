
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from './../../lib/utils';
import { Link } from 'react-router-dom';

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <div
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary-100 dark:bg-secondary-400/80 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border bg-background-100 border-subtle dark:border-strong group-hover:border-primary-400 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
    return (
      <h4 className={cn("text-primary dark:text-white font-grotesk text-heading-4 tracking-wide mt-4", className)}>
        {children}
      </h4>
    );
  };
  
  export const CardDescription = ({ className, children }) => {
    return (
      <p className={cn("mt-8 text-secondary dark:text-gray-300 text-body-2 tracking-wide leading-relaxed", className)}>
        {children}
      </p>
    );
  };
  