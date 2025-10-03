import { Briefcase, Laptop, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-4 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">ME</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-primary-foreground">
              I'm a front-end developer with hands-on experience in HTML, CSS,
              JavaScript, Bootstrap, Tailwind, SASS, and WordPress. Currently,
              I'm learning React to build more dynamic and interactive web
              applications.
            </p>
            <p className="text-primary-foreground">
              I am passionate about creating elegant solutions to complex
              problems, and I am constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="Farhan Ullah CV (2).pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:primery/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="bg-white/10 backdrop-blur-3xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full backdrop-blur-xl">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left text-white">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p className="font-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white/10 backdrop-blur-3xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full backdrop-blur-xl">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left text-white">
                  <h4 className="text-semibold text-lg">UI/UX Design</h4>
                  <p className="font-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Internship */}
            <div className="bg-white/10 backdrop-blur-3xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full backdrop-blur-xl">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left text-white">
                  <h4 className="text-semibold text-lg">
                    Internship at Intelgency IT Solutions
                  </h4>
                  <p className="font-muted-foreground">
                    Completed a 2-month hands-on internship, gaining practical
                    experience in web development, teamwork, and real-world
                    project execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
