import FadeUp from "../anim/FadeUp";
import { skills } from "../data/skills";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function Skills() {
  return (
    <section id="skills" className="relative py-5 px-5 md:px-20">
      <FadeUp delay={0.1}>
        <div className="flex flex-col md:flex-row justify-between pb-2">
          <div className="border-b border-neutral-300 w-3/4 flex items-end">
            <SparklesText sparklesCount={5}>
              <h1 className="font-mono tracking-widest w-fit text-4xl leading-none">
                SKILLS
              </h1>
            </SparklesText>
          </div>

          <p className="text-neutral-500 text-xs mt-3 md:mt-15 font-mono ">
            I'm capable of doing this!
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 max-w-5xl mx-auto relative z-10">
          {skills.map((s) => (
            <SkillIcon key={s.label} icon={s.icon} label={s.label} />
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

function SkillIcon({ icon, label }: { icon: string; label: string }) {
  const IconComponent = (FaIcons as any)[icon] || (SiIcons as any)[icon];

  return (
    <div className="flex flex-col items-center gap-4 text-gray-400 hover:text-yellow-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
      <div className="text-5xl group-hover:scale-110 transition-transform">
        {IconComponent ? <IconComponent /> : "?"}
      </div>
      <span className="font-medium tracking-wide text-sm">{label}</span>
    </div>
  );
}
