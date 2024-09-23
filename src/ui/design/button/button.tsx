import { IconProps } from "@/types/iconsProps";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  variant?: "accent" | "toggle" | "ico";
  size?: "small" | "medium" | "large";
  icon?: IconProps;
  iconTheme?: "accent" | "gray";
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
  className?: string;
  action?: Function;
  theme?: "black" | "white";
}

export const Button = ({
  variant = "accent",
  size = "medium",
  icon,
  iconTheme,
  iconPosition = "left",
  children,
  className,
  action = () => {},
  theme = "white",
}: Props) => {
  const [isToggled, setIsToggled] = useState(false);
  let variantStyles: String = "",
    sizeStyles: String = "",
    icoSize: number = 0;

  switch (variant) {
    case "accent":
      theme === "black"
        ? (variantStyles = "bg-gray-800 hover:bg-gray-700 text-primary rounded")
        : (variantStyles = "bg-primary hover:bg-primary/80 text-white rounded");
      break;

    case "toggle":
      variantStyles = clsx(
        "relative inline-flex items-center w-11 h-6",
        isToggled ? "bg-primary" : "bg-gray-400",
        "rounded-full transition-colors duration-300"
      );
      break;

    case "ico":
      if (iconTheme === "accent") {
        variantStyles =
          "bg-primary hover:bg-primary-400 text-gray-500 rounded-full";
      }

      if (iconTheme === "gray") {
        variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }

      icoSize = 8;

      break;
  }

  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      } `;
      icoSize = 18;
      break;
    case "medium":
      sizeStyles = `text-caption2 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      icoSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      icoSize = 24;
      break;
  }

  const handleClick = () => {
    if (variant === "toggle") {
      setIsToggled(!isToggled);
    } else if (action) {
      action();
    }
  };
  const buttonContent = (
    <>
      <div>
        {variant === "toggle" ? (
          <span
            className={clsx(
              "absolute left-0.5 top-0.5 w-5 h-5 bg-primary rounded-full border border-gray-300 transition-transform",
              isToggled ? "translate-x-full bg-gray-800" : "",
              "dark:border-gray-600"
            )}
          />
        ) : icon && variant === "ico" ? (
          <icon.icon size={icoSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {iconPosition === "left" && icon && <icon.icon size={icoSize} />}
            {children}
            {iconPosition === "right" && icon && <icon.icon size={icoSize} />}
          </div>
        )}
      </div>
    </>
  );

  const buttonElement = (
    <button
      type="button"
      className={clsx(
        variantStyles,
        sizeStyles,
        className,
        "relative flex items-center justify-center animate"
      )}
      onClick={handleClick}
    >
      {buttonContent}
    </button>
  );

  return buttonElement;
};
