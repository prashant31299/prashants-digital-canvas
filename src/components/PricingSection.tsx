
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingSection = () => {
  const plans: PricingPlan[] = [
    {
      name: "Basic Plan",
      price: "₹7,000",
      features: [
        "15 Social Media Posts",
        "2 Reels",
        "Branded SEO Reports",
        "300 Keywords SEO Optimization",
        "Google My Business Updates",
        "24/7 Customer Support"
      ]
    },
    {
      name: "Standart Plan",
      price: "₹12,000",
      highlighted: true,
      features: [
        "20 Social Media Posts",
        "5 Reels",
        "Static Website Development",
        "Website Audit",
        "Branded SEO Reports",
        "1000 Keywords SEO Optimization",
        "Google My Business Updates",
        "Marketing Plan Creation",
        "2 Meta Ads (Facebook/Instagram Ads)",
        "24/7 Customer Support"
      ]
    },
    {
      name: "Premium Plan",
      price: "₹15,000",
      features: [
        "25 Social Media Posts",
        "5 Reels",
        "Static Website Development",
        "E-Commerce Website (up to 15 products) with SEO",
        "Website Audit",
        "Branded SEO Reports",
        "1000 Keywords SEO Optimization",
        "Google My Business Updates",
        "Detailed Marketing Plan",
        "5 Meta Ads (Facebook/Instagram Ads)",
        "24/7 Customer Support"
      ]
    }
  ];

  const handleGetStarted = () => {
    // Open WhatsApp with the user's number
    window.open(`https://wa.me/919579544393?text=I'm interested in your services!`, '_blank');
  };

  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Best Solutions for Our Clients</h2>
          <p className="text-lg text-foreground/80">
            We provide flexible plans tailored for businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border shadow-md transition-all duration-300 h-full flex flex-col ${
                plan.highlighted 
                  ? "border-primary/50 shadow-lg shadow-primary/10 scale-105 md:scale-110" 
                  : "hover:shadow-lg"
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button 
                  onClick={handleGetStarted}
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
