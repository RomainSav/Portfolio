import type { ReactElement } from "react";
import type { ButtonProps } from "./button.type";
import { sm } from "../../../../utils/style/class";

export const Button = ({ className, children, ...props }: ButtonProps): ReactElement => {
  const style = sm(
    "flex mx-auto border border-gray-300 rounded-lg text-white text-sm font-medium px-3 py-2 mt-8 w-fit",
    "sm:mx-0",
    className
  );

  return <button className={style} {...props}>{children}</button>;
};