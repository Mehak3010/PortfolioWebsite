import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, CloudCog } from 'lucide-react';
import TypeWriter from './TypeWriter';
import pythonLogo from '@/assets/python-logo.svg';

const HeroSection = () => {
  const roles = [
    { text: "💻 Full Stack Web Developer", hasImage: false },
    { text: "🤖 AI/ML Enthusiast", hasImage: false }, 
    { text: "Python Developer", hasImage: true, image: pythonLogo },
    { text: "🎨 UI/UX Designer", hasImage: false }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Mehak3010" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mehak-arora-89b436292/" },
    { icon: CloudCog, label: "Google Cloud", href: "https://www.cloudskillsboost.google/public_profiles/0493c6c8-b642-4882-9317-c8aee1efb84d" }
  ];

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-subtle">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Mehak Arora
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <TypeWriter 
              texts={roles}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
            />
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Passionate about creating beautiful, functional web applications that solve real-world problems and deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              onClick={scrollToAbout}
              className="shadow-neon hover:shadow-glow transition-smooth bg-gradient-primary hover:bg-gradient-neon"
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="transition-smooth"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={scrollToAbout}
          className="rounded-full"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;