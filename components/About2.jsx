import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiMapbox,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  // {
  //   icon: <User2 size={20} />,
  //   text: "Pior Maciejewski",
  // },
  // {
  //   icon: <PhoneCall size={20} />,
  //   text: "+1 234 567 890",
  // },
  {
    icon: <MailIcon size={20} />,
    text: "hello@vabank.dev",
  },

  {
    icon: <HomeIcon size={20} />,
    text: "Warsaw, Poland",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Warwick Business School",
        qualification: "Master of Business Administration",
        years: "2019 - 2021",
      },
      {
        university: "Warsaw School of Economics",
        qualification: "MSc in Banking & Finance",
        years: "2003 - 2008",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Western Union",
        role: "Go-To-Market Digital Banking Lead, PL & RO",
        years: "2023 - ",
      },
      {
        company: "Western Union",
        role: "Head of Tech Sales & Integrations, CE",
        years: "2021 - 2023",
      },
      {
        company: "Western Union",
        role: "Senior Digital Product Manager, CE",
        years: "2014 - 2021",
      },
      {
        company: "Western Union",
        role: "Compliance Office, CEE",
        years: "2012 - 2014",
      },
      {
        company: "State Street",
        role: "Corporate Compliance Officer, Luxembourg",
        years: "2011 - 2012",
      },
      {
        company: "Royal Bank of Scotland",
        role: "AML Analyst, BENELUX",
        years: "2008 - 2011",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Vanilla JS, Typescript, Next.js, React.js, TailwindCSS",
      },
      {
        name: "Full Stack Development, Data analysis, Digital Business Strategy",
      },
      {
        name: "Javascript,",
      },
      {
        name: "Back-end development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:min-h-[1260px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About us
        </h2>

        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <div className="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative">
              <div className="absolute top-[100px] right-[130px] mockup-code bg-black/80">
                <pre data-prefix="$">
                  <code>import experience</code>
                </pre>
                <pre data-prefix=">" className="text-warning">
                  <code className="">import teamwork</code>
                </pre>

                <pre data-prefix=">" className="text-warning">
                  <code className="text-primary">computing...</code>
                </pre>
                <pre data-prefix=">" className="text-white">
                  <code>Done!</code>
                </pre>
                <pre data-prefix=">" className="text-white">
                  <code>...shoot us a challenge</code>
                </pre>
                <pre data-prefix=">" className="text-white">
                  <code>...</code>
                </pre>
              </div>
            </div>
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="dark:md:bg-black w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Team
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      15 Years of Experience: Leveraging Banking & Payments
                      Expertise
                    </h3>
                    <p className="subtitle text-center lg:text-left xl:max-w-xl xl:mx-0">
                      Leveraging a wealth of experience that extends beyond
                      Banking and Payments, we excel in creating intuitive web
                      solutions and delivering authentic data science expertise.
                      Our approach is rooted in modern technology, ensuring our
                      clients receive innovative and efficient digital services.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary font-bold">
                        We speak fluently
                      </div>
                      <div className="border-b border-border"></div>
                      <div>English, French, Spanish, Polish</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Founder experience
                    </h3>
                    {/* EXPERIENCE AND EDUCATION WRAPPER */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tech we excel</h3>
                    <p className="subtitle text-center lg:text-left xl:max-w-xl xl:mx-0">
                      Having enjoyed a fulfilling career with Fortune 500
                      companies, our true passion has always been rooted in the
                      fast-paced world of digital transformation. This drive led
                      us to a path of continuous learning and hands-on
                      experience with the latest technologies, embracing the
                      'learning by doing' ethos to stay at the forefront of
                      digital innovation.
                    </p>
                    {/* SKILLS */}
                    {/* <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>

                      <div className="">
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0">
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div> */}

                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Skill set
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        <SiJavascript className="text-4xl md:text-5xl text-primary" />
                        <SiTypescript className="text-4xl md:text-5xl text-primary" />
                        <SiPython className="text-4xl md:text-5xl text-primary" />
                        <TbBrandNextjs className="text-4xl md:text-5xl text-primary" />
                        <SiReact className="text-4xl md:text-5xl text-primary" />
                        {/* {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index} className="">
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })} */}
                      </div>

                      <div className="mt-6 flex gap-x-8 justify-center xl:justify-start">
                        <SiTailwindcss className="text-4xl md:text-5xl text-primary" />
                        <SiPandas className="text-4xl md:text-5xl text-primary" />
                        <SiNumpy className="text-4xl md:text-5xl text-primary" />
                        <SiMapbox className="text-4xl md:text-5xl text-primary" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
