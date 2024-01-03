"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/17_payloq.png",
    category: "AI",
    name: "PayLoq.com - dev payments community.",
    tags: ["Next.js", "MongoDB", "TailwindCSS, OpenAI"],
    description:
      "PayLoq.com is a community forum for remittance and payments industry. Built with Next.js, MongoDB, TailwindCSS, Clerk and OpenAI.",
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
    link: "https://gibbarosaprod.vercel.app/",
    github: "https://github.com/petherEm/gibbarosaprod",
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
    link: "https://flix-project-phi.vercel.app/",
    github: "https://github.com/petherEm/flix_project",
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
    link: "/",
    github: "/",
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
    image: "/work/15_Developedian.png",
    category: "Services",
    name: "Project Grafbase - porfolio showcase.",
    tags: ["Next.js", "Grafbase", "TailwindCSS"],
    description:
      "Half clone of Dribble.com. Project Grafbase is a portfolio showcase built with Next.js, Grafbase and TailwindCSS.",
    link: "https://grafbaseproject.vercel.app/",
    github: "https://github.com/petherEm/grafbaseproject",
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
  {
    image: "/work/17_payloq.png",
    category: "AI",
    name: "PayLoq.com - dev payments community.",
    tags: ["Next.js", "MongoDB", "TailwindCSS, OpenAI"],
    description:
      "PayLoq.com is a community forum for remittance and payments industry. Built with Next.js, MongoDB, TailwindCSS, Clerk and OpenAI.",
    link: "https://trueremit.vercel.app/",
    github: "https://github.com/petherEm/trueremit",
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
