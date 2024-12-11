import { ReactNode } from "react";
import { buttonClasses } from "../../../assets/constants/ui-elements";

type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  classes?: keyof typeof buttonClasses;
};

const Button = ({
  children,
  type = "button",
  classes = "default",
}: ButtonProps) => (
  <button type={type} className={buttonClasses[classes]}>
    {children}
  </button>
);

export default Button;
