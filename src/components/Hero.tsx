import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardImage from "@/assets/dashboard-hero.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-background pt-20 pb-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary">Integrations / Google Analytics 4</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Google Analytics Reporting Tool
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Make it easy to visualize trends, track performance, and optimize client campaigns with the Google Analytics reporting tool.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                View Template
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-card">
              <img 
                src={dashboardImage} 
                alt="Analytics dashboard showing data visualization and reporting tools" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -z-10 top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
