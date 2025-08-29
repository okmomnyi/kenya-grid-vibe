import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-racing.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Formula 1 racing scene with Kenyan flag colors" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-racing-dark/80 via-racing-dark/60 to-racing-dark/90"></div>
        <div className="absolute inset-0 carbon-texture opacity-20"></div>
        <div className="absolute inset-0 speed-lines opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="font-racing font-black text-5xl md:text-7xl lg:text-8xl mb-6 text-foreground leading-tight">
          Feel the <span className="text-transparent bg-gradient-racing bg-clip-text">Speed</span>,
          <br />
          Join the <span className="text-accent">Grid</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Uniting Formula 1 Fans Across Kenya
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="comingSoon" size="lg" disabled className="pulse-racing">
            Join the Club
            <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
              Coming Soon
            </span>
          </Button>
          
          <Button variant="hero" size="lg" className="animate-scale-in">
            <a href="#about" className="flex items-center">
              Explore
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;