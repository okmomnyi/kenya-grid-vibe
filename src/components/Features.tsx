import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "🏁",
      title: "Live Screenings",
      description: "Watch Formula 1 races with fellow Kenyan fans in an electrifying atmosphere.",
      status: "active"
    },
    {
      icon: "🤝",
      title: "Community Meetups",
      description: "Engage with a network of passionate motorsport lovers and build lasting friendships.",
      status: "active"
    },
    {
      icon: "📸",
      title: "Gallery",
      description: "Coming soon: Photos and highlights from our events and racing experiences.",
      status: "coming-soon"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 speed-lines opacity-20"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-racing font-bold text-4xl md:text-5xl text-foreground mb-6">
            What We <span className="text-accent">Offer</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience Formula 1 like never before with our community-driven events and activities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`relative group hover:shadow-racing transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card/80 backdrop-blur-sm border-accent/20 ${
                feature.status === 'coming-soon' ? 'opacity-80' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="font-racing font-bold text-xl text-foreground flex items-center justify-center gap-2">
                  {feature.title}
                  {feature.status === 'coming-soon' && (
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-body">
                      Soon
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="font-body text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>

              {/* Racing stripe accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-racing opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;