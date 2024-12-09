'use client'

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import  BookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import typescriptIcon from "@/assets/icons/661dcd67547f2-TypeScript.svg"
import JavaScriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSSIcon from "@/assets/icons/css3.svg"
import tailwindCssIcon from "@/assets/icons/671f656dc08df-Tailwind-CSS.svg"
import GithubIcon from "@/assets/icons/github.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import nodeIcon from "@/assets/icons/661dcdac54bdc-nodejs.svg"
import nextjsIcon from "@/assets/icons/6623b75b43833-Nextjs.svg"
import mapImg from "@/assets/images/map.png"
import postgresqlIcon from "@/assets/icons/6729264e400e0-PostgreSQL.svg"
import smileEmoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import {motion} from "framer-motion";
import { useRef } from "react";


const toolBoxItems =[
  {
      title: "JavaScript",
      iconType: JavaScriptIcon,
  },
  {
      title: "TypeScript",
      iconType: typescriptIcon,
  },
  {
      title: "Next Js",
      iconType: nextjsIcon,
  },
  {
      title: "HTML5",
      iconType: HTMLIcon,
  },
  {
      title: "CSS3",
      iconType: CSSIcon,
  },
  {
      title: "Tailwind",
      iconType: tailwindCssIcon,
  },
  {
      title: "React",
      iconType: ReactIcon,
  },
  {
      title: "Node",
      iconType: nodeIcon,
  },
  {
      title: "postgreSQL",
      iconType: postgresqlIcon,
  },
  {
      title: "Chorme",
      iconType: ChromeIcon,
  },
  {
      title: "Gtihub",
      iconType: GithubIcon,
  }
  
];

const hobbies = [
  {
   title:"Gaming",
   emoji:"🎮",
   left:"5%",
   top:"5%",
  },
  {
   title:"Music",
   emoji:"🎧",
   left:"50%",
   top:"5%",
  },
  {
   title:"Reading",
   emoji:"📖",
   left:"10%",
   top:"35%",
  },
  {
   title:"Hiking",
   emoji:"🪜",
   left:"35%",
   top:"40%",
  },
  {
   title:"Traveling",
   emoji:"✈️",
   left:"70%",
   top:"45%",
  },
  {
   title:"Community Engagement",
   emoji:"🤝",
   left:"5%",
   top:"65%",
  },
]



export const AboutSection = () => {
  const constraintRef = useRef(null);
  return(
    <div id="About" className="py-20 lg:py-28">
      <div className="container">
    <SectionHeader eyebrow="About me" title="Get to Know Me" description="Discover who I am, what drives me, and what fuels my passion. Dive into my journey, my motivations, and the impact I aim to create through my work. "/>

    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
      <Card className="h-[320px] md:col-span-2 lg:col-span-1">

        <CardHeader title="My Reads" description="Explore the books shapping my prespectives"/>
        
        <div className="w-40 mx-auto mt-2 md:mt-0">
        <Image src={BookImage} alt="Book Cover Image"/>
        </div>
      </Card>
      <Card className="h-[320px] md:col-span-3 lg:col-span-2">
        <CardHeader title="My ToolBox" description="Explore the technologies and tools i use to craft exceptional digital ecperiences."
        className=""
        />
        <ToolboxItems toolBoxItems={toolBoxItems} className="" itemWrapperClassName="animate-move-left [animation-duration:20s]"/>
        <ToolboxItems toolBoxItems={toolBoxItems} className="mt-6"  
        itemWrapperClassName="animate-move-right [animation-duration:20s]"/>
      
      </Card>
      </div>
     <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
      <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
      <CardHeader title="Beyond the Code" description=" Discover my passions and hobbies outside the digital world."
      className="px-6 py-6"/>
        
        <div className="relative flex-1 " ref={constraintRef}>
          {hobbies.map(hobby =>(
            <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
            style={{
              left:hobby.left,
              top:hobby.top,
            }}
            drag
            dragConstraints={constraintRef}
            >
           <span className="font-medium text-gray-950">{hobby.title}</span>
           <span>{hobby.emoji}</span>
            </motion.div>
          ))}
        </div>
       
      </Card>
      <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
         <Image src={mapImg} alt="map image"
         className="h-full w-full object-cover object-left-top"/>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
         <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animate-duration:2s]"></div>
         <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
         <Image src={smileEmoji} alt="smile Emoji"
         className="size-20"/>
         </div>
      </Card>
      </div>
    </div>
    </div>
    </div>
  );
};
