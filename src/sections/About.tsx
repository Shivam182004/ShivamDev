'use client'

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

// Images
import mapImg from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";

type SkillPillProps = {
  skill: string;
  index: number;
};

type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};


type SkillCategoryProps = {
  category: SkillCategory;
  isActive: boolean;
  onClick: (id: string) => void;
};

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Crafting responsive, accessible, and performant user interfaces",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    id: "backend",
    title: "Backend & Databases",
    description: "Building robust server-side applications and data management",
    skills: ["Node.js", "PostgreSQL", "API Design", "RESTful Services"]
  },
  {
    id: "deployment",
    title: "Deployment & DevOps",
    description: "Deploying and maintaining applications in production environments",
    skills: ["Vercel", "AWS", "Docker", "GitHub Actions", "CI/CD"]
  },
  {
    id: "tools",
    title: "Development Tools",
    description: "Tools that enhance productivity and development workflow",
    skills: ["Chrome DevTools", "Figma", "Git", "VS Code", "Postman"]
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
];

const SkillPill = ({ skill, index }:SkillPillProps) => {
  return (
    <motion.span
      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(45, 212, 191, 0.1)",
        color: "#5eead4"
      }}
    >
      {skill}
    </motion.span>
  );
};

const SkillCategory = ({ category, isActive, onClick }:SkillCategoryProps) => {
  return (
    <motion.div 
      className={`p-5 rounded-xl cursor-pointer transition-all duration-300 border ${
        isActive 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-emerald-500/30 shadow-lg' 
          : 'bg-gray-800/50 border-gray-700 hover:border-emerald-400/30'
      }`}
      onClick={() => onClick(category.id)} 
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className={`font-semibold text-lg mb-2 ${isActive ? 'text-emerald-300' : 'text-white'}`}>
        {category.title}
      </h3>
      <p className="text-sm text-gray-400">
        {category.description}
      </p>
    </motion.div>
  );
};

export const AboutSection = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const constraintRef = useRef(null);
  
  const currentCategory = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader 
          eyebrow="Skills & Expertise" 
          title="My Technology Toolkit" 
          description="A comprehensive overview of my technical skills across different domains. I continuously learn and adapt to new technologies to deliver exceptional digital experiences." 
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* Skills Section - Modern design without proficiency bars */}
          <Card className="p-6 md:p-8">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Technology Expertise</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore my skills across different domains of web development and software engineering
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {skillCategories.map((category) => (
                <SkillCategory 
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-3 justify-center"
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {currentCategory?.skills.map((skill, index) => (
                <SkillPill key={skill} skill={skill} index={index} />
              ))}
            </motion.div>
          </Card>

          {/* Hobbies and Location Cards */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <div className="px-6 py-6">
                <h3 className="text-xl font-semibold text-white mb-2">Beyond the Code</h3>
                <p className="text-gray-400">Discover my passions and hobbies outside the digital world</p>
              </div>
              
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby =>(
                  <motion.div 
                    key={hobby.title} 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-400/10 to-sky-500/10 border border-emerald-400/20 rounded-full absolute backdrop-blur-sm"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-medium text-emerald-200">{hobby.title}</span>
                    <span className="text-lg">{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 overflow-hidden">
              <Image 
                src={mapImg} 
                alt="World map showing my location"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 -z-10"></div>
                <Image 
                  src={smileEmoji} 
                  alt="Smiling memoji indicating my location"
                  className="size-20"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-700">
                <p className="text-sm text-white">Based in India</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};