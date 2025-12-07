import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import FadeUp from "../anim/FadeUp";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-8 text-center pb-40">
      <img
        src="/images/laurel_1.png"
        alt="laurel-decoration_3"
        className="
          absolute 
          left-0 
          -top-20 
          w-[400px] 
          md:w-[450px]
          lg:w-[500px]
          pointer-events-none
          select-none
          z-0
        "
      />

      <FadeUp delay={0.1}>
        <h2 className="text-3xl md:text-5xl tracking-[0.2em] text-center mb-4 font-bold">
          C O N T A C T
        </h2>
        <p className="text-white mb-16">You can contact me thru this way!</p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="flex justify-center gap-5 md:gap-10">
          <SocialLink
            target="_blank"
            href="https://github.com/Shifani16"
            icon={<Github size={32} />}
          />
          <SocialLink target="_blank" href="https://www.linkedin.com/in/nursyifa-devani-effendy/" icon={<Linkedin size={32} />} />
          <SocialLink target="_blank" href="mailto:nursyifadevani@gmail.com" icon={<Mail size={30} />} />
          <SocialLink target="_blank" href="https://www.instagram.com/shifani16_/" icon={<Instagram size={32} />} />
        </div>
      </FadeUp>
    </section>
  );
}

function SocialLink({
  target,
  href,
  icon,
}: {
  target: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      target={target}
      href={href}
      className="w-16 h-16 flex items-center justify-center rounded-full bg-dark-lighter border border-gray-700 text-gray-400 hover:text-dark hover:bg-yellow-primary hover:border-accent transition-all duration-300 hover:-translate-y-2"
    >
      {icon}
    </a>
  );
}
