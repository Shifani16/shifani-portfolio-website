import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import FadeUp from "../anim/FadeUp";

const tabs = ["Website", "Mobile", "Data", "Misc."] as const;

export default function Work() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Website");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  const VISIBLE_LIMIT = 2;
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, VISIBLE_LIMIT);

  useEffect(() => {
    setShowAll(false);
  }, [activeTab]);

  return (
    <section id="work" className="py-16 px-10 md:px-20">
      {/* Header */}
      <FadeUp delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-[0.2em] mb-4 font-bold">
            W O R K
          </h2>
          <p className="text-white">Here what I've worked on!</p>

          {/* Responsive Tabs */}
          <div className="mt-8 inline-block">
            <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-yellow-primary rounded overflow-hidden">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                  px-8 py-2 text-sm font-semibold transition-all cursor-pointer
                  ${
                    activeTab === tab
                      ? "bg-yellow-primary text-blue-primary shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }
                  ${
                    i !== tabs.length - 1
                      ? "border-r-2 border-yellow-primary/60"
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
        <div
          className={`overflow-hidden transition-all duration-500 ${
            showAll ? "max-h-full" : "max-h-[900px]"
          }`}
        >
          <div className="space-y-10">
            {visibleProjects.map((project, index) => (
              <FadeUp key={project.id} delay={0.15 * index}>
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-10 items-center`}
                >
                  {/* Text */}
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-accent text-xs mb-4 uppercase tracking-wide">
                      {project.date}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="md:w-1/2">
                    <div className="bg-dark-lighter p-3 rounded-lg shadow-xl border border-gray-800 hover:border-accent/50 transition">
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

        {!showAll && filteredProjects.length > VISIBLE_LIMIT && (
          <div
            className="absolute bottom-0 left-0 right-0 h-40
              bg-linear-to-t from-blue-primary to-transparent
              pointer-events-none"
          />
        )}
      </div>

      {/* Show More Button */}
      {!showAll && filteredProjects.length > VISIBLE_LIMIT && (
        <FadeUp delay={0.3}>
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="bg-yellow-primary text-blue-primary font-bold py-3 px-10 rounded shadow-lg hover:bg-yellow-dark transition-colors cursor-pointer"
            >
              Selengkapnya
            </button>
          </div>
        </FadeUp>
      )}
    </section>
  );
}
