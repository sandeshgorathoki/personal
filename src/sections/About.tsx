import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Rocket, Lightbulb, Users, Zap } from 'lucide-react';

const skills = [
  { name: 'React & Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'UI/UX Design', level: 90 },
  { name: 'Figma', level: 88 },
];

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building fast, scalable web applications',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful user experiences',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed and conversion',
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Data-driven digital solutions',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with clients',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Latest tech and best practices',
  },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white dark:bg-dark-text"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`section-label inline-block mb-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            About Me
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-dark-text dark:text-white mb-6 transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Passionate About Creating{' '}
            <span className="text-blue-primary">Digital Excellence</span>
          </h2>
          <p
            className={`text-lg text-grey dark:text-grey-light transition-all duration-500 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            I'm a full-stack developer and designer with over 5 years of experience
            building digital products that make a difference.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - About Text */}
          <div
            className={`space-y-6 transition-all duration-600 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-grey dark:text-grey-light text-lg leading-relaxed">
                Hello! I'm a creative developer based in San Francisco, passionate about
                crafting beautiful and functional digital experiences. With a background
                in both design and development, I bring a unique perspective to every
                project.
              </p>
              <p className="text-grey dark:text-grey-light leading-relaxed">
                My journey began 5 years ago when I built my first website. Since then,
                I've had the privilege of working with startups, agencies, and Fortune
                500 companies, helping them bring their digital visions to life.
              </p>
              <p className="text-grey dark:text-grey-light leading-relaxed">
                I believe in clean code, user-centered design, and continuous learning.
                Every project is an opportunity to push boundaries and create something
                meaningful.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl font-display font-medium text-dark-text dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-500 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-dark-text dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-grey dark:text-grey-light">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-grey/10 dark:bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-primary to-blue-light rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${500 + index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`p-6 bg-bg-grey dark:bg-white/5 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover group ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-primary/10 dark:bg-blue-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-blue-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-display font-medium text-dark-text dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-grey dark:text-grey-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
