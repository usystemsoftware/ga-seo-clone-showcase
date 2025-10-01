import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary"></div>
            <span className="text-xl font-bold">AnalyticsPro</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#platform" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Platform
          </a>
          <a href="#integrations" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Integrations
          </a>
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Login
          </Button>
          <Button>Start Free Trial</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
