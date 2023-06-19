import Image from "next/image";
import { motion } from "framer-motion";

const Howwework = () => {
  const array = [
    {
      name: "Strategy",
      desc: "Our IT consulting services are tailored to align your technology strategy with your business objectives",
      image: "/images/pointer1.svg",
    },
    {
      name: "Wireframing",
      desc: "Wireframing enables efficient planning, communication, and validation of design concepts.",
      image: "/images/pointer2.svg",
    },
    {
      name: "Design",
      desc: "Our IT consulting services are tailored to align your technology strategy with your business objectives",
      image: "/images/pointer3.svg",
    },
    {
      name: "Development",
      desc: "Our IT consulting services are tailored to align your technology strategy with your business objectives",
      image: "/images/pointer4.svg",
    },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-base-200 flex justify-evenly py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ delay: 0.5 }}
        className="w-96 break-words flex flex-col gap-8"
      >
        <h1 className="font-bold text-5xl">How We Work</h1>
        <p>
          We work collaboratively with our clients to understand their unique
          challenges and deliver customized IT solutions that drive innovation
          and business success.
        </p>
        <button className="btn btn-success btn-block">
          Get in touch with us
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </button>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        className="w-[700px] flex justify-between gap-12 flex-wrap"
      >
        {array?.map((ele) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={item}
            className="w-64 flex flex-col gap-2"
            key={ele.name}
            transition={{ delay: 0.7 }}
          >
            <Image src={ele.image} height={50} width={50} alt="image" />
            <h1 className="text-2xl font-semibold">{ele.name}</h1>
            <p>{ele.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Howwework;
