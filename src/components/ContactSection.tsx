import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, CloudCog } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xgvzqaer", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "mehak3010arora@gmail.com", href: "mailto:mehak3010arora@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8595729323", href: "tel:+918595729323" },
    { icon: MapPin, label: "Location", value: "New Delhi, India", href: "#" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Mehak3010", color: "hover:text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mehak-arora-89b436292/", color: "hover:text-blue-600" },
    { icon: CloudCog, label: "Google Cloud", href: "https://www.cloudskillsboost.google/public_profiles/0493c6c8-b642-4882-9317-c8aee1efb84d", color: "hover:text-orange-500" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="bg-gradient-neon bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work together.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-neon border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" name="subject" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full shadow-neon hover:shadow-glow transition-smooth bg-gradient-primary hover:bg-gradient-neon">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-neon border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>
                    Feel free to reach out through any of these channels.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center p-3 rounded-lg hover:bg-muted transition-smooth group"
                    >
                      <info.icon className="w-5 h-5 text-primary mr-4" />
                      <div>
                        <p className="font-medium group-hover:text-primary transition-smooth">
                          {info.label}
                        </p>
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-neon text-primary-foreground shadow-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <p className="opacity-90 mb-6">
                    Follow me on social media for updates on my latest projects and thoughts on technology.
                  </p>

                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-smooth"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
