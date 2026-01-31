import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: '/avatar-sarah.jpg',
    content:
      'Exceptional work that exceeded our expectations. The attention to detail is remarkable. Our new website has significantly improved our online presence and lead generation.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'DesignHub',
    image: '/avatar-michael.jpg',
    content:
      'A true professional who delivers on time and on budget. The communication throughout the project was excellent, and the final result speaks for itself. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Marketing Director',
    company: 'GrowthCo',
    image: '/avatar-emily.jpg',
    content:
      'Transformed our online presence completely. Our conversions have never been higher, and the user feedback has been overwhelmingly positive. A game-changer for our business.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CTO',
    company: 'InnovateLabs',
    image: '/avatar-david.jpg',
    content:
      'Technical expertise combined with creative vision. A rare find in this industry. The codebase is clean, well-documented, and scalable. Exactly what we needed.',
    rating: 5,
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-bg-grey dark:bg-dark-grey/30 overflow-hidden"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`section-label inline-block mb-4 transition-all duration-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Testimonials
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-dark-text dark:text-white mb-6 transition-all duration-500 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            What Clients <span className="text-blue-primary">Say</span>
          </h2>
          <p
            className={`text-lg text-grey dark:text-grey-light transition-all duration-500 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Don't just take my word for it. Here's what my clients have to say
            about working together.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative transition-all duration-600 delay-300 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Card */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-text rounded-3xl shadow-card p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-blue-primary rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Testimonial Content */}
              <div className="pt-4">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow text-yellow"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl lg:text-2xl text-dark-text dark:text-white leading-relaxed mb-8 font-display">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-dark-text dark:text-white">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-sm text-grey dark:text-grey-light">
                      {testimonials[activeIndex].role},{' '}
                      {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Prev Button */}
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full bg-white dark:bg-dark-text shadow-card flex items-center justify-center text-grey hover:text-blue-primary hover:shadow-card-hover transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-blue-primary w-8'
                        : 'bg-grey/30 hover:bg-grey/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-white dark:bg-dark-text shadow-card flex items-center justify-center text-grey hover:text-blue-primary hover:shadow-card-hover transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Side Cards (Desktop) */}
          <div className="hidden lg:block">
            {/* Previous Card Preview */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-80 opacity-30 scale-75 pointer-events-none"
              style={{
                transform: `translate(-60%, -50%) perspective(1000px) rotateY(25deg) scale(0.8)`,
              }}
            >
              <div className="bg-white dark:bg-dark-text rounded-2xl shadow-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={
                      testimonials[
                        (activeIndex - 1 + testimonials.length) % testimonials.length
                      ].image
                    }
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-sm text-dark-text dark:text-white">
                      {
                        testimonials[
                          (activeIndex - 1 + testimonials.length) % testimonials.length
                        ].name
                      }
                    </div>
                  </div>
                </div>
                <p className="text-sm text-grey dark:text-grey-light line-clamp-3">
                  "
                  {
                    testimonials[
                      (activeIndex - 1 + testimonials.length) % testimonials.length
                    ].content
                  }
                  "
                </p>
              </div>
            </div>

            {/* Next Card Preview */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-80 opacity-30 scale-75 pointer-events-none"
              style={{
                transform: `translate(60%, -50%) perspective(1000px) rotateY(-25deg) scale(0.8)`,
              }}
            >
              <div className="bg-white dark:bg-dark-text rounded-2xl shadow-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={
                      testimonials[(activeIndex + 1) % testimonials.length].image
                    }
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-sm text-dark-text dark:text-white">
                      {testimonials[(activeIndex + 1) % testimonials.length].name}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-grey dark:text-grey-light line-clamp-3">
                  "
                  {testimonials[(activeIndex + 1) % testimonials.length].content}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
