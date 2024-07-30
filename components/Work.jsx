"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/26_Gibbarosa2.png",
    category: "e-commerce",
    name: "Gibbarosa, Pre-owned Luxury 2.0",
    tags: ["Next.js", "Medusa.js", "Stripe", "TailwindCSS"],
    description:
      "E-commerce project built on Next.js 14 and Medusa.js as back-end, admin and with Stripe integration.",
    link: "https://www.gibbarosa.io",
    github: "https://github.com/petherEm/gibnext-storefront",
  },
  {
    image: "/work/2_Profesor.png",
    category: "next js",
    name: "Academic Researcher, Landing Page",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    description:
      "Academic researcher and professor landing page built on Next.js 14, TailwindCSS and with Framer Motion animations.",
    link: "https://alinamaciejewska.pl",
    github: "https://github.com/petherEm/profesorlina2",
  },
  {
    image: "/work/27_PSDTracker.png",
    category: "Services",
    name: "SaaS - PSD Tracker",
    tags: ["Next.js", "Appwrite", "Mapbox", "TailwindCSS"],
    description:
      "Commercial SaaS providing real-time data on registered Money Transfer PSD agents across Europe.",
    link: "https://psd5.vercel.app/",
    github: "https://github.com/petherEm",
  },
  {
    image: "/work/24_PayLoqTrue.png",
    category: "Services",
    name: "Payments Insights and Tech overview",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Clerk"],
    description:
      "AI in Payments and Remittance.Dev view on integrations and Market Insights.",
    link: "https://www.payloq.com/",
    github: "https://github.com/petherEm/lowprofilePro",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Selected Projects</h2>
          <p className="subtitle mb-8">
            Our project portfolio showcases a range of work, from commercial to
            experimental and 'fun and learn' projects.{" "}
            <span className="text-primary font-bold">
              We never stop practicing.
            </span>
          </p>
          <Link href="/projects">
            <Button> All Projects</Button>
          </Link>
        </div>

        {/* slider */}

        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[500px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
