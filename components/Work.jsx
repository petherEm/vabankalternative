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
    image: "/work/1_Gibbarosa.png",
    category: "fullstack",
    name: "Gibbarosa, Pre-owned Luxury",
    tags: ["Next.js", "Sanity.io", "Stripe", "TailwindCSS"],
    description:
      "E-commerce project built on Next.js 14 and Sanity.io with Stripe, BLIK and P24 integration.",
    link: "https://gibbarosaprod.vercel.app/",
    github: "https://github.com/petherEm/gibbarosaprod",
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
    image: "/work/3_Hexagons.png",
    category: "fullstack",
    name: "Dynamic Mapping, Hexagon View",
    tags: ["Next.js", "DeckGL", "Mapbox"],
    description:
      "Mapbox and DeckGL integration with Next.js 14. Dynamic mapping with hexagon view and data filtering.",
    link: "https://psdfrance.vercel.app/hexagonview",
    github: "https://github.com/petherEm/psdfrance",
  },
  {
    image: "/work/4_BetterGPT.png",
    category: "fullstack",
    name: "Chatbot, improved GPT-4",
    tags: ["Next.js", "OpenAI", "Firebase"],
    description:
      "Chatbot built on Next.js 14 and OpenAI API. Improved GPT-4 model with Firebase integration and TailwindCSS styling.",
    link: "https://bettergpt.vabank.dev/",
    github: "https://github.com/petherEm/OneGPT",
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
            className="h-[480px] "
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
