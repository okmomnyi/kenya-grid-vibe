import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 carbon-texture opacity-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-racing font-bold text-4xl md:text-5xl text-foreground">
              About <span className="text-accent">Kenya Grid Club</span>
            </h2>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Kenya Grid Club is the first community in Kenya dedicated to Formula 1 fans. 
              From race screenings to community meetups, we bring the thrill of motorsport 
              closer to home.
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Our mission is to unite Kenyan F1 enthusiasts, create unforgettable experiences, 
              and build a passionate community that celebrates the pinnacle of motorsport.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="font-medium text-foreground">Live Race Screenings</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="font-medium text-foreground">Community Events</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="font-medium text-foreground">Racing Culture</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <Card className="bg-gradient-carbon border-accent/20 shadow-glow animate-scale-in">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-racing rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-10 h-10 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                
                <h3 className="font-racing font-bold text-2xl text-foreground">
                  Join Our Community
                </h3>
                
                <p className="font-body text-muted-foreground">
                  Be part of Kenya's growing Formula 1 fan base and experience racing like never before.
                </p>
                
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="font-racing font-bold text-2xl text-accent">100+</div>
                    <div className="font-body text-sm text-muted-foreground">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="font-racing font-bold text-2xl text-accent">20+</div>
                    <div className="font-body text-sm text-muted-foreground">Events</div>
                  </div>
                  <div className="text-center">
                    <div className="font-racing font-bold text-2xl text-accent">5★</div>
                    <div className="font-body text-sm text-muted-foreground">Experience</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;