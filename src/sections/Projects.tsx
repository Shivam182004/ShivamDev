
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import soulScriptProjectImg from "@/assets/images/istproject.png"
import typingCastProjectImg from "@/assets/images/tyingCastProject.png"
import blogzyyProjectImg from "@/assets/images/blogzyyProject.png"

const portfolioProjects = [
  {
    company: "SoulScript",
    year: "2024",
    title: "Personalized Journal and Mood Tracking App",
    results: [
      { title: "Developed an interactive dashboard for enhanced usability" },
      { title: "Implemented a mood tracker to support mental wellness" },
      { title: "Introduced a draft system for seamless journal saving" },
    ],
    link: "https://www.soulscript.me/",
    image: soulScriptProjectImg,
  },
  {
    company: "TypingCast",
    year: "2024",
    title: "Typing Test Platform with React and Redux",
    results: [
      { title: "Built a responsive typing test interface using React" },
      { title: "Implemented Redux for efficient state management" },
      { title: "Enhanced typing accuracy tracking and analytics" },
    ],
    link: "https://typing-cast.vercel.app/",
    image: typingCastProjectImg,
  },
  {
    company: "Blogzyy",
    year: "2024",
    title: "Full-Stack Blog Application",
    results: [
      { title: "Implemented user authentication for secure access" },
      { title: "Developed CRUD operations for efficient post management" },
      { title: "Added a comment system for better user engagement" },
    ],
    link: "https://blogzyy.onrender.com/",
    image: blogzyyProjectImg,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="Projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experience."/>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project , projectIndex)   => (
            <Card key={project.title}   className="px-8 pt-8 pb-0 md:pt-12  md:px-10 lg:pt-16 lg:px-20 sticky" style={{top:`calc(64px + ${projectIndex * 40}px`}}>
            <div className="lg:grid lg:grid-cols-2">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase -tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                  <span> {project.company}</span>
                  <span>&bull;</span>
                  <span> {project.year}</span>
                </div>
        
              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5" >
                {project.results.map(result => (
                  <li className="flex gap-2 text-sm text-white/50 md:text-base">
                    <CheckCircleIcon className="size-5 md:size-6"/>
                    <span>{result.title}
                  </span> 
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                <span>Visit live site</span>
                <ArrowUpIcon className="size-4"/>
                </button>
              </a>
              </div>
              <div className="relative">
              <Image src={project.image} alt={project.title} className=" rounded-3xl
              mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full  lg:w-auto lg:max-w-none"/>
              </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
