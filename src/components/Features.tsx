import { Card } from "@/components/ui/card";
import { BarChart3, Users, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Clear Data Visualization",
    description: "Enhance standard reports by simplifying complex information into clear line charts, bar graphs, and more"
  },
  {
    icon: TrendingUp,
    title: "Segment Channels",
    description: "Examine GA4 data by channel, determine what's driving traffic, events, and conversions"
  },
  {
    icon: Users,
    title: "Understand Your Audience",
    description: "Analyze user behavior and sessions by location, language, age, device categories, and related data points"
  },
  {
    icon: Target,
    title: "Conversion Tracking",
    description: "Impress clients with professional dashboards and reports that accentuate their events, conversions, and revenue"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-[hsl(var(--dark-bg))] text-primary-foreground">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Bring Google Analytics data into focus
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Transform complex metrics into clear, client-friendly reports that reveal what's working and where to improve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 bg-card/10 backdrop-blur-sm border-primary-foreground/10 hover:bg-card/20 transition-all">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-primary-foreground/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
