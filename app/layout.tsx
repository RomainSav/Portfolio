import type { PropsWithChildren, ReactElement } from "react";
import "@/styles/tailwind.css";
import "@/styles/font.css";

const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <html lang="fr">
      <head />

      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;