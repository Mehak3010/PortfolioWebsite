import { Card } from '@/components/ui/card';
import { Github, Linkedin, CloudCog } from 'lucide-react';
import mehakProfile from '../assets/ProfilePicture.png';
// Using the uploaded profile image directly

const AboutSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Mehak3010" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mehak-arora-89b436292/" },
    { icon: CloudCog, label: "Google Cloud", href: "https://www.cloudskillsboost.google/public_profiles/0493c6c8-b642-4882-9317-c8aee1efb84d" }
  ];
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="bg-gradient-neon bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate BCA student and aspiring full-stack developer specializing in modern web technologies.
                I love creating digital solutions and turning ideas into beautiful, functional applications.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently exploring AI/ML, Python development, Full Stack Web Development and UI/UX design while building projects
                that solve real-world problems.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="p-4 text-center shadow-neon hover:shadow-glow transition-smooth border-primary/20">
                  <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">10+</h3>
                  <p className="text-muted-foreground">Projects Built</p>
                </Card>
                <Card className="p-4 text-center shadow-neon hover:shadow-glow transition-smooth border-accent/20">
                  <h3 className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent">4+</h3>
                  <p className="text-muted-foreground">Years Learning</p>
                </Card>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-neon rounded-full blur-xl opacity-30"></div>
                <img
                  src={mehakProfile}
                  alt="Mehak Arora"
                  className="relative w-45 h-45 object-cover rounded-full shadow-elegant"
                />
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth shadow-md hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;