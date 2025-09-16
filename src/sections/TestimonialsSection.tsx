
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { Fragment } from "react";

// Replace these with actual images of your colleagues
import colleague1 from "@/assets/images/memoji-avatar-3.png";
import colleague2 from "@/assets/images/memoji-avatar-5.png";
import colleague3 from "@/assets/images/memoji-avatar-3.png";
import colleague4 from "@/assets/images/memoji-avatar-5.png";


const testimonials = [
  {
    name: "Sagar Chouhan",
    position: "Full stack developer at Rearck India Solutions",
    text: "It's great working with Shivam , he's talented , energetic and got the  thought of achieving everything . All of these  make him a great fit for the ever changing software industry .",
    avatar: colleague1,
    link: "https://www.linkedin.com/in/sagar-chouhan-1010b3213"
  },
  {
    name: "Navneet Adlak",
    position: "Lead Frontend Developer at Infinnights Fintech Limited",
    text: "One thing I’ve noticed is how fast he picks things up and turns them into working applications. His strong fundamentals make him reliable when we think about long-term growth.",
    avatar: colleague2,
    link: "https://www.linkedin.com/in/navneet-adlak/"
  },
  {
  name: "Adarsh landge",
  position: "Frontend Developer",
  text: "Shivam is highly punctual and disciplined, balancing dedication to work with strong collaboration. He communicates clearly, solves problems effectively, and ensures features are delivered with precision.",
  avatar: colleague3,
  link: "https://www.linkedin.com/in/adarsh-landge/"
},
  {
    name: "Jatin Wadhwani",
    position: "Full Stack Devloper",
    text: "Your working style is very focused and consistent — you don’t just complete tasks, you make sure they’re done with clarity and intent. What makes you stand out is the mix of dedication, honesty, and eagerness to learn, which makes working with you both reliable and inspiring",
    avatar: colleague2,
    link: "https://www.linkedin.com/in/jatinwadhwani/"
  }
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
      </div>
      
      <div className="container relative z-10">
        <SectionHeader 
          eyebrow="Colleague Testimonials" 
          title="What People Say About Me" 
          description="Here's what my colleagues and clients have to say about working with me. Their feedback inspires me to keep growing and delivering exceptional results." 
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right, transparent,black_10%,black_90%, transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial, idx) => (
                  <Card key={`${testimonial.name}-${idx}`} className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-1 transition duration-300 bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex gap-4 items-start">
                      <div className="relative">
                        <div className="size-14 bg-gradient-to-br from-purple-600 to-blue-500 inline-flex rounded-full items-center justify-center flex-shrink-0 overflow-hidden">
                          <Image 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="object-cover"
                            fill
                          />
                        </div>
                        
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-blue-300/80">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base text-white/80 italic"> &quot;{testimonial.text}&quot;</p>
                    
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      Connect on LinkedIn
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};