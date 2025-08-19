"use client";

import Link from "next/link";
import Image from "next/image";
import { pagesData } from "@/data/menu";
import { ServiceItems } from "@/data/services";
import { industries } from "@/data/industries";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      {/* <li>
        <Link href={`/page-features`}>Features</Link>
      </li>
      <li>
        <Link href={`/page-pricing`}>Pricing</Link>
      </li>
      <li>
        <Link href={`/blog`}>Insights</Link>
      </li>
      <li>
        <Link href={`/page-about`}>About</Link>
      </li>
      <li>
        <Link href={`/page-contact`}>Contact</Link>
      </li> */}
      <li className="has-dd-menu">
        <a
          role="button"
          aria-haspopup="true"
        >
          Service{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
            >
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>
        {/* uc-navbar-dropdown uc-drop uc-open */}

        <div
          className={`uc-navbar-dropdown uc-drop w-90  shadow-xl rounded-2xl p-4 grid grid-cols-3 gap-6 z-50`}
        >
          <div>
            <ul>
              <div className=" row child-cols-3  uc-grid uc-grid-stack grid-stack">
                {ServiceItems.map((item, i) => (
                  <li key={i}>
                    {item.href.startsWith("/") ? (
                      <Link
                        href={item.href}
                        className={
                          pathname.split("/")[1] == item.href.split("/")[1]
                            ? "menuActive"
                            : "inActiveMenu"
                        }
                      >
                        <div
                          key={i}
                          className="flex items-start  rounded-xl cursor-pointer transition"
                        >
                          {/* <div className="text-xl">{item.icon}</div> */}
                          <div className="menu-stack-pr">
                            <h5 className="font-semibold text-gray-900 text-sm">
                              {item.title}
                            </h5>
                            <p className="text-gray-600 text-xs">{item.desc}</p>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <a href={item.href}>
                        {item.label}
                        {item.badge && (
                          <span
                            className={`fw-bold fs-8 ms-1 px-1 border rounded-pill ${item.badge.className}`}
                          >
                            {item.badge.text}
                          </span>
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </li>
      <li className="has-dd-menu">
        <a
          role="button"
          aria-haspopup="true"
        >
          Industries{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
            >
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>
        {/* uc-navbar-dropdown uc-drop uc-open */}

        <div
          className={`uc-navbar-dropdown uc-drop w-90  shadow-xl rounded-2xl p-4 grid grid-cols-3 gap-6 z-50`}
        >
          <div>
            <ul>
              <div className=" row child-cols-3  uc-grid uc-grid-stack grid-stack">
                {industries.map((item, i) => (
                  <li key={i}>
                    {item.href.startsWith("/") ? (
                      <Link
                        href={item.href}
                        className={
                          pathname.split("/")[1] == item.href.split("/")[1]
                            ? "menuActive"
                            : "inActiveMenu"
                        }
                      >
                        <div
                          key={i}
                          className="flex items-start  rounded-xl cursor-pointer transition"
                        >
                          {/* <div className="text-xl">{item.icon}</div> */}
                          <div className="menu-stack-pr">
                            <span className={item.iconClass}></span>
                            <h5 className="font-semibold text-gray-900 text-sm">
                              {item.title}
                            </h5>
                            <p className="text-gray-600 text-xs">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <a href={item.href}>
                        {item.label}
                        {item.badge && (
                          <span
                            className={`fw-bold fs-8 ms-1 px-1 border rounded-pill ${item.badge.className}`}
                          >
                            {item.badge.text}
                          </span>
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <Link href={`/page-about`}>Resources</Link>
      </li>
      <li>
        <Link href={`/page-about`}>About</Link>
      </li>
      <li>
        <Link href={`/page-contact`}>Contact</Link>
      </li>

      <li>
        <Link href={`/blog`}>Blog</Link>
      </li>
    </>
  );
}
