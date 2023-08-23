import type { PropsWithChildren, ReactElement } from "react";
import "@/styles/tailwind.css";
import "@/styles/font.css";
import { Footer } from "@/components/molecules/footer";

const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <html lang="fr">
      <head />

      <body className="bg-gray-100">
        <div className="max-w-xl mx-auto px-2">
          {/* Navbar */}
          <div className="bg-gray-200 border border-gray-300 rounded-lg mt-24">
            {children}

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;