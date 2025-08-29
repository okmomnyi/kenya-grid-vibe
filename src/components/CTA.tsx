import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-racing relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 carbon-texture opacity-20"></div>
      <div className="absolute inset-0 speed-lines opacity-30"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="font-racing font-black text-4xl md:text-6xl text-racing-dark mb-6">
            Be Part of the <span className="text-white">Grid</span>
          </h2>
          
          <p className="font-body text-xl text-racing-dark/80 mb-10 leading-relaxed">
            Join Kenya's most exciting Formula 1 community and experience racing culture like never before. 
            Connect with fellow fans, watch races together, and be part of something special.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="comingSoon" size="lg" disabled className="bg-white/10 text-white border-white/20 hover:bg-white/20 pulse-racing">
              Sign Up Now
              <span className="ml-2 text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                Coming Soon
              </span>
            </Button>
            
            <Button variant="ghost" size="lg" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 font-racing">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="font-racing font-bold text-3xl text-white mb-2">2024</div>
              <div className="font-body text-racing-dark/80">Founded</div>
            </div>
            <div className="text-center">
              <div className="font-racing font-bold text-3xl text-white mb-2">100+</div>
              <div className="font-body text-racing-dark/80">Future Members</div>
            </div>
            <div className="text-center">
              <div className="font-racing font-bold text-3xl text-white mb-2">20+</div>
              <div className="font-body text-racing-dark/80">Planned Events</div>
            </div>
            <div className="text-center">
              <div className="font-racing font-bold text-3xl text-white mb-2">1st</div>
              <div className="font-body text-racing-dark/80">In Kenya</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;