import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  const { tags } = project;

  return (
    <Card className="group overflow-hidden flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          {/* Image wrapper div */}
          <div className="relative w-[250px] h-[280px]">
            <Image
              className="object-contain scale-110"
              src={project.image || "/placeholder.svg"}
              alt={`Screenshot of ${project.name}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="absolute flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>

      <div className="flex-1 px-8 py-6 flex flex-col relative">
        <Badge className="absolute -top-4 left-8 uppercase text-sm font-medium mb-2 bg-background border shadow-sm">
          {project.category}
        </Badge>

        <div className="space-y-3 flex-1">
          <h4 className="text-xl font-semibold">{project.name}</h4>
          <p className="text-muted-foreground text-[15px]">
            {project.description}
          </p>
        </div>

        <div className="text-[12px] text-muted-foreground pt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
