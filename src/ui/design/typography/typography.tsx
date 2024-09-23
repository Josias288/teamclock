import React from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  className?: string;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  weight?: "medium" | "regular" | "bold";
  theme?: "gray" | "white" | "black" | "accent";
}

export const Typography = ({
  variant = "h3",
  className,
  component = "div",
  weight = "regular",
  theme = "black",
  children,
}: Props) => {
  let variantStyles: string = "";
  let colorStyles: string = "";

  switch (variant) {
    case "display":
      variantStyles = "text-8xl";
      break;
    case "h1":
      variantStyles = "text-7xl";
      break;
    case "h2":
      variantStyles = "text-6xl";
      break;
    case "h3":
      variantStyles = "text-5xl";
      break;
    case "h4":
      variantStyles = "text-4xl";
      break;
    case "h5":
      variantStyles = "text-3xl";
      break;
    case "lead":
      variantStyles = "text-2xl";
      break;
    case "body-lg":
      variantStyles = "text-lg";
      break;
    case "body-base":
      variantStyles = "text-base";
      break;
    case "body-sm":
      variantStyles = "text-sm";
      break;
    case "caption1":
      variantStyles = "text-caption1";
      break;
    case "caption2":
      variantStyles = "text-caption2";
      break;
    case "caption3":
      variantStyles = "text-caption3";
      break;
    case "caption4":
      variantStyles = "text-caption4";
      break;
  }

  switch (theme) {
    case "black":
      colorStyles = "text-white";
      break;
    case "gray":
      colorStyles = "text-gray-700";
      break;
    case "white":
      colorStyles = "text-gray";
      break;
    case "accent":
      colorStyles = "text-primary";
      break;
  }

  const Component = component || "div";

  return (
    <Component
      className={clsx(
        variantStyles,
        colorStyles,
        className,
        weight === "medium" && "font-medium",
      )}
    >
      {children}
    </Component>
  );
};