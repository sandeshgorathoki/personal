import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Redesign',
    category: 'Web Design & Development',
    description:
      'Complete overhaul of an online store resulting in 150% increase in conversions and 40% reduction in cart abandonment.',
    image: '/project-ecommerce.jpg',
    tags: ['React', 'Next.js', 'Stripe', 'Tailwind'],
    stats: { conversion: '+150%', traffic: '+80%' },
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    category: 'Web Application',
    description:
      'Intuitive analytics platform for enterprise clients with real-time data visualization and customizable reports.',
    image: '/project-dashboard.jpg',
    tags: ['TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    stats: { users: '10K+', satisfaction: '98%' },
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Fitness Mobile App',
    category: 'Mobile Design',
    description:
      'Award-winning fitness tracking experience with personalized workout plans and social features.',
    image: '/project-mobile-app.jpg',
    tags: ['React Native', 'Firebase', 'HealthKit'],
    stats: { downloads: '50K+', rating: '4.9★' },
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'TechSphere Branding',
    category: 'Brand Identity',
    description:
      'Complete visual identity system for a tech startup including logo, guidelines, and marketing materials.',
    image: '/project-branding.jpg',
    tags: ['Branding', 'Figma', 'Illustrator'],
    stats: { recognition: '+200%', engagement: '+120%' },
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white dark:bg-dark-text"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span
              className={`section-label inline-block mb-4 transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Portfolio
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-dark-text dark:text-white mb-4 transition-all duration-500 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Featured <span className="text-blue-primary">Projects</span>
            </h2>
            <p
              className={`text-lg text-grey dark:text-grey-light transition-all duration-500 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              A selection of my recent work across web design, development, and
              branding.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`btn-secondary self-start lg:self-auto transition-all duration-500 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-bg-grey dark:bg-dark-grey/30 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-dark-text/80 via-dark-text/40 to-transparent transition-opacity duration-300 ${
                    activeProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Quick Actions */}
                <div
                  className={`absolute bottom-4 left-4 right-4 flex gap-3 transition-all duration-300 ${
                    activeProject === project.id
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-dark-text rounded-lg text-sm font-medium hover:bg-blue-primary hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white hover:text-dark-text transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="text-xs font-medium text-blue-primary uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-display font-medium text-dark-text dark:text-white mt-2 mb-3 group-hover:text-blue-primary transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-grey dark:text-grey-light text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-primary/10 dark:bg-blue-primary/20 text-blue-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-6 pt-4 border-t border-grey/10 dark:border-white/10">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-lg font-semibold text-dark-text dark:text-white">
                        {value}
                      </div>
                      <div className="text-xs text-grey dark:text-grey-light capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`mt-16 text-center transition-all duration-600 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-grey dark:text-grey-light mb-4">
            Want to see more of my work?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-blue-primary font-medium hover:text-blue-dark transition-colors duration-200"
          >
            Let's discuss your project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
