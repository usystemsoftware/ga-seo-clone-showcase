import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Automated data synchronization",
  "Customizable report templates",
  "Real-time analytics updates",
  "White-label client dashboards",
  "Multi-client management",
  "Advanced filtering and segmentation"
];

export const Benefits = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything you need to impress clients
            </h2>
            <p className="text-xl text-muted-foreground">
              Streamline your reporting workflow with powerful features designed for agencies and marketers who demand excellence.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="mt-6">
              Get Started Today
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <div className="text-6xl font-bold text-primary">500+</div>
                  <p className="text-xl text-muted-foreground">Integrations Available</p>
                </div>
                <div className="space-y-2">
                  <div className="text-6xl font-bold text-primary">50K+</div>
                  <p className="text-xl text-muted-foreground">Active Users</p>
                </div>
                <div className="space-y-2">
                  <div className="text-6xl font-bold text-primary">99.9%</div>
                  <p className="text-xl text-muted-foreground">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
