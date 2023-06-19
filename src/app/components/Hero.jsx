"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-primaryBlue text-neutral-content h-[91vh] items-center flex justify-evenly py-12">
      <motion.div
        initial={{ x: -800 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, delay:0.3 }}
        className="w-[500px]"
      >
        <h1 className="font-bold text-5xl leading-[74px]">
          Building stellar websites for early startups
        </h1>
        <p className="mt-4">
          Relish is a trusted solution company in India. We have lots of
          experience in custom web development services, serving clients across
          the globe. We have a proven record as a web development service
          provider in delivering complex web app solutions, from planning to
          delivery.
        </p>
        <button className="btn btn-warning mt-6 rounded-3xl btn-wide">
          Get In Touch
        </button>
      </motion.div>
      <motion.div
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={"/images/pointer1.svg"}
          width={600}
          height={600}
          alt="photo"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
