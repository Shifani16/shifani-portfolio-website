import FadeUp from "../anim/FadeUp";
import { skills } from "../data/skills";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-8 text-center bg-blue-primary"
    >
      {/* Laurel decoration */}
      <img
        src="/images/laurel_2.png"
        alt="laurel-decoration_2"
        className="absolute right-0 -top-10 w-[400px] md:w-[450px] lg:w-[500px] pointer-events-none select-none z-0"
      />

      <FadeUp delay={0.1}>
        <h2 className="text-4xl md:text-5xl tracking-[0.2em] text-center mb-4 font-bold relative z-10">
          S K I L L S
        </h2>
        <p className="text-white mb-16 relative z-10">
          I'm capable of doing this!
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 max-w-5xl mx-auto relative z-10">
          {skills.map((s) => (
            <SkillIcon key={s.label} icon={s.icon} label={s.label} />
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

function SkillIcon({ icon, label }: { icon: string; label: string }) {
  const IconComponent =
    (FaIcons as any)[icon] || (SiIcons as any)[icon];

  return (
    <div className="flex flex-col items-center gap-4 text-gray-400 hover:text-yellow-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
      <div className="text-5xl group-hover:scale-110 transition-transform">
        {IconComponent ? <IconComponent /> : "?"}
      </div>
      <span className="font-medium tracking-wide text-sm">{label}</span>
    </div>
  );
}
