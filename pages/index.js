import Head from "next/head";
import Typewriter from "typewriter-effect";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import Close from "@mui/icons-material/Close";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Link from "@mui/icons-material/Link";
import Github from "@mui/icons-material/Github";
import Twitter from "@mui/icons-material/Twitter";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Phone from "@mui/icons-material/Phone";
import { Instagram, NavigateNext } from "@mui/icons-material";

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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setshowbutton(true);
      } else {
        setshowbutton(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    const ifClicked = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menu && ref.current && ref.current.contains(e.target)) {
        setmenu(false);
      }
    };
    document.addEventListener("mousedown", ifClicked);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", ifClicked);
    };
  }, [menu]);

  return (
    <div>
      <Head>
        <title>Atanda Uthman</title>
        <meta name="description" content="Portfolio app for Atanda Uthman" />
      </Head>
      <div ref={ref} className="max-w-5xl mx-auto p-8 bg-[#fbfbfe]">
        <div className="flex justify-between items-center sticky top-0 z-10 h-14">
          <div className="text-extrabold text-xl font-bold text-black">
            Sonio
          </div>
          <div className="justify-around w-96 hidden sm:flex">
            {links.map((link) => (
              <a
                className="text-light font-bold text-black "
                key={link.id}
                href={link.to}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="sm:hidden" id="click">
            <motion.svg
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
              onClick={setmenu}
              className="cursor-pointer"
              width="50"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4H0V0H24V4ZM24 8H0V12H24V8ZM24 16H0V20H24V16Z"
                fill="black"
              />
            </motion.svg>
          </div>
        </div>
        <div className="h-screen scroll-smooth" id="introduction">
          <div
            className={`text-black mt-36 flex border items-center justify-between p-4 ${styles.top}`}
          >
            <div className="flex justify-between flex-col h-48">
              <a
                target="_blank"
                href="https://linkedin.com/mwlite/atanda-uthman-4229042lb"
                className="text-blue-500"
                rel="noreferrer noopener"
              >
                <LinkedIn />
              </a>
              <a
                target="_blank"
                href="https://github.com/sonio-deji"
                rel="noreferrer noopener"
                className="text-blue-500"
              >
                <Github />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/sonio_deji"
                rel="noreferrer noopener"
                className="text-blue-500"
              >
                <Twitter />
              </a>
            </div>
            <div className="flex flex-col h-56 justify-between">
              <div className="text-4xl font-extrabold text-gray-600">
                HI, I'm Adedeji
              </div>
              <div className="text-light font-bold text-gray-500">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Front-end dev")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("REACT/ NEXTJS")
                      .deleteAll()
                      .typeString("HTML, CSS AND JS")
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="text-light font-bold text-gray-500">
                High level experience in web development using frontend
                libraries like ReactJS and SSR frameworks like NEXTJS
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#contact"
                  className={`font-bold text-xl bg-blue-500 text-white rounded-md p-4 w-fit ${styles.contact}`}
                >
                  Contact me <NavigateNext className={styles.nav} />
                </a>
                <a
                  href="https://docs.google.com/document/d/1QT7GNtYgRGKla1e_YDwJmDjk17PCbB_X/edit?usp=drivesdk&ouid=116994626900130378795&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`font-bold text-xl bg-blue-500 text-white rounded-md p-4 w-fit ${styles.contact}`}
                >
                  Download CV
                </a>
              </div>
            </div>
            <div></div>
          </div>
          {showbutton && (
            <div
              className="fixed right-3 cursor-pointer bottom-6 text-white p-5 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-lg"
              onClick={goToTop}
            >
              <ArrowUpward />
            </div>
          )}
        </div>
        <div className="h-screen" id="about">
          <div className="font-extrabold text-3xl text-gray-500 mb-36">
            ABOUT ME
          </div>
          <div className={`flex justify-between ${styles.about}`}>
            <div>
              <p className="font-bold text-lg text-gray-500 ">
                I am a passionate Frontend web/app designer proficient in the
                use of HTML, CSS, JavaScript and nodeJS including frontend
                frameworks and libraries and an aspiring full-stack developer
                with the aim of bringing ideas to life digitally. I'm always
                curious and I really love to find out the "Why" of things and
                concepts. I'm very well able to build functional web
                applications and easily convert UI designs into pixel perfect
                responsive web pages. I am a fast learner, a diligent worker and
                can adapt to a new technology as quickly as the need may be. My
                aim is to one day be able to stand among the great creators who
                have made an impact in the big and little they have done,
                starting from anything as little as a landing page to big things
                like a fully functional responsive web application.
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
          </div>
        </div>

        <div className=" w-full" id="works">
          <div className="flex gap-5 flex-wrap w-full items-center justify-center lg:justify-between">
            {projects.map(({ title, id, address, img, desc, git }) => (
              <motion.div
                whileHover={{ scale: 1.0 }}
                key={id}
                className={`rounded-lg cursor-pointer w-[400px] ${styles.top} p-4 h-[700px]`}
              >
                <Image
                  src={img}
                  width="100%"
                  height="100%"
                  objectFit="contain"
                  layout="responsive"
                />
                <h1 className="text-gray-600 font-bold text-lg">{title}</h1>
                <p className="text-gray mb-5">{desc}</p>

                <div>
                  <a
                    className={` text-gray-600 mr-5 ${styles.top}`}
                    target={"_blank"}
                    href={git}
                    rel="noreferrer noopener"
                  >
                    {" "}
                    <Github />{" "}
                  </a>
                  <a
                    className={` text-gray-600 ${styles.top}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={address}
                  >
                    <Link />
                  </a>
                </div>
              </motion.div>
            ))}
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
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/css.png"
                  width="100%"
                  height="100%"
                  className="rounded-[50%]"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className=" rounded-lg">
                <Image
                  src="/javaScript-logo.png"
                  width="100%"
                  height="100%"
                  className="rounded-[50%]"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/react.png"
                  width="100%"
                  height="100%"
                  className="rounded-[50%]"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/node.png"
                  width="100%"
                  height="100%"
                  className="rounded-[50%]"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/1200px-nextjs-logo.svg.png"
                  width="100%"
                  height="100%"
                  className="rounded-[50%]"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/mongo.png"
                  width="50%"
                  height="50%"
                  className="rounded-[50%]"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="">
                <Image
                  src="/github.png"
                  width="100%"
                  height="100%"
                  className={`rounded-[50%]`}
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

      <AnimatePresence>
        {menu && (
          <motion.div
            className={`bg-[#fbfbfe] fixed top-0 border right-0 flex flex-col text-gray-600  h-screen z-10 ${styles.sidebar}`}
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
              className="flex flex-col"
            >
              <div
                className="fixed top-0 right-0 float-right pr-4 mt-4 cursor-pointer"
                onClick={() => setmenu(false)}
              >
                <Close className="text-4xl" />
              </div>
              {links.map(({ name, to, id }) => (
                <motion.a
                  className="mt-10 pt-10 pr-5 text-right text-2xl font-extrabold"
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
    </div>
  );
}
