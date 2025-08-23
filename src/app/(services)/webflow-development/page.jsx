import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/services/Web-development/Hero";
export const metadata = {
  title:
    "Home || Brainwave - Expert design and Webflow development agency to help you scale to raise your success in digital goals.",
  description:
    "Brainwave - Expert design and Webflow development agency to help you scale to raise your success in digital goals.",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div
          id="wrapper"
          className="wrap"
        >
          <Hero />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
