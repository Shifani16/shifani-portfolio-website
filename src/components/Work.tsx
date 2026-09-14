import { useState } from "react";
import { projects } from "../data/projects";
import FadeUp from "../anim/FadeUp";
import { SparklesText } from "@/components/ui/sparkles-text";

const tabs = ["Website", "Mobile", "Data", "Misc."] as const;

export default function Work() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Website");

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab,
  );

  return (
    <section id="work" className="relative py-5 px-5 md:px-20">
      <FadeUp delay={0.1}>
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row justify-between pb-2">
            <div className="border-b border-neutral-300 w-3/4 flex items-end">
              <SparklesText sparklesCount={5}>
                <h1 className="font-mono tracking-widest w-fit text-4xl leading-none">
                  WORK
                </h1>
              </SparklesText>
            </div>

            <p className="text-neutral-500 text-xs mt-3 md:mt-15 font-mono ">Here what I've worked on!</p>
          </div>

          {/* Responsive Tabs */}
          <div className="mt-4 md:mt-8">
            <div className="font-mono ">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                  rounded-md px-4 py-1 md:px-8 md:py-2 text-xs md:text-sm font-semibold transition-all cursor-pointer
                  ${
                    activeTab === tab
                      ? "bg-pink-600 text-neutral-100 shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }
                  ${
                    i !== tabs.length
                      ? "border-r-2 border-neutral-300/60"
                      : ""
                  }
                `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>

      <div className="relative max-w-6xl mx-auto">
        <div className="space-y-10 font-mono">
          {filteredProjects.map((project, index) => (
            <FadeUp key={project.id} delay={0.15 * index}>
              {/* Forced standard row layout: text left, image right */}
              <div className="flex flex-col md:flex-row gap-5 md:gap-50 items-center border-b-2 border-neutral-300 py-5">
                {/* Text */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-neutral-600 mb-1">
                    {project.title}
                  </h3>
                  <p className=" text-neutral-400 text-xs mb-4 uppercase tracking-wide">
                    {project.date}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="md:w-1/3">
                  <div className="rounded-lg shadow-md transition">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded opacity-90 hover:opacity-100 transition"
                    />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}