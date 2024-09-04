import Head from "next/head";
import Typewriter from "typewriter-effect";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import Close from "@mui/icons-material/Close";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Link from "@mui/icons-material/Link";
import GitHub from "@mui/icons-material/GitHub";
import Twitter from "@mui/icons-material/Twitter";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Phone from "@mui/icons-material/Phone";
import { Instagram, NavigateNext } from "@mui/icons-material";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const links = [
  { name: "Introduction", to: "#introduction", id: 1 },
  { name: "About", to: "#about", id: 5 },
  { name: "Works", to: "#works", id: 3 },
  { name: "Skills", to: "#skills", id: 2 },
  { name: "Contact", to: "#contact", id: 4 },
];
const projects = [
  {
    title: "weather App",
    address: "https://weatherfor-u.netlify.app/",
    id: 1,
    desc: "A weather application done where users can check for the current weather and also the weather forecast using openweather api",
    stack: ["TailwindCSS", "ReactJS"],
    img: "/weatherapp.png",
    git: "https://github.com/sonio-deji/weather-app",
  },
  {
    title: "JS calculator",
    address: "https://calculatorfor-u.netlify.app/",
    id: 2,
    desc: "A JavaScript web calculator",
    stack: ["ReactJS"],
    img: "/calculator.png",
    git: "https://github.com/sonio-deji/calculator",
  },
  {
    title: "Reservation App",
    address: "https://sonio-booking-app.netlify.app/",
    id: 3,
    desc: "A clone of booking.com website",
    stack: ["CSS", "ReactJS"],
    img: "/booking.png",
    git: "https://github.com/sonio-deji/bookingapp",
  },
  {
    title: "Todo App",
    address: "https://sonio-todoapp.netlify.app/",
    id: 4,
    desc: "A full stack web todolist application where users can CREATE, READ, UPDATE AND DELETE todo",
    stack: ["CSS", "ReactJS", "MongoDB", "NodeJS", "express"],
    img: "/todo.png",
    git: "https://github.com/sonio-deji/todolist",
  },
  {
    title: "Fiber",
    address: "https://fiber-clone-sonio.netlify.app/",
    id: 5,
    desc: "A clone of fiber.com website",
    stack: ["CSS", "nextJS"],
    img: "/fiber.png",
    git: "https://github.com/sonio-deji/fiber",
  },
  {
    title: "countries",
    address: "https://countriesapp-api.netlify.app/",
    id: 6,
    desc: "A web app that utilizes and API to show list of countries and the details about each countries when the user clicks on the specific country, users can also filter by region and search for a country, it also includes a darkmode toggle",
    stack: ["tailwind", "ReactJS"],
    img: "/countries.png",
    git: "https://github.com/sonio-deji/countries",
  },
  {
    title: "E-Commerce",
    address: "https://sonio-jsstore.netlify.app/",
    id: 7,
    desc: "A small full stack e-commerce store where users can add to cart, delete from cart and update cart. It was built using redux, styled-component, materialUI and react for the frontend, nodeJS, mongodb for the backend. it also utilizes some backend libraries like JWT to assign and verify token, nodemailer, cryptoJS for password for encryption",
    stack: [
      "Styled-components",
      "ReactJS",
      "nodeJS",
      "mongodb",
      "express",
      "JWT",
    ],
    img: "/ecommerce.png",
    git: "https://github.com/sonio-deji/e-commerce-app",
  },
  {
    title: "music app",
    address: "https://musica-app-sn.netlify.app/",
    id: 8,
    desc: "A website for streaming music",
    stack: ["Styled-components", "ReactJS"],
    img: "/music.png",
    git: "https://github.com/sonio-deji/musicapp",
  },
  {
    title: "music app",
    address: "https://musica-app-sn.netlify.app/",
    id: 9,
    desc: "A website for streaming music",
    stack: ["Styled-components", "ReactJS"],
    img: "/image-1.png",
    git: "https://github.com/sonio-deji/musicapp",
  },

  {
    title: "music app",
    address: "https://musica-app-sn.netlify.app/",
    id: 12,
    desc: "A website for streaming music",
    stack: ["Styled-components", "ReactJS"],
    img: "/image-3.png",
    git: "https://github.com/sonio-deji/musicapp",
  },
  {
    title: "music app",
    address: "https://musica-app-sn.netlify.app/",
    id: 13,
    desc: "A website for streaming music",
    stack: ["Styled-components", "ReactJS"],
    img: "/image-4.png",
    git: "https://github.com/sonio-deji/musicapp",
  },
  {
    title: "music app",
    address: "https://musica-app-sn.netlify.app/",
    id: 14,
    desc: "A website for streaming music",
    stack: ["Styled-components", "ReactJS"],
    img: "/image-5.png",
    git: "https://github.com/sonio-deji/musicapp",
  },
  {
    title: "music app",
    address: "https://musica-app-sn.netlify.app/",
    id: 15,
    desc: "A website for streaming music",
    stack: ["Styled-components", "ReactJS"],
    img: "/image-6.png",
    git: "https://github.com/sonio-deji/musicapp",
  },
  {
    title: "music app",
    address: "https://musica-app-sn.netlify.app/",
    id: 16,
    desc: "A website for streaming music",
    stack: ["Styled-components", "ReactJS"],
    img: "/image-7.png",
    git: "https://github.com/sonio-deji/musicapp",
  },
  {
    title: "music app",
    address: "https://musica-app-sn.netlify.app/",
    id: 11,
    desc: "A website for streaming music",
    stack: ["Styled-components", "ReactJS"],
    img: "/inbranded-1.png",
    git: "https://github.com/sonio-deji/musicapp",
  },
];
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function Home() {
  const [menu, setmenu] = useCycle(false, true);
  const [showbutton, setshowbutton] = useState(false);
  const ref = useRef();
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setshowbutton(true);
      } else {
        setshowbutton(false);
      }
    });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 900) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const handleButtonClicked = () => {};
  useEffect(() => {
    const ifClicked = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menu && ref.current && !ref.current.contains(e.target)) {
        setmenu(false);
      }
    };
    document.addEventListener("mousedown", ifClicked);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", ifClicked);
    };
  }, [menu, setmenu]);
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: false }));

  return (
    <div>
      <Head>
        <title>Atanda Uthman</title>
        <meta name="description" content="Portfolio app for Atanda Uthman" />
      </Head>
      <div className=" mx-auto  ">
        <div
          className={`flex justify-between w-full items-center  lg:p-28 p-10 fixed  top-0 z-10 h-14 ${
            bg ? "bg-transparent" : "bg-[#4831d4]"
          }`}
          // style={{
          //   background: "linear-gradient(90deg, #4831d4 67%, #ccf381 33%)",
          // }}
        >
          <div className="text-extrabold mix-blend-difference  md:text-6xl text-3xl font-bold text-[#ccf381]">
            Adedeji
          </div>
          <div className="  relative  w-12 h-12 ">
            <AnimatePresence>
              {menu && (
                <motion.div
                  className={` absolute top-0 right-0 bg-white p-4 flex flex-col text-gray-600   z-10 `}
                  initial={{ width: 0 }}
                  animate={{
                    width: 300,
                  }}
                  exit={{
                    width: 0,
                    transition: { delay: 0.7, duration: 0.3 },
                  }}
                  ref={ref}
                >
                  {/* <svg
                    viewBox="0 0 50 50"
                    className={`menu-icon  w-12 h-12 z-50${menu ? "open" : ""}`}
                    id="menu-icon"
                    onClick={() => setmenu(false)}
                  >
                    <path
                      class="line1"
                      d="M10 15 H40"
                      stroke="#4831d4"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                    <path
                      class="line2"
                      d="M10 25 H40"
                      stroke="#4831d4"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                    <path
                      class="line3"
                      d="M10 35 H40"
                      stroke="#4831d4"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                  </svg> */}
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sideVariants}
                    className="flex flex-col"
                  >
                    {/* <div
                className="fixed top-0 right-0 float-right pr-4 mt-4 cursor-pointer"
                onClick={() => setmenu(false)}
              >
                <Close className="text-4xl" />
              </div> */}
                    {links.map(({ name, to, id }) => (
                      <motion.a
                        className="mt-10 pt-10 pr-5 text-right text-[#4831d4] text-2xl font-extrabold"
                        href={to}
                        key={id}
                        whileHover={{ scale: 1.1 }}
                        variants={itemVariants}
                      >
                        {name}
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <svg
              viewBox="0 0 50 50"
              className={`menu-icon z-50 ${menu ? "open" : ""}`}
              id="menu-icon"
              onClick={() => setmenu(!menu)}
            >
              <path
                className="line1"
                d="M10 15 H40"
                stroke={` ${bg ? "#4831d4" : "#ccf381"} `}
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                className="line2"
                d="M10 25 H40"
                stroke={` ${bg ? "#4831d4" : "#ccf381"} `}
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                className="line3"
                d="M10 35 H40"
                stroke={` ${bg ? "#4831d4" : "#ccf381"} `}
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div
          className=" scroll-smooth pt-5 "
          id="introduction"
          style={{
            background: "linear-gradient(90deg, #4831d4 67%, #ccf381 33%)",
          }}
        >
          <div className=" max-w-[1440px] mx-auto py-36 px-5  flex items-center justify-center">
            <div className=" max-w-full lg:max-w-[50%]">
              <div className=" font-bold text-4xl md:text-6xl text-[#ccf381]">
                FRONTEND <br />
                DEVELOPER
              </div>
              <div className=" text-white text-2xl mt-3">
                Frontend Developer. I like to craft solid and scalable frontend
                products with great user experiences.
              </div>
              <div className=" flex gap-4 mt-5 text-[#ccf381]">
                <p className=" ">
                  Highly skilled at progressive enhancement, design systems & UI
                  Engineering.
                </p>
                <p>
                  Proven experience building successful products for clients
                  across several countries.
                </p>
              </div>
            </div>
            <div className=" hidden lg:block lg:max-w-[50%] ">
              <figure className="ggnSEW visage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="935"
                  height="701"
                  viewBox="0 0 935 701"
                  id="avatar-shapes"
                  data-shape="true"
                >
                  <path
                    fill="none"
                    stroke="#ccf381"
                    strokeMiterlimit="50"
                    strokeWidth="2"
                    d="M165.648 352.811v0l15.343 16.136v0l15.343-16.136v0l15.341 16.136v0l15.343-16.136v0l15.343 16.136v0l15.343-16.136v0l15.344 16.136v0l15.345-16.136v0"
                  ></path>
                  <path
                    fill="#ccf381"
                    d="M112.476 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM169.38 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM188.348 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM207.315 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM264.22 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM283.188 1.58a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM302.155 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM112.476 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 20.804a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM150.412 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM169.38 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM188.348 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM207.315 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM264.22 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM283.188 20.804a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002 0zM302.155 20.804a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM321.123 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM112.476 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 116.92a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .001zM150.412 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM169.38 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM188.348 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM207.315 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM264.22 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM283.188 116.92a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.002.001zM302.155 116.92a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .001zM321.123 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM112.476 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM169.38 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM188.348 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM207.315 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM264.22 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM283.188 136.142a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM302.155 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM112.476 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  ></path>
                  <path
                    fill="#4831d4"
                    d="M692.477 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM711.444 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM749.38 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM768.348 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM787.315 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM844.22 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM863.188 418.551a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM882.155 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM692.477 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM711.444 437.774a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM730.412 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM749.38 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM768.348 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM787.315 437.774a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 437.774a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM844.22 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM863.188 437.774a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM882.155 437.774a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM901.123 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM692.477 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 456.998a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 456.998a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 456.998a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 456.998a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 456.998a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM692.477 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM711.444 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM749.38 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM768.348 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM787.315 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM844.22 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM863.188 476.22a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM882.155 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM692.477 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM711.444 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM749.38 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM768.348 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM787.315 495.443a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM806.283 495.443a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM825.252 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM844.22 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM863.188 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM882.155 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM692.477 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 514.667a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 514.667a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 514.667a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 514.667a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 514.667a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM692.477 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM711.444 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM749.38 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM768.348 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM787.315 533.89a1.5 1.5 0 11-2.998 0 1.5 1.5 0 012.998 0zM806.283 533.89a1.5 1.5 0 11-2.998 0 1.5 1.5 0 012.998 0zM825.252 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM844.22 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM863.188 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM882.155 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM692.477 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM711.444 553.113a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM730.412 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM749.38 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM768.348 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM787.315 553.113a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 553.113a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM844.22 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM863.188 553.113a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM882.155 553.113a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM901.123 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM692.477 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 572.336a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 572.336a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 572.336a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 572.336a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 572.336a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM692.477 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM711.444 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM749.38 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM768.348 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM787.315 591.558a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM806.283 591.558a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM825.252 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM844.22 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM863.188 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM882.155 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM692.477 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 610.782a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 610.782a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 610.782a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 610.782a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 610.782a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0z"
                  ></path>
                  <path
                    fill="none"
                    stroke="#4831d4"
                    strokeMiterlimit="50"
                    strokeWidth="2"
                    d="M846.646 332.048v0l22.258.562v0l-.56-22.26v0l22.258.56v0l-.56-22.258v0l22.259.56v0l-.56-22.257v0l22.26.559v0l-.56-22.26v0"
                  ></path>
                  <path
                    fill="none"
                    stroke="#ccf381"
                    strokeMiterlimit="50"
                    strokeWidth="2"
                    d="M2.114 541.705v0l-.56 22.258v0l22.258-.561v0l-.56 22.259v0l22.258-.56v0l-.56 22.258v0l22.258-.56v0l-.559 22.26v0l22.26-.56v0"
                  ></path>
                </svg>
                <span
                  aria-label="Photo of Olaolu."
                  role="img"
                  className="handsome"
                ></span>
              </figure>
            </div>
          </div>
        </div>
        <div className="h-screen bg-white p-10 " id="about">
          <div className="font-extrabold text-2xl sm:text-6xl text-[#4831d4] text-center mb-10 sm:mb-36">
            ABOUT ME
          </div>
          <div className=" flex  flex-col justify-center">
            <p className="font-bold text-md sm:text-2xl text-[#3d155f] ">
              I am a passionate Frontend web/app designer proficient in the use
              of HTML, CSS, JavaScript and nodeJS including frontend frameworks
              and libraries and an aspiring full-stack developer with the aim of
              bringing ideas to life digitally. I&apos;m always curious and I
              really love to find out the &lsquo;Why&rsquo; of things and
              concepts. I&apos;m very well able to build functional web
              applications and easily convert UI designs into pixel perfect
              responsive web pages. I am a fast learner, a diligent worker and
              can adapt to a new technology as quickly as the need may be. My
              aim is to one day be able to stand among the great creators who
              have made an impact in the big and little they have done, starting
              from anything as little as a landing page to big things like a
              fully functional responsive web application.
            </p>
            <div className="flex justify-between w-48 mt-9">
              <div>
                <div className="font-bold text-xl text-gray-600">03+</div>
                <p className="font-light text-md text-gray-500">
                  Years experience
                </p>
              </div>
              <div>
                <div className="font-bold text-xl text-gray-600">10+</div>
                <p className="font-light text-md text-gray-500">
                  Projects completed
                </p>
              </div>
            </div>
          </div>
          {/* <div className="font-extrabold text-2xl sm:text-3xl text-gray-500 mb-10 sm:mb-36">
            ABOUT ME
          </div>
          <div className={`flex justify-between ${styles.about}`}>
            <div>
              <p className="font-bold text-md sm:text-lg text-gray-500 ">
                I am a passionate Frontend web/app designer proficient in the
                use of HTML, CSS, JavaScript and nodeJS including frontend
                frameworks and libraries and an aspiring full-stack developer
                with the aim of bringing ideas to life digitally. I&apos;m
                always curious and I really love to find out the
                &lsquo;Why&rsquo; of things and concepts. I&apos;m very well
                able to build functional web applications and easily convert UI
                designs into pixel perfect responsive web pages. I am a fast
                learner, a diligent worker and can adapt to a new technology as
                quickly as the need may be. My aim is to one day be able to
                stand among the great creators who have made an impact in the
                big and little they have done, starting from anything as little
                as a landing page to big things like a fully functional
                responsive web application.
              </p>
              <div className="flex justify-between w-48 mt-9">
                <div>
                  <div className="font-bold text-xl text-gray-600">03+</div>
                  <p className="font-light text-md text-gray-500">
                    Years experience
                  </p>
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-600">10+</div>
                  <p className="font-light text-md text-gray-500">
                    Projects completed
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div
          className=" w-full bg-[#4831d4]    p-10   items-center justify-center"
          id="works"
        >
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
            className=" w-full max-w-[90vw] flex items-center justify-between"
          >
            <CarouselContent className="  flex items-center gap-2">
              {projects.map((_, index) => (
                <CarouselItem key={index} className="h-fit">
                  <div className=" aspect-square h-[600px]">
                    <img
                      src={_.img}
                      alt=""
                      className="  w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className=" max-w-[1440px] flex mx-auto justify-between">
            <div className=" max-w-[701px]">
              <h1 className="text-[#ccf381]  font-bold text-3xl md:text-6xl">
                Over the years,
              </h1>
              <br />
              <div className=" flex flex-col gap-10 max-w-[701px]">
                <p className=" text-white text-xl ">
                  I've built products for companies and businesses around the
                  globe ranging from marketing websites to complex solutions and
                  enterprise apps with focus on fast, elegant and accessible
                  user experiences.
                </p>
                <p className=" text-white text-xl ">
                  Currently, I work at{" "}
                  <a
                    className=" text-[#ccf381] font-bold"
                    href="https://fluttersuite.com"
                  >
                    Fluttersuite
                  </a>{" "}
                  as a Senior Frontend Engineer building an ai web builder and
                  crafting thoughtful and inclusive experiences that adhere to
                  web standards.
                </p>
                <p className=" text-white text-xl ">
                  Before now, I was Principal Frontend Engineer at{" "}
                  <a
                    className=" text-[#ccf381] font-bold"
                    href="https://opendashboard.co"
                  >
                    Opendashboard
                  </a>{" "}
                  , where I worked on a suite of tools and services tailored
                  towards a data management system for businesses
                </p>
                <p className=" text-white text-xl ">
                  Prior to Opendashboard, I was a frontend engineer, at{" "}
                  <a
                    className=" text-[#ccf381] font-bold"
                    href="https://inbranded.co"
                  >
                    inbranded
                  </a>{" "}
                  building reuseable web components and design builder .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-full" id="skills">
          <div className="flex items-center justify-center h-full text-gray-600">
            <motion.ul className="text-3xl flex justify-between flex-wrap gap-10">
              <motion.li whileHover={{ scale: 1.1 }}>
                <Image
                  src="/html.png"
                  width="100%"
                  height="100%"
                  className="rounded-[50%]"
                  alt="logo"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/css.png"
                  width="100%"
                  height="100%"
                  className="rounded-[50%]"
                  alt="logo"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className=" rounded-lg">
                <Image
                  src="/javaScript-logo.png"
                  width="100%"
                  height="100%"
                  className="rounded-[50%]"
                  alt="logo"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/react.png"
                  width="100%"
                  height="100%"
                  className="rounded-[50%]"
                  alt="logo"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/node.png"
                  width="100%"
                  height="100%"
                  className="rounded-[50%]"
                  alt="logo"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/1200px-nextjs-logo.svg.png"
                  width="100%"
                  height="100%"
                  className="rounded-[50%]"
                  alt="logo"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/mongo.png"
                  width="50%"
                  height="50%"
                  className="rounded-[50%]"
                  alt="logo"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/github.png"
                  width="100%"
                  height="100%"
                  className={`rounded-[50%]`}
                  alt="logo"
                />
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <div className="h-screen w-full" id="contact">
          <div className="flex items-center justify-center h-full flex-col text-gray-600">
            <div className="text-center">
              <h3 className="text-3xl font-bold">
                LET&apos;S WORK TOGETHER...
              </h3>
              <p className="italic text-lg">Contact me</p>
              <motion.ul className="pt-5 text-2xl flex flex-col items-center justify-center  w-40 mx-auto">
                <motion.li whileHover={{ scale: 1.1 }}>
                  {" "}
                  <a
                    className="flex items-center justify-between"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.instagram.com/sonio_deji"
                  >
                    {" "}
                    <Instagram /> Instagram
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="pt-5">
                  <a
                    className="flex items-center justify-between"
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://twitter.com/sonio_deji"
                  >
                    <Twitter /> Twitter
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="pt-5">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="mailto:atandauthman2@gmail.com"
                  >
                    @send a mail
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="pt-5">
                  <a
                    className="flex items-center justify-between"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="tel:+243-811-773-0982"
                  >
                    <Phone />
                    Call ME
                  </a>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
