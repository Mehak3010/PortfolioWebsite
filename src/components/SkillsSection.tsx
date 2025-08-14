import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cloud, Database, Palette, Brain } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Java", "C", "C++", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Web Development",
      icon: <Palette className="w-6 h-6" />,
      skills: ["React", "Node.js", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Google Cloud Platform", "Microsoft Azure"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Artificial Intelligence", "Machine Learning", "Python"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Technical <span className="bg-gradient-neon bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-neon hover:shadow-glow transition-smooth border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-neon text-primary-foreground shadow-glow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">Always Learning</h4>
                <p className="opacity-90">
                  Passionate about exploring new technologies and frameworks to stay current with industry trends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;