'use client';

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

// Images
import mapImg from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";

//
// ------------------ Types ------------------
//
type SkillPillProps = {
  skill: string;
  index: number;
};

type SkillCategoryType = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

type SkillCategoryProps = {
  category: SkillCategoryType;
  isActive: boolean;
  onClick: () => void;
};

type HobbyType = {
  title: string;
  emoji: string;
  left: string;
  top: string;
};

//
// ------------------ Data ------------------
//
const skillCategories: SkillCategoryType[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Crafting responsive, accessible, and performant user interfaces",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    description: "Building robust server-side applications and data management",
    skills: ["Node.js", "PostgreSQL", "API Design", "RESTful Services"],
  },
  {
    id: "deployment",
    title: "Deployment & DevOps",
    description: "Deploying and maintaining applications in production environments",
    skills: ["Vercel", "AWS", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    id: "tools",
    title: "Development Tools",
    description: "Tools that enhance productivity and development workflow",
    skills: ["Chrome DevTools", "Figma", "Git", "VS Code", "Postman"],
  },
];

const hobbies: HobbyType[] = [
  { title: "Gaming", emoji: "🎮", left: "5%", top: "5%" },
  { title: "Music", emoji: "🎧", left: "50%", top: "5%" },
  { title: "Reading", emoji: "📖", left: "10%", top: "35%" },
  { title: "Hiking", emoji: "🪜", left: "35%", top: "40%" },
  { title: "Traveling", emoji: "✈️", left: "70%", top: "45%" },
  { title: "Community Engagement", emoji: "🤝", left: "5%", top: "65%" },
];

//
// ------------------ Components ------------------
//
const SkillPill = ({ skill, index }: SkillPillProps) => {
  return (
    <motion.span
      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(45, 212, 191, 0.1)",
        color: "#5eead4",
      }}
    >
      {skill}
    </motion.span>
  );
};

const SkillCategory = ({ category, isActive, onClick }: SkillCategoryProps) => {
  return (
    <motion.div
      className={`p-5 rounded-xl cursor-pointer transition-all duration-300 border ${
        isActive
          ? "bg-gradient-to-br from-gray-800 to-gray-900 border-emerald-500/30 shadow-lg"
          : "bg-gray-800/50 border-gray-700 hover:border-emerald-400/30"
      }`}
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3
        className={`font-semibold text-lg mb-2 ${
          isActive ? "text-emerald-300" : "text-white"
        }`}
      >
        {category.title}
      </h3>
      <p className="text-sm text-gray-400">{category.description}</p>
    </motion.div>
  );
};

//
// ------------------ Main Component ------------------
//
const About = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryType | null>(
    skillCategories[0]
  );

  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Who I Am"
          description="Learn more about my skills, passions, and what I enjoy outside of work."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Section */}
          <Card className="relative p-6 md:p-10 bg-gray-900/50 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {skillCategories.map((category) => (
                <SkillCategory
                  key={category.id}
                  category={category}
                  isActive={activeCategory?.id === category.id}
                  onClick={() => setActiveCategory(category)}
                />
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              key={activeCategory?.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeCategory?.skills.map((skill, index) => (
                <SkillPill key={skill} skill={skill} index={index} />
              ))}
            </motion.div>
          </Card>

          {/* Hobbies Section */}
          <Card className="relative p-6 md:p-10 bg-gray-900/50 backdrop-blur-sm border border-gray-700 overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-6">Beyond Work</h2>
            <div className="relative w-full h-80">
              <Image
                src={mapImg}
                alt="map"
                className="object-cover rounded-lg"
                fill
              />
              <Image
                src={smileEmoji}
                alt="me"
                className="absolute w-20 h-20 -bottom-6 -left-6"
              />

              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="absolute text-2xl"
                  style={{ left: hobby.left, top: hobby.top }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span role="img" aria-label={hobby.title}>
                    {hobby.emoji}
                  </span>
                  <p className="text-xs text-gray-300 mt-1">{hobby.title}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
