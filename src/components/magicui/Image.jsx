import React, { useState, useEffect } from "react";
import { cn } from "./../../lib/utils"; // Assuming you have a utility for class names

export const Image = ({
  src,
  alt = "Background of a beautiful view", // Default alt text
  width,
  height,
  className,
  loading = "lazy",
  decoding = "async",
  blurDataURL,
  onLoad,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  const [isVisible, setVisible] = useState(false);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const imageElement = document.querySelector(`img[src="${src}"]`);
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, [src]);

  // Handle image load
  const handleLoad = (event) => {
    setLoading(false);
    if (onLoad) {
      onLoad(event); // Call the onLoad prop if provided
    }
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ width, height }}
    >
      {/* Blurred placeholder */}
      {blurDataURL && isLoading && (
        <img
          src={blurDataURL}
          alt={`${alt} (placeholder)`}
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          onLoad={handleLoad}
          className={cn(
            "transition duration-300",
            isLoading ? "blur-sm" : "blur-0",
            className
          )}
          {...rest}
        />
      )}
    </div>
  );
};