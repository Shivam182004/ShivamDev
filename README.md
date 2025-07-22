This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


try

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