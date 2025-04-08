
import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Rocket, Zap } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Clean Code",
      description: "I write clean, maintainable code that follows best practices and industry standards.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Creative Design",
      description: "I create visually appealing designs that engage users and enhance their experience.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Marketing Strategy",
      description: "I develop effective digital marketing strategies to help businesses grow online.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Performance Focus",
      description: "I build high-performance websites that load quickly and work smoothly.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-foreground/80 mb-6">
            I'm a passionate website developer and digital marketer with experience in creating
            impactful digital solutions. My expertise spans web development, video editing,
            digital marketing, and creative design, allowing me to deliver comprehensive digital
            experiences.
          </p>
          <p className="text-lg text-foreground/80">
            My approach combines clean UI/UX principles with performance-focused development and
            marketing-driven design, ensuring that every project not only looks great but also
            achieves its business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
