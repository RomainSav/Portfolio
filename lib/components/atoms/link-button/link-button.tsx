import type { ReactElement } from "react";
import type { LinkButtonProps } from "./link-button.type";
import { sm } from "../../../../utils/style/class";
import Link from "next/link";

export const LinkButton = ({ className, children, ...props }: LinkButtonProps): ReactElement => {
  const style = sm(
    "border border-gray-400 bg-gray-300 rounded-lg py-2",
    className
  );

  return <Link className={style} {...props}>{children}</Link>;
};