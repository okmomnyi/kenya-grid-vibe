import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-racing rounded-lg flex items-center justify-center font-racing font-bold text-lg">
            KGC
          </div>
          <span className="font-racing font-bold text-xl text-foreground">
            Kenya Grid Club
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-accent transition-colors font-medium">
            Home
          </a>
          <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
            About
          </a>
          <a href="#features" className="text-muted-foreground cursor-not-allowed">
            Gallery
          </a>
        </nav>

        {/* CTA Button */}
        <Button variant="comingSoon" disabled>
          Join Now
        </Button>
      </div>
    </header>
  );
};

export default Header;