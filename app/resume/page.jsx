"use client";
import React from "react";
import {
  FaJs,
  FaHtml5,
  FaCss3,
  FaFigma,
  FaNodeJs,
  FaReact,
  FaFacebookMessenger,
} from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = [
  {
    title: "About us",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestiae qui nobis dignissimos, natus est. Consequuntur beatae hic mollitia numquam, voluptate libero iur",
    infos: [
      {
        firstname: "Name",
        fieldvalue: "Bryan",
      },
      {
        firstname: "Phone",
        fieldvalue: "(+243) 09904978",
      },
      {
        firstname: "Experience",
        fieldvalue: "12+ Year",
      },
      {
        firstname: "Skype",
        fieldvalue: "Bryan.013",
      },
      {
        firstname: "Nationality",
        fieldvalue: "Congolese",
      },
      {
        firstname: "Email",
        fieldvalue: "urisatinfo@urisat.com",
      },
      {
        firstname: "Freelance",
        fieldvalue: "Available",
      },
      {
        firstname: "Language",
        fieldvalue: "French, English, Swahili",
      },
    ],
  },
];

const experience = {
  icon: "",
  title: "Our experience",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, odit cupiditate eos vero facere optio dolorem facilis repellendus? A minus reprehenderit eos, aliquid mollitia enim quas itaque placeat facere tempore.",
  items: [
    {
      company: "Tech Solution.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio.",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-Commerce Startup.",
      position: "Freelance Web Developer ",
      duration: "2020-2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Design",
      duration: "2013 - 2019",
    },
    {
      company: "Software Developer Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};
const education = {
  icon: "",
  title: "Our educations",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, odit cupiditate eos vero facere optio dolorem facilis repellendus? A minus reprehenderit eos, aliquid mollitia enim quas itaque placeat facere tempore.",
  items: [
    {
      institution: "Online course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end track",
      duration: "2023",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020-2023",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design SChool",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degrees in computer science",
      duration: "2014-2016",
    },
  ],
};

const skills = {
  title: "Our Skills",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum incidunt quo quae alias deleniti porro minima aspernatur temporibus, est, expedita laboriosam ipsam",
  skillist: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCss",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.Js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaFacebookMessenger />,
      name: "Facebook",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full mx-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About us</TabsTrigger>
          </TabsList>

          {/* contents */}
          <div className="min-h-[80vh] w-full">
            {/* experience */}
            <TabsContent
              value="experience"
              className="w-full"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx:0">
                  {experience.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*education */}

            <TabsContent
              value="education"
              className="w-full"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-3 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent
              value="skills"
              className="w-full h-full"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx:0">
                  {skills.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillist.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]  h-[184px] py-6 px-3 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center place-items-center group">
                                <div className="items-center justify-center text-6xl group-hover:text-accent transition-all duration-300 ">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about us */}
            <TabsContent
              value="about"
              className="w-full text-center"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.desc}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {Array.isArray(about.infos) &&
                    about.infos.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        {" "}
                        <span className="text-white/60">
                          {item.firstname}
                        </span>{" "}
                        <span className="text-white/60">{item.fieldvalue}</span>{" "}
                      </li>
                    ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
