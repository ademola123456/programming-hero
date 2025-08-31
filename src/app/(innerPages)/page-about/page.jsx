import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import About from "@/components/innerpages/About";

import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import Feedback from "@/components/homes/home-2/Feedback";
import ContactPage from "@/components/common/ContactPage";
export const metadata = {
  title: "About || Brainwave ",
  description:
    "Brainwave - Expert design and Webflow development agency to help you scale to raise your success in digital goals.",
};
export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div
          id="wrapper"
          className="wrap"
        >
          <About2 />

          {/* <About2 /> */}

          <ContactPage />
          {/* <Timeline /> */}
        </div>
        <Footer2 />
      </div>
    </>
  );
}
