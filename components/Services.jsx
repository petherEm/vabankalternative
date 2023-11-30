import { GanttChartSquare, Blocks, Gem } from "lucide-react";

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "We specialize in advanced web solutions using Next.js Full Stack, MERN stack, and Tailwind CSS, offering robust, scalable, and visually appealing digital experiences.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Data Science",
    description:
      "Leveraging Python excellence and latest AI developments, we deliver precise solutions for intelligent, data-driven decision-making, ensuring our clients harness the full potential of their data for strategic advantage and growth.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Go-to-Market Strategy",
    description:
      "Crafting effective go-to-market strategies, we combine market analysis with innovative tactics to launch and position your products successfully in the competitive landscape.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-20 xl:mb-24 text-center mx-auto">
          Our services
        </h2>

        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[80px] md:w-[140px] h-[40px] md:h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
