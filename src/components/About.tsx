import FadeUp from "../anim/FadeUp";
import { SparklesText } from "./ui/sparkles-text";

export default function About() {
  return (
    <section id="about" className="relative py-5 px-5 md:px-20">
      <FadeUp delay={0.1}>
        <div className="border-b border-neutral-300 pb-2 w-full">
          <SparklesText sparklesCount={5}>
            <h1 className="font-mono tracking-widest text-4xl leading-none">
              ABOUT
            </h1>
          </SparklesText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] items-center mt-10 md:mt-0">
          <div>
            <p className="text-neutral-600 font-mono tracking-tight text-xs md:text-lg">
              Hi, I’m Vani! I’m currently an Informatics Engineering
              undergraduate at Brawijaya University. I enjoy anime, manga, art,
              games, and entertainment media in general. I also love tinkering
              with things on the internet and figuring out how they work behind
              the scenes. I’m always excited to learn new things, expand my
              experience, and try working on different kinds of projects. I’m a
              disciplined and hard-working person, especially when it comes to
              the projects I’m involved in. If you’d like to know more about me,
              feel free to contact me or check out my CV below!
            </p>
          </div>
          <img src="/images/butterfly.png" alt="about" className="md:w-full" />
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="flex flex-row justify-center gap-5">
          <div className="flex justify-center mt-10">
            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/1C2FlOg0yFck7xYNHsL8ns4hiRKJmBWLB?usp=drive_link"
              className="px-6 py-3 rounded-md md:rounded-full border border-white/20 bg-neutral-800 text-sm font-semibold text-white backdrop-blur-md hover:bg-neutral-800/90 transition"
            >
              Download My CV
            </a>
          </div>

          <div className="flex justify-center mt-10">
            <a
              target="_blank"
              href="https://satsugekka-project.vercel.app/"
              className="px-6 py-3 rounded-md md:rounded-full border border-neutral-800 bg-neutral-100 text-sm font-semibold text-neutral-800 backdrop-blur-md hover:bg-neutral-100/90 transition"
            >
              Blog and Hobby
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
