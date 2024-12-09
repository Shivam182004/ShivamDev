import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import smileEmoji from "@/assets/images/memoji-smile.png"
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import Card from "@/components/Card";
import { Fragment } from "react";
import { link } from "fs";

const journeys = [
  {
    name: "Article",
    position: "What is a CDN?",
    text: "A CDN is a network of servers distributed across various geographic locations. These servers store copies of your website's content, such as images, videos, stylesheets, and scripts...",
    avatar: smileEmoji,
     link: "https://shivam-dev.hashnode.dev/how-a-cdn-works-a-simple-guide",
  },
  {
    name: "Article",
    position: "Mastering State Management with React Redux",
    text: "React Redux is the official library that integrates Redux, a popular state management tool, with React applications. It helps React components efficiently interact with the Redux store, enabling them to access the application's global state and dispatch actions to update it...",
    avatar: smileEmoji,
    link:"https://shivam-dev.hashnode.dev/redux-guide"
  },
  {
    name: "Article",
    position: "Understanding the Magic of Proxy Servers",
    text: "A proxy in technical terms refers to a server or software that acts as an intermediary between a client (such as a user's computer) and another server (like a web server). It facilitates requests from the client to the server and returns the server's responses back to the client....",
    avatar: smileEmoji,
    link:"https://shivam-dev.hashnode.dev/proxy-servers"
   
  },
  {
    name: "Article",
    position: "Why Caching is essential in Web development?",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: smileEmoji,
    link:"https://shivam-dev.hashnode.dev/why-caching-is-essential-in-web-development"
  },
 
];

export const BlogsSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader eyebrow="Shared Journeys" title="My Thoughts, Your Inspiration" description=" Explore ideas, stories, and lessons I’ve shared. Let’s learn and grow together, one blog at a time." />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right, transparent,black_10%,black_90%, transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {journeys.map(journey => (
                  <Card key={journey.name} className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300">
                    <div className="flex gap=4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                        <Image src={journey.avatar} alt="Avatar" className="max-h-full " />
                      </div>
                      <div>
                      <div className="font-semibold">{journey.name}</div>
                      <div className="text-sm text-white/40">{journey.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{journey.text}</p>
                    <button className="bg-white text-gray-950 h-8 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 md:w-auto px-6">
                 <a href={journey.link}>Have a look</a>
                <ArrowUpIcon className="size-4"/>
                </button>
                    {/* edit it for blog section */}
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
