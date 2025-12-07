import FadeUp from "../anim/FadeUp";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-10 md:px-20">
      <FadeUp delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] items-center">
          <div>
            <p className="text-white pt-15">
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

          <div className="flex justify-center md:justify-end mt-20">
            <img src="/images/ABOUT.png" alt="about-title" className="h-32" />
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="flex justify-center mt-10">
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1C2FlOg0yFck7xYNHsL8ns4hiRKJmBWLB?usp=drive_link"
            className="px-6 py-3 bg-blue-light text-white font-semibold hover:bg-blue-secondary cursor-pointer rounded"
          >
            Download My CV
          </a>
        </div>
      </FadeUp>
    </section>
  );
}
