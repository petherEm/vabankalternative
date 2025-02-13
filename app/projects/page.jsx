"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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
  {
    image: "/work/23_DocsPayLoq.png",
    category: "Services",
    name: "Documentation for PayLoq.com",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Clerk"],
    description:
      "Documentation and tutorials for PayLoq.com. Built with Next.js, MongoDB, TailwindCSS and Clerk.",
    link: "https://docs.payloq.com/",
    github: "https://github.com/petherEm/lowprofile4",
  },
  {
    image: "/work/33_personal_automotive.png",
    category: "Landing",
    name: "Personal Website - Automotive",
    tags: ["Next.js", "TailwindCSS", "ShadCN"],
    description:
      "Personal website for an automotive industry leader. Built with TailwindCSS, TailwindUI and Next.js",
    link: "https://malgosia3.vercel.app/",
    github: "https://github.com/petherEm/malgosia3",
  },
  {
    image: "/work/28_WUAIpay.png",
    category: "e-commerce",
    name: "Western Union + Payment Methods",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "P24"],
    description:
      "Commercial project to improve embed WU Digital Bank within money transfer service. Built on Next.js 14, MongoDB and TailwindCSS.",
    link: "https://wuaipay.vercel.app/",
    github: "https://github.com/petherEm/WUAIPAY",
  },
  {
    image: "/work/29_ZoomClone.png",
    category: "Services",
    name: "Zoom Clone (Yoom)",
    tags: ["Next.js", "Clerk", "GetStream.io", "TailwindCSS"],
    description:
      "Zoom clone built with Next.js 14, getStream.io, Clerk and TailwindCSS. Inspired by JavaScript Mastery.",
    link: "https://zoomclone-beta.vercel.app/",
    github: "https://github.com/petherEm/zoomclone",
  },
  {
    image: "/work/30_TresLenguajes.png",
    category: "e-commerce",
    name: "DuoLingo Clone (Tres Lenguajes)",
    tags: ["Next.js", "Clerk", "Drizzle ORM", "TailwindCSS", "Stripe"],
    description:
      "TresLenguajes is a DuoLingo clone built with Next.js, Clerk, Drizzle ORM, Stripe and TailwindCSS. Perfect platform to learn languages.",
    link: "https://treslenguajes.vercel.app/",
    github: "https://github.com/petherEm/zoomclone",
  },

  {
    image: "/work/21_Eventeror.png",
    category: "e-commerce",
    name: "Evently - event platform.",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Clerk"],
    description:
      "Evently is a modern event platform built with Next.js, MongoDB, TailwindCSS and Clerk.",
    link: "https://eventorex.vercel.app/",
    github: "https://github.com/petherEm/eventorex",
  },
  {
    image: "/work/17_PayLoq.png",
    category: "AI",
    name: "PayLoq - dev payments community.",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "OpenAI"],
    description:
      "PayLoq community forum for remittance and payments industry. Built with Next.js, MongoDB, TailwindCSS, Clerk and OpenAI.",
    link: "https://trueremit.vercel.app/",
    github: "https://github.com/petherEm/trueremit",
  },
  {
    image: "/work/1_Gibbarosa.png",
    category: "e-commerce",
    name: "Gibbarosa, Pre-owned Luxury",
    tags: ["Next.js", "Sanity.io", "Stripe", "TailwindCSS"],
    description:
      "E-commerce project built on Next.js 14 and Sanity.io with Stripe, BLIK and P24 integration.",
    link: "https://gibbarosa.vabank.dev/",
    github: "https://github.com/petherEm/gibbarosa_final_2.0/tree/master",
  },
  {
    image: "/work/2_Profesor.png",
    category: "Landing",
    name: "Academic Researcher, Landing Page",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    description:
      "Academic researcher and professor landing page built on Next.js 14, TailwindCSS and with Framer Motion animations.",
    link: "https://alinamaciejewska.pl",
    github: "https://github.com/petherEm/profesorlina2",
  },
  {
    image: "/work/22_FitPhysique.png",
    category: "Landing",
    name: "Gym & Personal Trainer, Landing Page",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    description:
      "A landing page for a gym and personal trainer. Built with Next.js 14, TailwindCSS and Framer Motion animations.",
    link: "https://gym40.vercel.app/",
    github: "https://github.com/petherEm/gym40",
  },
  {
    image: "/work/31_DisneyChannel.png",
    category: "AI",
    name: "Disney Channel Clone",
    tags: ["Next.js", "TailwindCSS", "OpenAI"],
    description:
      "Movie recommendation and summarizer engine built with Next.js 14, OpenAI and TailwindCSS.",
    link: "https://disneyclone-lyart.vercel.app/",
    github: "https://github.com/petherEm/disneyclone",
  },
  {
    image: "/work/18_Chamonify.png",
    category: "e-commerce",
    name: "Chamonify - book your stay in Haute Savoie.",

    tags: ["Next.js", "TailwindCSS", "Shadcn"],
    description:
      "Chamonify is a booking service for your stays at Chamonix Mont Blanc, France. Built with Next.js, TailwindCSS, Shadcn.",
    link: "https://chamonify.vercel.app/",
    github: "https://github.com/petherEm/chamonify",
  },
  {
    image: "/work/32_HealthYX.png",
    category: "Services",
    name: "Patient Management Framework - work in progress.",
    tags: ["Next.js", "Appwrite", "TailwindCSS", "Shadcn"],
    description:
      "Patient Management Framework built with Appwrite, as base for further development..",
    link: "https://healthyx.vercel.app/",
    github: "https://github.com/petherEm/healthyx",
  },
  {
    image: "/work/25_LinkedInClone.png",
    category: "Services",
    name: "LinkedIn Clone with MSAzure, MongoDB, Next.js, and TailwindCSS.",
    tags: ["Next.js", "TailwindCSS", "MSAzure", "MongoDB"],
    description:
      "Extensive use of MSAzure with MongoDB, Next.js, TailwindCSS and Shadcn.",
    link: "https://linkedin44.vercel.app/",
    github: "https://github.com/petherEm/LinkedIn44",
  },
  {
    image: "/work/19_Bikeshop.png",
    category: "e-commerce",
    name: "BikeSpring - dream bike shop.",
    tags: ["Next.js", "Stripe", "Sanity.io"],
    description:
      "BikeSpring is a true, modern online bike shop. Built with Next.js 14, Sanity.io, Stripe payments and TailwindCSS.",
    link: "https://bikespring.vercel.app/",
    github: "https://github.com/petherEm/Bikespring",
  },
  {
    image: "/work/3_Hexagons.png",
    category: "Services",
    name: "Dynamic Mapping, Hexagon View",
    tags: ["Next.js", "DeckGL", "Mapbox"],
    description:
      "Mapbox and DeckGL integration with Next.js 14. Dynamic mapping with hexagon view and data filtering.",
    link: "https://psdfrance.vercel.app/hexagonview",
    github: "https://github.com/petherEm/psdfrance",
  },
  {
    image: "/work/20_Imaginify.png",
    category: "AI",
    name: "Imaginify - AI image playground.",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "CloudinaryAI"],
    description:
      "Testing CloudinaryAI, MongoDB, Clerk with Next.js 14 and TailwindCSS. Imaginify is an AI playground for image processing and manipulation.",
    link: "https://imaagic.vercel.app",
    github: "https://github.com/petherEm/imaagic",
  },
  {
    image: "/work/4_BetterGPT.png",
    category: "AI",
    name: "Chatbot, improved GPT-4",
    tags: ["Next.js", "OpenAI", "Firebase"],
    description:
      "Chatbot built on Next.js 14 and OpenAI API. Improved GPT-4 model with Firebase integration and TailwindCSS styling.",
    link: "https://bettergpt.vabank.dev/",
    github: "https://github.com/petherEm/OneGPT",
  },
  {
    image: "/work/5_Nike.png",
    category: "Landing",
    name: "Nike Store, Landing Page",
    tags: ["Next.js", "TailwindCSS"],
    description:
      "Training project to boost our Tailwind skills. Nike store landing page built on Next.js 14 and TailwindCSS.",
    link: "https://nikeclone-nine.vercel.app/",
    github: "https://github.com/petherEm/nikeclone",
  },
  {
    image: "/work/6_WUimproved2.png",
    category: "e-commerce",
    name: "Western Union service improvements",
    tags: ["Next.js", "MongoDB", "TailwindCSS"],
    description:
      "Commercial project to improve embed WU Digital Bank within money transfer service. Built on Next.js 14, MongoDB and TailwindCSS.",
    link: "https://wuimprove2.vercel.app/",
    github: "https://github.com/petherEm/wuimprove2",
  },

  {
    image: "/work/7_NetflixClone.png",
    category: "Services",
    name: "Netflix Clone, Vanilla JS",
    tags: ["React.js", "Firebase", "TailwindCSS"],
    description:
      "Netflix clone built with Vanilla JS, HTML and CSS. Training project to boost our front-end skills.",
    link: "https://newnetflix-5355c.web.app/",
    github: "https://github.com/petherEm",
  },
  {
    image: "/work/8_Hotel.png",
    category: "e-commerce",
    name: "Hotel Booking commerce",
    tags: ["React.js", "TailwindCSS", "CalendarPicker"],
    description:
      "Hotel booking project built with React.js, TailwindCSS and CalendarPicker.",
    link: "https://ampmhotel.vercel.app/",
    github: "https://github.com/petherEm/ampmhotel",
  },
  {
    image: "/work/9_PizzaPierre.png",
    category: "e-commerce",
    name: "Pizza Ordering",
    tags: ["Next.js", "TailwindCSS", "Payments"],
    description:
      "Pizza ordering project built with Next.js, TailwindCSS and Payments integration (Stripe, P24)",
    link: "https://pizzadelivery-five.vercel.app/",
    github: "https://github.com/petherEm/pizzadelivery",
  },
  {
    image: "/work/10_Amazon.png",
    category: "e-commerce",
    name: "Amazon clone",
    tags: ["Next.js", "Firebase", "TailwindCSS", "Stripe"],
    description:
      "Amazon clone built with Next.js, Firebase and TailwindCSS. Training project to boost our front-end skills.",
    link: "https://amazon4-two.vercel.app/",
    github: "https://github.com/petherEm/amazon4",
  },
  {
    image: "/work/11_Electronics.png",
    category: "e-commerce",
    name: "Electronics store",
    tags: ["Next.js", "Sanity.io", "Stripe", "TailwindCSS"],
    description:
      "Electronics store built with Next.js, Sanity.io, TailwindCSS and Stripe integration.",
    link: "https://nextcommerce-one-mu.vercel.app/",
    github: "https://github.com/petherEm/nextcommerce",
  },
  {
    image: "/work/12_Threads.png",
    category: "Services",
    name: "Threads clone - in progress",
    tags: ["Next.js", "Clerk", "MongoDB", "TailwindCSS"],
    description:
      "Electronics store built with Next.js, Sanity.io, TailwindCSS and Stripe integration.",
    link: "https://mythreads-delta.vercel.app/",
    github: "https://github.com/petherEm/mythreads",
  },
  {
    image: "/work/14_SaaSAS.png",
    category: "AI",
    name: "SaaS - AI powered Code, Music and Video generator.",
    tags: ["Next.js", "Prisma", "OpenAI", "MongoDB"],
    description:
      "SaaS project built with Next.js, OpenAI, Clerk, PrismaDB and TailwindCSS.",
    link: "https://saasas.vercel.app/",
    github: "https://github.com/petherEm/saasas",
  },

  {
    image: "/work/16_prevVabank.png",
    category: "Landing",
    name: "Vabank.dev - previous version of our website.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    description:
      "Previous version of our website built with Next.js, TailwindCSS and Framer Motion.",
    link: "https://piotrdev2.vercel.app/",
    github: "https://github.com/petherEm/piotrdev2",
  },
];
// remove category duplicates
console.log(projectData.map((item) => item.category));

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category

    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Our Projects
        </h2>
        <p className="subtitle mb-8">
          Our project portfolio showcases a range of work, from commercial to
          experimental and 'fund and learn' projects. Due to confidentiality
          agreements, some of our most significant projects remain undisclosed,
          yet they equally represent our dedication to excellence in digital
          solutions.
        </p>

        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => (
              <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={index}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-col-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
