import type { PropsWithChildren, ReactElement } from "react";
import { Footer } from "@/components/molecules/footer";
import "@/styles/tailwind.css";
import "@/styles/font.css";

export { metadata } from "@/configs/metadata";

const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <html lang="fr">
      <head />

      <body className="bg-gray-100">
        <div className="max-w-xl mx-auto px-4">
          {/* Navbar */}
          <div className="bg-gray-200 border border-gray-300 rounded-lg mt-24 mb-10">
            {children}

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;