import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';
import synqImage from '@/assets/synq-chat-interface.png';
import inkwellImage from '@/assets/InkWell.png';
import blacklightImage from '@/assets/black-lightImage.png';

const ProjectsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Black Light AI",
      description: "AI security tool that performs automated web app risk evaluation using coordinated LLM agents.",
      technologies: ["Python", "LangChain", "OpenAI API"],
      image: blacklightImage,
      github: "https://github.com/Mehak3010/black-light-ai",
      live: "#"
    },
    {
      title: "InkWell",
      description: "A modern blog website built with TypeScript for creating and sharing content.",
      technologies: ["TypeScript", "React", "Node.js"],
      image: inkwellImage,
      github: "https://github.com/Mehak3010/InkWell",
      live: "#"
    },
    {
      title: "Synq",
      description: "A modern and elegant real-time chat application with beautiful UI/UX, secure authentication, and Socket.io messaging.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      image: synqImage,
      github: "https://github.com/Mehak3010/Synq",
      live: "#"
    },
    {
      title: "BeatBliss",
      description: "An interactive music application for discovering and playing your favorite tracks with a modern NCS playlist interface.",
      technologies: ["JavaScript", "React", "Audio API"],
      image: "/images/7c6dcf0d-05eb-474f-8a6d-3941bf7439a4.png",
      github: "https://github.com/Mehak3010/BeatBliss",
      live: "#"
    },
    {
      title: "MyTaskList",
      description: "A clean and intuitive task management application with add, complete, and delete functionality for organizing your daily activities.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/4a9b74bd-b530-4d4c-a1b0-4a9347f31f91.png",
      github: "https://github.com/Mehak3010/MyTaskList",
      live: "#"
    },
    {
      title: "Tic-Tac-Toe",
      description: "Classic Tic Tac Toe game built with Python and Pygame for interactive gameplay.",
      technologies: ["Python", "Pygame"],
      image: "/images/a4ec0c18-f558-4915-ab4c-f278c96a962f.png",
      github: "https://github.com/Mehak3010/Tic-Tac-Toe-Project",
      live: "#"
    },
    {
      title: "Zenith Real Estate Price Predictor",
      description: "ML model analyzing Boston Housing dataset to predict housing prices using machine learning algorithms.",
      technologies: ["Python", "Machine Learning", "Jupyter Notebook"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240&fit=crop",
      github: "https://github.com/Mehak3010/Zenith-Real-Estates-Price_Predictor",
      live: "#"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="bg-gradient-neon bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>

          <div className="relative">

            {/* Circular navigation buttons */}
            <Button
              variant="outline"
              onClick={() => scroll('left')}
              className="absolute left-[-20px] md:left-[-30px] lg:left-[-50px] top-1/2 transform -translate-y-1/2 z-10 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background/80 backdrop-blur-md border border-primary/20 shadow-md hover:shadow-lg hover:border-primary/50"
              aria-label="Previous project"
            >
              ←
            </Button>
            <Button
              variant="outline"
              onClick={() => scroll('right')}
              className="absolute right-[-20px] md:right-[-30px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 z-10 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background/80 backdrop-blur-md border border-primary/20 shadow-md hover:shadow-lg hover:border-primary/50"
              aria-label="Next project"
            >
              →
            </Button>

            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <Card key={index} className="min-w-[350px] shadow-neon hover:shadow-glow transition-smooth group border-primary/10">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.live !== "#" && (
                        <Button
                          size="sm"
                          className="flex-1"
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
