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
    title: "Analytics",
    description:
      "Leveraging Python excellence and latest AI developments, we deliver precise solutions for intelligent, data-driven decision-making, ensuring our clients harness the full potential of their data for strategic advantage and growth.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Go-to-Market",
    description:
      "When crafting the effective go-to-market strategies, we combine our years of experience, deep market analysis with innovative tactics to launch and position your products successfully in the competitive omnichannel landscape.",
  },
];


const Services = () => {
  return (
    <section className="py-12 md:py-16 xl:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 xl:mb-24 max-w-[500px] mx-auto">
          Our services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 xl:gap-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className={`relative flex flex-col items-center p-6 pt-16 min-h-[300px] transition-all duration-300 hover:shadow-lg ${
                  index === servicesData.length - 1 && servicesData.length % 2 === 1
                    ? "md:col-span-2 xl:col-span-1 md:max-w-[calc(50%-0.75rem)] md:mx-auto xl:max-w-none"
                    : ""
                }`}
              >
                <CardHeader className="absolute -top-8 md:-top-10 p-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-background rounded-lg shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <div className="text-primary w-8 h-8 md:w-10 md:h-10">{item.icon}</div>
                  </div>
                </CardHeader>

                <CardContent className="text-center pt-8">
                  <CardTitle className="text-xl md:text-2xl mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services;