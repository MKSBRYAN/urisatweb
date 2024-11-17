"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Item } from "@radix-ui/react-select";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "1",
    category: "Frontend",
    title: "Project1",
    description:
      "Lorem ipsum dolor s Amet recusandae temporibu.Lorem ipsum dolor s Amet recusandae temporibuLorem ipsum dolor s Amet recusandae temporibu",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "TailWind Css" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/img6.jpeg",
    live: "",
    github: "",
  },
  {
    num: "2",
    category: "FullStack",
    title: "Project 1",
    description: "Lorem ipsum dolor s Amet recusandae temporibu.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "TailWind Css" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/img4.jpeg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project 3",
    description: "Lorem ipsum dolor s Amet recusandae temporibu.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "TailWind Css" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/img7.jpeg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project stack on current slide index
    setProject([currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80hv] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="text-8xl mb-5 leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      className="text-accent text-xl"
                      key={index}
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent  " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent  " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* //Overlay */}
                      <div></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alert="Error"
                          fill
                          alt="image"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
