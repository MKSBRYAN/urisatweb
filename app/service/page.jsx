"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam. Ut rerum temporibus corrupti adipisci sequi quas tenetur. Voluptas numquam dignissimos reprehenderit ipsum inventore perspiciatis odio laboriosam ex commodi fugit.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam. Ut rerum temporibus corrupti adipisci sequi quas tenetur. Voluptas numquam dignissimos reprehenderit ipsum inventore perspiciatis odio laboriosam ex commodi fugit.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam. Ut rerum temporibus corrupti adipisci sequi quas tenetur. Voluptas numquam dignissimos reprehenderit ipsum inventore perspiciatis odio laboriosam ex commodi fugit.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam. Ut rerum temporibus corrupti adipisci sequi quas tenetur. Voluptas numquam dignissimos reprehenderit ipsum inventore perspiciatis odio laboriosam ex commodi fugit.",
    href: "",
  },
  {
    num: "05",
    title: "Trading",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam. Ut rerum temporibus corrupti adipisci sequi quas tenetur. Voluptas numquam dignissimos reprehenderit ipsum inventore perspiciatis odio laboriosam ex commodi fugit.",
    href: "",
  },
  {
    num: "06",
    title: "Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam. Ut rerum temporibus corrupti adipisci sequi quas tenetur. Voluptas numquam dignissimos reprehenderit ipsum inventore perspiciatis odio laboriosam ex commodi fugit.",
    href: "",
  },
  {
    num: "07",
    title: "Cyber net",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam. Ut rerum temporibus corrupti adipisci sequi quas tenetur. Voluptas numquam dignissimos reprehenderit ipsum inventore perspiciatis odio laboriosam ex commodi fugit.",
    href: "",
  },
  {
    num: "08",
    title: "Security",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam. Ut rerum temporibus corrupti adipisci sequi quas tenetur. Voluptas numquam dignissimos reprehenderit ipsum inventore perspiciatis odio laboriosam ex commodi fugit.",
    href: "",
  },
];

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 2.4, duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                  >
                    <BsArrowDownRight className="text-primary font-semibold text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.desc}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
