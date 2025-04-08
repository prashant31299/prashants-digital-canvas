
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, LineChart, Video, Palette } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Website Design & Development",
      description:
        "Custom website design and development tailored to your business needs. I build responsive, user-friendly websites that are optimized for performance and conversion.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "SEO & Digital Marketing",
      description:
        "Comprehensive digital marketing strategies including SEO, social media marketing, content creation, and analytics to help you grow your online presence and reach your target audience.",
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Video Editing & Graphics Design",
      description:
        "Professional video editing and graphics design services to enhance your visual content. From promotional videos to social media graphics, I create engaging visual assets for your brand.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Branding & Strategy",
      description:
        "Strategic branding solutions that establish a strong, cohesive identity for your business. I help you define and communicate your brand's unique value proposition.",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Services</h2>
          <p className="text-lg text-foreground/80">
            I offer a range of digital services to help businesses establish and grow their online presence.
            From website development to digital marketing, I provide comprehensive solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
