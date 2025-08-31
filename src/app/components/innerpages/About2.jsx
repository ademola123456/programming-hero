import { panelsData } from "@/data/facts";

import React from "react";
import Image from "next/image";

export default function About2() {
  return (
    <div
      id="about_us"
      className="about-us section panel overflow-hidden"
      data-anime="onview: -100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
        <div
          className="d-none lg:d-block"
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
        >
          <div className="position-absolute bottom-0 start-0 ms-n8 mb-6">
            <Image
              className="w-150px xl:w-250px d-block dark:d-none"
              alt="walking"
              src="/assets/images/template/walking.svg"
              width="224"
              height="226"
            />
            <Image
              className="w-150px xl:w-250px d-none dark:d-block"
              alt="walking-dark"
              src="/assets/images/template/walking-dark.svg"
              width="224"
              height="227"
            />
          </div>
        </div>
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 mb-4">About Us – Brainwave</h2>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                At Brainwave, we believe in turning bold ideas into powerful
                digital experiences. We are a forward-thinking web agency driven
                by creativity, innovation, and cutting-edge technology.
              </p>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                Our core expertise lies in web design and development, where we
                craft visually stunning and high-performing websites tailored to
                each client’s unique needs. From sleek corporate websites to
                dynamic ecommerce platforms, we deliver solutions that blend
                design elegance with seamless functionality.
              </p>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                Beyond the web, Brainwave extends its creativity into game
                development, building immersive 2D and 3D worlds that captivate
                audiences and push the boundaries of interactive entertainment.
              </p>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                We also specialize in branding and identity design, helping
                businesses stand out with strong visuals and consistent
                storytelling that connects with their target audience.
              </p>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                Our team of designers and animators bring ideas to life with
                2D/3D animations, turning concepts into compelling visuals that
                engage, educate, and inspire. To keep our clients ahead in the
                digital landscape, we offer SEO optimization and site
                maintenance services, ensuring websites stay secure, updated,
                and highly visible in search results.
              </p>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                Brainwave works across diverse industries, including gaming,
                B2B, financial services, artificial intelligence, Web3, and
                ecommerce. This broad experience allows us to adapt quickly and
                deliver tailored solutions that meet the specific challenges of
                each sector.
              </p>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                At our core, we are problem solvers and storytellers. We thrive
                on collaboration, innovation, and pushing boundaries to create
                digital experiences that truly make an impact. With Brainwave,
                you don’t just get a service provider—you gain a creative
                partner dedicated to your growth and success in the digital
                world. Let’s build the future together, one innovation at a
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
