import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Social from "./Social";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Development | Data Science
            </div>
            <h1 className="h1 mb-4">
              Passion for Full Stack Development &
              <span className="text-primary"> Data Science</span>
            </h1>
            <p className="subtitle max-w-[590px] mx-auto xl:mx-0">
              Our expertise spans diverse industries, integrating advanced tech
              skills with deep business insights to redefine the future of your
              business.
            </p>

            <div className="flex flex-col gap-y-3 md:flex-row md:items-center gap-x-5 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button>
                  Contact us <Send size={18} className="ml-3" />
                </Button>
              </Link>
              {/* <Link href="/contact">
                <Button variant="secondary">
                  Download CV <Download size={18} />
                </Button>
              </Link> */}
              <Social
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </div>
            {/* socials */}
            {/* <div>
              <Social
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </div> */}
          </div>

          <div className="hidden xl:flex xl:flex-col relative">
            {/* <Badge
              containerStyles=""
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years of experience"
            />
            <Badge
              containerStyles=""
              icon={<RiTodoFill />}
              endCountText="k"
              badgeText="Finished projects"
            />
            <Badge
              containerStyles=""
              icon={<RiTodoFill />}
              endCountNum={9}
              endCountText="k"
              badgeText="Happy Clients"
            /> */}
            {/* <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg
                containerStyles="bg-hero_shape w-[200x] h-[600px] bg-no-repeat relative bg-bottom"
                imgSrc="/about/mecasual.webp"
              />
            </div> */}
          </div>
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
