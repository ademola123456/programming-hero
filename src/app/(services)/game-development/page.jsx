import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/services/Gaming/Hero";

import Features from "@/components/services/Gaming/Features";

export const metadata = {
  title:
    "Features || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};

export default function GameDevelopment() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div
          id="wrapper"
          className="wrap"
        >
          <Hero />

          <Features />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
