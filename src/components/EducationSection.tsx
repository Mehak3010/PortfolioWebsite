import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: "Jagannath International Management School, Vasant Kunj",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2023 - 2026",
      description: "Affiliated with Guru Govind Singh Indraprastha University. Currently pursuing comprehensive study in computer applications, programming, and software development.",
      achievements: ["Current Student", "Active Learner", "Tech Enthusiast"]
    }
  ];

  const certifications = [
    { name: "Software Engineering Job Simulation", issuer: "Goldman Sachs", year: "2025" },
    { name: "Microsoft Asia AI Odyssey", issuer: "Microsoft", year: "2024" },
    { name: "AI for Youth Virtual Symposium", issuer: "Intel", year: "2024" },
    { name: "The Fundamentals of Digital Marketing", issuer: "HubSpot Academy", year: "2024" },
    { name: "Awesome Day Online Conference", issuer: "Amazon Web Services", year: "2024" },
    { name: "Smart India Hackathon", issuer: "Ministry Of Education", year: "2023,2024" }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Education & <span className="bg-gradient-neon bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="flex flex-col gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="shadow-neon hover:shadow-glow transition-smooth border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {edu.institution} • {edu.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <Badge key={achIndex} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="shadow-neon hover:shadow-glow transition-smooth border-accent/10 max-w-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg mb-1">{cert.name}</h4>
                          <p className="text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <Badge variant="secondary">{cert.year}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="mt-6 bg-gradient-neon text-primary-foreground shadow-glow">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">Continuous Learning</h4>
                  <p className="opacity-90">
                    I'm always expanding my skill set through online courses, workshops, and hands-on projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;