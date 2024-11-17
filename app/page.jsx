import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* Text */}
            <span className="text-xl">
              Transform Transaction with secure BlocChain Slutions
            </span>
            <h1 className="h1 mb-10 mt-8">
              Hello We are <br />
              <span className="white-glassmorphism">BlocChain Solution</span>
            </h1>
            <p className="max-w-[500px] mt-10 mb-9 text-white/80">
              Transform Transaction with secure BlocChain Slutions
            </p>
            {/* btn and socials */}

            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-2/3 xl:mb-2">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
