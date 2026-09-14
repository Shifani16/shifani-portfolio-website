import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import FadeUp from "../anim/FadeUp";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function Contact() {
  return (
    <section id="contact" className="relative py-5 px-5 md:px-20">
      <FadeUp delay={0.1}>
        <div className="flex flex-col md:flex-row justify-between pb-2">
          <div className="border-b border-neutral-300 w-3/4 flex items-end">
            <SparklesText sparklesCount={5}>
              <h1 className="font-mono tracking-widest w-fit text-4xl leading-none">
                CONTACT
              </h1>
            </SparklesText>
          </div>

          <p className="text-neutral-500 text-xs mt-3 md:mt-15 font-mono ">
            You can reach me thru this way!
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-12">
          <SocialLink
            target="_blank"
            href="https://github.com/Shifani16"
            icon={<Github size={30} />}
            text="GitHub"
          />
          <SocialLink
            target="_blank"
            href="https://www.linkedin.com/in/nursyifa-devani-effendy/"
            icon={<Linkedin size={30} />}
            text="LinkedIn"
          />
          <SocialLink
            target="_blank"
            href="mailto:nursyifadevani@gmail.com"
            icon={<Mail size={28} />}
            text="Email"
          />
          <SocialLink
            target="_blank"
            href="https://www.instagram.com/shifani16_/"
            icon={<Instagram size={30} />}
            text="Instagram"
          />
        </div>
      </FadeUp>
    </section>
  );
}

function SocialLink({
  target,
  href,
  icon,
  text,
}: {
  target: string;
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="mt-10 md:mt-30 flex flex-col items-center gap-3 group">
      <a
        target={target}
        href={href}
        className="w-16 h-16 flex items-center justify-center rounded-full bg-dark-lighter border border-gray-700 text-gray-400 group-hover:text-blue-primary group-hover:bg-pink-300 group-hover:border-accent transition-all duration-300 hover:-translate-y-2 shadow-md"
      >
        {icon}
      </a>
      <p className="font-mono text-xs text-neutral-500 group-hover:text-pink-500 transition-colors uppercase tracking-wider">
        {text}
      </p>
    </div>
  );
}