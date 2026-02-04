import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Mail, Phone, Linkedin, Twitter, Github, Dribbble, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Canada',
    href: '#',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sandeshgorathoki09@gmail.com',
    href: 'mailto:sandeshgorathoki09@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (226) 926-0845',
    href: 'tel:+12269260845',
  },
];

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sandesh-gorathoki-391676276/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/sandeshgorathoki' },
  { icon: Dribbble, label: 'Dribbble', href: 'https://dribbble.com' },
];

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const templateParams = {
        to_email: 'sandeshgorathoki09@gmail.com',
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams
      );

      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Email send error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white dark:bg-dark-text"
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
            Contact
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-dark-text dark:text-white mb-6 transition-all duration-500 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Let's <span className="text-blue-primary">Connect</span>
          </h2>
          <p
            className={`text-lg text-grey dark:text-grey-light transition-all duration-500 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-600 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-bg-grey dark:bg-dark-grey/30 rounded-xl hover:bg-blue-primary/10 dark:hover:bg-blue-primary/10 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-primary/10 dark:bg-blue-primary/20 rounded-lg flex items-center justify-center group-hover:bg-blue-primary transition-colors duration-200">
                    <item.icon className="w-5 h-5 text-blue-primary group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="text-sm text-grey dark:text-grey-light">
                      {item.label}
                    </div>
                    <div className="font-medium text-dark-text dark:text-white">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-display font-medium text-dark-text dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-bg-grey dark:bg-dark-grey/30 rounded-lg flex items-center justify-center text-grey hover:bg-blue-primary hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-gradient-to-br from-blue-primary/10 to-blue-light/10 dark:from-blue-primary/20 dark:to-blue-light/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-dark-text dark:text-white">
                  Available for Work
                </span>
              </div>
              <p className="text-sm text-grey dark:text-grey-light">
                I'm currently taking on new projects. Let's discuss how I can help
                bring your ideas to life.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-600 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-bg-grey dark:bg-dark-grey/30 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-dark-text dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-grey dark:text-grey-light">
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-white dark:bg-dark-text border-grey/20 dark:border-white/10 focus:border-blue-primary focus:ring-blue-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-white dark:bg-dark-text border-grey/20 dark:border-white/10 focus:border-blue-primary focus:ring-blue-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-white dark:bg-dark-text border-grey/20 dark:border-white/10 focus:border-blue-primary focus:ring-blue-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white dark:bg-dark-text border-grey/20 dark:border-white/10 focus:border-blue-primary focus:ring-blue-primary/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
