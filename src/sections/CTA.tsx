import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Mail } from 'lucide-react';

export function CTA() {
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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/40 via-bg-grey to-yellow/30 dark:from-blue-primary/20 dark:via-dark-grey dark:to-blue-dark/20 animate-gradient-shift" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-[10%] w-20 h-20 bg-yellow/40 rounded-lg rotate-12 animate-float"
          style={{ animationDuration: '8s' }}
        />
        <div
          className="absolute bottom-20 right-[15%] w-16 h-16 bg-pink/40 rounded-full animate-float-slow"
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/3 right-[10%] w-12 h-12 bg-cyan/50 rounded-lg -rotate-12 animate-float"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/3 left-[15%] w-10 h-10 bg-blue-primary/20 rounded-full animate-float-slow"
          style={{ animationDuration: '12s', animationDelay: '3s' }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-600 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-dark-text dark:text-white mb-6 leading-tight">
                Ready to Start Your{' '}
                <span className="text-blue-primary">Project?</span>
              </h2>
              <p className="text-lg text-grey dark:text-grey-light max-w-lg">
                Let's create something amazing together. Get in touch and let's
                discuss how I can help bring your vision to life.
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-600 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <button onClick={scrollToContact} className="btn-primary group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-blue-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Calendar className="mr-2 w-4 h-4" />
                Book a Call
              </a>
            </div>

            {/* Contact Info */}
            <div
              className={`flex flex-wrap gap-6 pt-4 transition-all duration-600 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="mailto:hello@portfolio.com"
                className="flex items-center gap-2 text-grey dark:text-grey-light hover:text-blue-primary transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                hello@portfolio.com
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            className={`relative transition-all duration-600 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/20 to-blue-light/10 rounded-3xl blur-3xl scale-110 animate-pulse-glow" />

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/cta-image.jpg"
                  alt="Let's work together"
                  className="w-full h-auto object-cover"
                />

                {/* Floating Card */}
                <div
                  className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-dark-text/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg animate-float"
                  style={{ animationDuration: '5s' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                      <div className="font-semibold text-dark-text dark:text-white">
                        Quick Response Time
                      </div>
                      <div className="text-sm text-grey dark:text-grey-light">
                        I typically reply within 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
