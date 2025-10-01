import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to transform your analytics reporting?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Join thousands of agencies and marketers who trust our platform for their data reporting needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
