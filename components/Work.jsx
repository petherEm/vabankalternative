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
    image: "/work/26_Gibbarosa4.png",
    category: "e-commerce",
    name: "Gibbarosa, Pre-owned Luxury 2.0",
    tags: ["Next.js", "Medusa.js", "Stripe", "TailwindCSS"],
    description:
      "E-commerce project built on Next.js 14 and Medusa.js as back-end, admin and with Stripe integration.",
    link: "https://v4.gibbarosa.io",
    github: "https://github.com/petherEm/gibb4-front",
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
    <section className="py-12 md:py-16 xl:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:gap-12 items-center xl:items-start">
          {/* Text Content */}
          <div className="w-full xl:w-[35%] max-w-[400px] text-center xl:text-left mb-12 xl:mb-0 xl:sticky xl:top-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              Our project portfolio showcases a range of work, from commercial to experimental and 'fun and learn'
              projects. <span className="text-primary font-bold">We never stop practicing.</span>
            </p>
            <Link href="/projects">
              <Button className="min-w-[160px]">All Projects</Button>
            </Link>
          </div>

          {/* Slider */}
          <div className="w-full xl:w-[65%]">
            <Swiper
              className="!pb-12"
              style={{
                height: "auto",
                minHeight: "500px",
              }}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 1.75,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1280: {
                  slidesPerView: 2.2,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
            >
              {projectData.slice(0, 4).map((project, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="h-full p-0.5 sm:p-1">
                    <ProjectCard project={project} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Custom styles for Swiper pagination using Tailwind primary color */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground)) !important;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: hsl(var(--primary)) !important;
          opacity: 1;
        }
        .swiper-pagination {
          position: absolute;
          bottom: 0 !important;
        }
        .swiper-wrapper {
          height: auto !important;
        }
      `}</style>
    </section>
  )
}



export default Work

