import type { LinkProps } from "next/link";
import type { ComponentPropsWithoutRef } from "react";

export type LinkButtonProps = LinkProps & ComponentPropsWithoutRef<"a">;