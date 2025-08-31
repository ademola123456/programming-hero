export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Intro to Web Design",
      description: "Learn UI/UX fundamentals and craft responsive layouts.",
      price: "$49",
      image: "/success1.png",
      href: "#",
    },
    {
      id: 2,
      title: "Full‑Stack Web Development",
      description: "Build modern apps with APIs, databases, and deployment.",
      price: "$89",
      image: "/success2.jpg",
      href: "#",
    },
    {
      id: 3,
      title: "Game Dev Foundations (2D/3D)",
      description: "Core gameplay loops, scenes, and asset pipelines.",
      price: "$79",
      image: "/success3.jpg",
      href: "#",
    },
    {
      id: 4,
      title: "Branding & Identity Basics",
      description: "Logo systems, color theory, and brand storytelling.",
      price: "$59",
      image: "https://picsum.photos/seed/brainwave-4/640/360",
      href: "#",
    },
    {
      id: 5,
      title: "SEO Essentials",
      description: "On‑page, technical SEO, and content strategy that ranks.",
      price: "$39",
      image: "https://picsum.photos/seed/brainwave-5/640/360",
      href: "#",
    },
    {
      id: 6,
      title: "Web3 & Smart Contracts",
      description: "Intro to wallets, tokens, and secure contract patterns.",
      price: "$99",
      image: "https://picsum.photos/seed/brainwave-6/640/360",
      href: "#",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 md:mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Courses
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-1">
              A quick peek at our most‑requested learning paths.
            </p>
          </div>
        </div>

        {/* Grid: 3 rows × 2 columns (6 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {courses.map((course) => (
            <a
              key={course.id}
              href={course.href}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-medium leading-tight">
                  {course.title}
                </h3>
                {/* Short description ABOVE price */}
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {course.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-semibold">
                    {course.price}
                  </span>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                    Learn more →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Courses button (links to #) */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-sm"
            aria-label="View all courses"
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
}
