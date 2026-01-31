import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const scrollY = window.scrollY;
      const parallaxValue = scrollY * 0.3;
      contentRef.current.style.transform = `translateY(${parallaxValue}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-bg-grey to-cyan/30 dark:from-dark-text dark:via-dark-grey dark:to-dark-text"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orb */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-primary/20 to-blue-light/10 blur-3xl animate-float-slow"
          style={{ animationDuration: '20s' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-yellow/30 to-pink/20 blur-3xl animate-float"
          style={{ animationDuration: '15s', animationDelay: '2s' }}
        />

        {/* Floating Shapes */}
        <div
          className="absolute top-1/4 left-[10%] w-16 h-16 bg-yellow rounded-lg rotate-12 animate-float"
          style={{ animationDuration: '8s' }}
        />
        <div
          className="absolute top-1/3 right-[15%] w-12 h-12 bg-pink rounded-full animate-float-slow"
          style={{ animationDuration: '10s', animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 left-[20%] w-8 h-8 bg-cyan rounded-lg -rotate-12 animate-float"
          style={{ animationDuration: '6s', animationDelay: '3s' }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-20">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-primary/10 rounded-full animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <Sparkles className="w-4 h-4 text-blue-primary" />
              <span className="text-sm font-medium text-blue-primary">
                Available for New Projects
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-dark-text dark:text-white leading-tight animate-slide-up"
                style={{ animationDelay: '0.4s' }}
              >
                Crafting Digital
              </h1>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium leading-tight animate-slide-up"
                style={{ animationDelay: '0.52s' }}
              >
                <span className="bg-gradient-to-r from-blue-primary to-blue-light bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl text-grey dark:text-grey-light max-w-lg animate-slide-up"
              style={{ animationDelay: '0.8s' }}
            >
              Premium design and development that transforms your vision into
              reality. I create stunning websites that convert visitors into
              customers.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-scale-in"
              style={{ animationDelay: '1s' }}
            >
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#work');
                }}
                className="btn-primary group"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="btn-secondary"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-8 pt-4 animate-fade-in"
              style={{ animationDelay: '1.2s' }}
            >
              <div>
                <div className="text-3xl font-display font-semibold text-dark-text dark:text-white">
                  50+
                </div>
                <div className="text-sm text-grey dark:text-grey-light">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-3xl font-display font-semibold text-dark-text dark:text-white">
                  30+
                </div>
                <div className="text-sm text-grey dark:text-grey-light">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-3xl font-display font-semibold text-dark-text dark:text-white">
                  5+
                </div>
                <div className="text-sm text-grey dark:text-grey-light">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className="relative animate-slide-in-right"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/30 to-blue-light/20 rounded-full blur-3xl scale-110 animate-pulse-glow" />

              {/* Image Container */}
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-primary to-blue-light rounded-full opacity-10" />
                <img
                  src="/hero-portrait.png"
                  alt="Portrait"
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-dark-grey"
                />

                {/* Floating Badge */}
                <div
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-grey rounded-2xl shadow-xl p-4 animate-float"
                  style={{ animationDuration: '5s' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-dark-text dark:text-white">
                        Verified Pro
                      </div>
                      <div className="text-xs text-grey dark:text-grey-light">
                        Top Rated Freelancer
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Badge */}
                <div
                  className="absolute -top-4 -left-4 bg-white dark:bg-dark-grey rounded-2xl shadow-xl p-3 animate-float"
                  style={{ animationDuration: '7s', animationDelay: '1s' }}
                >
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      R
                    </div>
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      TS
                    </div>
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      N
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-dark-text to-transparent" />
    </section>
  );
}
