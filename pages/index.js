import Head from 'next/head';
import Typewriter from "typewriter-effect";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useEffect, useRef, useState } from 'react';



const links = [
  {name: 'Introduction', to: '#introduction', id: 1},
  {name: 'Works', to: '#works', id: 3},
  {name: 'Skills', to: '#skills', id: 2},
  {name: 'Contact', to: '#contact', id: 4},
]
const projects = [
  {title: 'weather App', address:'https://weatherfor-u.netlify.app/', id: 1},
  {title: 'JS calculator', address:'https://calculatorfor-u.netlify.app/', id: 2},
  {title: 'Reservation App', address:'https://sonio-booking-app.netlify.app/', id: 3},
  {title: 'Todo App', address:'https://sonio-todoapp.netlify.app/', id: 4},
  {title: 'Fiber', address:'https://fiber-clone-sonio.netlify.app/', id: 5, otherProp: 'col-span-2 grid-col-start'},

]
const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};


export default function Home() {
  const [menu, setmenu] = useCycle(false, true);
  const [showbutton, setshowbutton] = useState(false);
  const ref = useRef();
  
  useEffect (() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 400 ) {
        setshowbutton(true)
      } else {
        setshowbutton(false)
      }
    });
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }
  useEffect(() => {
    const ifClicked = e => {
           // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if(menu && ref.current && ref.current.contains(e.target)) {
        setmenu(false)
      }
    }
    document.addEventListener("mousedown", ifClicked)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", ifClicked)

    }
  }, [menu]) 

  return (
    <div> 
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
      </Head>
      <div ref={ref}>
      <div  className='h-screen bg-gradient-to-r from-blue-900 to-gray-900 scroll-smooth' id='introduction'>
            <div className='fixed top-0 right-0 float-right pt-3' id='click'>
            <motion.svg  
            whileHover={{ scale: 1.1 }}
            variants={itemVariants} 
            onClick={setmenu} 
            className='cursor-pointer' width="50" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4H0V0H24V4ZM24 8H0V12H24V8ZM24 16H0V20H24V16Z" fill="white"/>
            </motion.svg>
            </div>
          <div className='text-white font-extrabold text-5xl flex justify-center items-center h-full text-center'>
            <div>
            <Typewriter
  
                onInit={(typewriter)=> {

                typewriter
                
                .typeString("HI!!!")
                  
                .pauseFor(1000)
                .deleteAll()
                .typeString("My name is Deji")
                .deleteAll()
                .typeString('A frontend Web Developer')
                .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

          </div>
          {showbutton && <div className='fixed right-3 cursor-pointer bottom-6 text-white p-5 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-lg' onClick={goToTop}>
          <span className="material-icons text-2xl">
            navigation
            </span>
          </div>}
        </div>
        <div className='h-fit bg-gradient-to-tr from-blue-900 to-gray-800' id='works'>
          <div className='w-full p-4 md:flex items-center justify-center h-full'>
            <div className='flex flex-col max-w-screen-lg mx-auto gap-4 lg:grid grid-cols-2'>
                {
                  projects.map(({title, id, address, otherProp}) => (
                    <motion.a whileHover={{scale: 1.1}} target='_blank' rel='noreferrer noopener' href={address} key={id} className={`w-fit mx-auto rounded-lg p-4 text-center border cursor-pointer border-gray-600 ${otherProp}`}>
                      <h1 className='text-white pb-4 text-center font-bold text-lg'>{title}</h1>
                      <iframe className='outline-none rounded-md' loading='lazy' src={address} frameBorder="0"></iframe>
                    </motion.a>
                  ))
                }

            </div>
            
          </div>

        </div>
        <div className='h-screen w-full bg-gradient-to-r from-violet-700 to-purple-900' id='skills'>
            <div className='flex items-center justify-center h-full flex-col text-white'>
              <motion.ul className='text-3xl text-center'>
                <motion.li whileHover={{scale: 1.1}} >HTML</motion.li>
                <motion.li whileHover={{scale:1.1}} className='pt-5'>CSS</motion.li>
                <motion.li whileHover={{scale:1.1}} className='pt-5'>Javascript</motion.li>
                <motion.li whileHover={{scale:1.1}} className='pt-5'>ReactJS</motion.li>
                <motion.li whileHover={{scale:1.1}} className='pt-5'>NextJS</motion.li>
              </motion.ul>
            </div>
        </div>
        <div className='h-screen w-full bg-gray-700' id='contact'>
          <div className='flex items-center justify-center h-full flex-col text-white'>
          <div className='text-center'>
          <h3 className='text-3xl font-bold'>LET&apos;S WORK TOGETHER...</h3>
          <p className='italic text-lg'>Contact me</p>
          <motion.ul className='pt-5 text-2xl flex flex-col items-center justify-center  w-40 mx-auto'>
            <motion.li whileHover={{scale: 1.1}}> <a className='flex items-center justify-between' target="_blank" rel='noreferrer noopener' href="https://www.instagram.com/sonio_deji">   Instagram</a></motion.li>
              <motion.li whileHover={{scale: 1.1}} className='pt-5'><a className='flex items-center justify-between' rel='noreferrer noopener' target="_blank" href="https://twitter.com/sonio_deji">Twitter</a></motion.li>
              <motion.li whileHover={{scale: 1.1}} className='pt-5' ><a target="_blank" rel='noreferrer noopener' href="mailto:atandauthman2@gmail.com">@send a mail</a></motion.li>
              <motion.li whileHover={{scale: 1.1}} className='pt-5'><a className='flex items-center justify-between' target="_blank" rel='noreferrer noopener' href="tel:+243-811-773-0982"><span className="material-icons">phone</span>Call ME</a></motion.li>
          </motion.ul>
        </div>
          </div>

        </div>
      </div>
       
        <AnimatePresence>
      {menu && <motion.div 
       className='bg-gradient-to-r from-cyan-500 to-blue-900 fixed top-0 right-0 flex flex-col text-white  h-screen z-10'
       initial={{ width: 0 }}
       animate={{
         width: 300
       }}
       exit={{
         width: 0,
         transition: { delay: 0.7, duration: 0.3 }
       }}
       >
        <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className='flex flex-col'
        >
          <div className='fixed top-0 right-0 float-right pr-4'  onClick={() => setmenu(false)}>
          <span className="material-icons cursor-pointer text-3xl">
            close
            </span>
            </div>
        {
            links.map(({name, to, id}) => (
              <motion.a
              className='mt-10 pt-10 pr-5 text-right text-2xl font-extrabold'
              href={to} 
              key={id}
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
              >
                {name}
              </motion.a>
            ))
          }
        </motion.div>
          
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}
