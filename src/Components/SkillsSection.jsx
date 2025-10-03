import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", Level: 95, category: "frontend" },
  { name: "CSS", Level: 95, category: "frontend" },
  { name: "JavaScript", Level: 70, category: "frontend" },
  { name: "React", Level: 55, category: "frontend" },
  { name: "Tailwind", Level: 90, category: "frontend" },
  { name: "WordPress", Level: 85, category: "frontend" },
  { name: "TypeScript", Level: 75, category: "frontend" },
  { name: "Redux", Level: 70, category: "frontend" },
  { name: "Next.js", Level: 60, category: "frontend" },

  // Tools
  { name: "Figma", Level: 92, category: "tools" },
  { name: "Git/GitHub", Level: 90, category: "tools" },
  { name: "VS Code", Level: 95, category: "tools" },
  { name: "Photoshop", Level: 80, category: "tools" },
  { name: "Postman", Level: 85, category: "tools" },
];

const categories = ["all", "frontend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-white",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 hover:bg-secondary cursor-pointer"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-white/10 backdrop-blur-3xl p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-white font-semibold text-lg">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.Level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-white text-sm text-muted-foreground">
                  {skill.Level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
