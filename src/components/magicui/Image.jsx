import React from "react";
import { cn } from "./../../lib/utils";

export const Image = ({
  src,
  alt = "Background of a beautiful view",
  width,
  height,
  className,
  loading = "lazy",
  decoding = "async",
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      className={cn("transition duration-300 blur-[0.5px]", className)}
      {...rest}
    />
  );
};