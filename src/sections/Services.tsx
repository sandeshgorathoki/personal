import { useEffect, useRef, useState } from 'react';
import {
  Globe,
  ShoppingCart,
  Bot,
  Search,
  Wrench,
  MessageSquare,
  ArrowRight,
  Check,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Custom, responsive websites built with modern technologies that load fast and rank well on search engines.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Loading',
      'CMS Integration',
    ],
    price: 'From $2,500',
    color: 'blue',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Setup',
    description:
      'Complete online store solutions that drive sales and provide seamless shopping experiences for your customers.',
    features: [
      'Payment Integration',
      'Inventory Management',
      'User Accounts',
      'Analytics Dashboard',
    ],
    price: 'From $4,000',
    color: 'green',
  },
  {
    icon: Bot,
    title: 'AI Tool Integration',
    description:
      'Leverage the power of artificial intelligence to automate tasks and enhance user experiences on your platform.',
    features: [
      'Chatbot Integration',
      'Content Generation',
      'Data Analysis',
      'Automation Workflows',
    ],
    price: 'From $3,000',
    color: 'purple',
  },
  {
    icon: Search,
    title: 'SEO & Optimization',
    description:
      'Improve your search rankings and drive organic traffic with comprehensive SEO strategies and technical optimization.',
    features: [
      'Technical SEO Audit',
      'Keyword Research',
      'Content Strategy',
      'Performance Tuning',
    ],
    price: 'From $1,500',
    color: 'orange',
  },
  {
    icon: Wrench,
    title: 'Custom Web Solutions',
    description:
      'Bespoke web applications tailored to your specific business needs, from dashboards to complex workflows.',
    features: [
      'Custom Features',
      'API Integration',
      'Database Design',
      'Scalable Architecture',
    ],
    price: 'From $5,000',
    color: 'pink',
  },
  {
    icon: MessageSquare,
    title: 'Consulting',
    description:
      'Strategic guidance to help you make informed decisions about your digital presence and technology stack.',
    features: [
      'Technology Review',
      'Growth Strategy',
      'Best Practices',
      'Ongoing Support',
    ],
    price: 'From $150/hr',
    color: 'cyan',
  },
];

const colorClasses: Record<string, { bg: string; hover: string; text: string }> =
  {
    blue: { bg: 'bg-blue-500/10', hover: 'bg-blue-500', text: 'text-blue-500' },
    green: {
      bg: 'bg-green-500/10',
      hover: 'bg-green-500',
      text: 'text-green-500',
    },
    purple: {
      bg: 'bg-purple-500/10',
      hover: 'bg-purple-500',
      text: 'text-purple-500',
    },
    orange: {
      bg: 'bg-orange-500/10',
      hover: 'bg-orange-500',
      text: 'text-orange-500',
    },
    pink: { bg: 'bg-pink-500/10', hover: 'bg-pink-500', text: 'text-pink-500' },
    cyan: { bg: 'bg-cyan-500/10', hover: 'bg-cyan-500', text: 'text-cyan-500' },
  };

export function Services() {
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
      { threshold: 0.1 }
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
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-bg-grey dark:bg-dark-grey/30"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`section-label inline-block mb-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Services
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-dark-text dark:text-white mb-6 transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            What I Can Do For{' '}
            <span className="text-blue-primary">You</span>
          </h2>
          <p
            className={`text-lg text-grey dark:text-grey-light transition-all duration-500 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Comprehensive digital solutions tailored to your unique needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <div
                key={service.title}
                className={`group bg-white dark:bg-dark-text rounded-2xl p-8 shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-card-hover ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:${colors.hover} transition-colors duration-300`}
                >
                  <service.icon
                    className={`w-7 h-7 ${colors.text} group-hover:text-white transition-colors duration-300`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-medium text-dark-text dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-grey dark:text-grey-light mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-grey dark:text-grey-light"
                    >
                      <Check className="w-4 h-4 text-blue-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-grey/10 dark:border-white/10">
                  <span className="text-lg font-semibold text-dark-text dark:text-white">
                    {service.price}
                  </span>
                  <button
                    onClick={scrollToContact}
                    className="flex items-center gap-2 text-sm font-medium text-blue-primary hover:text-blue-dark transition-colors duration-200 group/btn"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-600 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-grey dark:text-grey-light mb-4">
            Need something custom? Let's discuss your project.
          </p>
          <button onClick={scrollToContact} className="btn-primary">
            Schedule a Free Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
