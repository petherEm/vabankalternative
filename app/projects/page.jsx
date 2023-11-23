"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1_Gibbarosa.png",
    category: "react js",
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2_Profesor.png",
    category: "next js",
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3_Hexagons.png",
    category: "fullstack",
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4_BetterGPT.png",
    category: "next js",
    name: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/5_Nike.png",
    category: "fullstack",
    name: "Project 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/6_WUimproved2.png",
    category: "fullstack",
    name: "Project 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/7_NetflixClone.png",
    category: "fullstack",
    name: "Project 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/8_Hotel.png",
    category: "fullstack",
    name: "Project 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/9_PizzaPierre.png",
    category: "fullstack",
    name: "Project 9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/10_Amazon.png",
    category: "fullstack",
    name: "Project 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/11_Electronics.png",
    category: "fullstack",
    name: "Project 11",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    link: "/",
    github: "/",
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
