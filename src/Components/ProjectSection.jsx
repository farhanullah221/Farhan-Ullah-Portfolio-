import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful Landing page using React and Tailwind.",
    Image: "/Projects/proj.png",
    tags: ["React", "tailwind", "Supabase"],
    demoURL: "#",
    githubUL: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interface analytics dashboard with data visualization and filtering capibalities.",
    Image: "/Projects/proj2.jpg",
    tags: ["Typescript ", "D3.js", "Next.js"],
    demoURL: "#",
    githubUL: "#",
  },
  {
    id: 3,
    title: "Ecommerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    Image: "/Projects/proj3.jpg",
    tags: ["React", "Node.js", "Stripe"],
    demoURL: "#",
    githubUL: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className=" container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white ">
          Featured
          <span className=" text-primary ">Projects</span>
        </h2>
        <p className=" text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-white">
          Here are some of my recent projects, Each project was carefully
          crafted with attention too detail, performance, and user experience.
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, key) => (
            <div
              key={key}
              className=" group text-white rounded-lg overflow-hidden shadow-xs card-hover  bg-white/15 backdrop-blur-3xl"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.Image}
                  alt={project.title}
                  className="  w-full h-full  object-cover transition-transform duration-500 group-scale-110"
                />
              </div>
              <div className=" p-6 ">
                <div className=" flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="bg-white/5 backdrop-blur-3xl px-3 py-2 text-xs font-medium border rounded-full text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className=" text-muted-foreground text-sm mb-4  ">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className=" hover:text-primary transition-colors duration-300 text-white"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUL}
                      target="_blank"
                      className=" text-white hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" text-white text-center mt-12">
          <a
            href="https://github.com/farhanullah221"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
