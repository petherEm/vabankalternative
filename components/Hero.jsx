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
          <div className="flex sm:w-[500px] md:w-[450px] lg:w-[450px] xl:w-[600px] lg:max-w-[700px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
            <div className="text-[8px] md:text-[10px] lg:text-[12px] uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Development | Data Science | Go-To-Market
            </div>
            <h1 className="h1 mb-4">
              Passion driven
              <span className="text-primary"> excellence.</span>
            </h1>
            <p className="subtitle max-w-[590px] mx-auto xl:mx-0">
              Our expertise spans diverse industries, integrating modern tech
              skills with deep business insights to redefine the future of your
              business. <br />
              <span className="text-primary font-bold">vabank.dev</span> is not
              another software development company. We are your true digital
              partner maximizing your value.
            </p>

            <div className="flex flex-col gap-y-3 md:flex-row md:mx-auto lg:mx-0 xl:mx-0 mb-12">
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
              {/* <Social
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              /> */}
            </div>
            {/* socials */}
            <div className="">
              <Social
                containerStyles="flex gap-x-6 justify-center lg:justify-start lg:mx-0 xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary/80 transition-all"
              />
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-col relative">
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
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              {/* <DevImg
                containerStyles="bg-hero_shape w-[200x] h-[600px] bg-no-repeat relative bg-bottom"
                imgSrc="/hero/1.svg"
              /> */}
              <div className="absolute top-[100px] right-[130px] mockup-code bg-black/80">
                <pre data-prefix="$">
                  <code>Hi there</code>
                </pre>
                <pre data-prefix=">" className="text-warning">
                  <code className="text-primary">
                    <span className="text-white">We think</span> together.
                  </code>
                </pre>
                <pre data-prefix=">" className="text-warning">
                  <code className="text-primary">
                    <span className="text-white">We build</span> together.
                  </code>
                </pre>
                <pre data-prefix=">" className="text-warning">
                  <code className="text-primary">
                    <span className="text-white">We celebrate</span> together.
                  </code>
                </pre>
                <pre data-prefix=">" className="text-white">
                  <code>Let's get in touch!</code>
                </pre>
                <pre data-prefix=">" className="text-white">
                  <code>....</code>
                </pre>
                <pre data-prefix=">" className="text-white">
                  <code>Now! :)</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-24 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
