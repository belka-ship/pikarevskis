import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/Vadim photo_1755113401263.jpeg";

export function HeroSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main hero content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 mb-16">
          {/* Profile image - appears first on mobile */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <img
              src={profileImage}
              alt="Andrey Doronichev"
              className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
            />
          </div>
          
          {/* Text content - appears second on mobile */}
          <div className="flex-1 max-w-2xl order-2 lg:order-1 text-left">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-6 leading-tight">
              Vadim Pikarevskis
            </h1>
            <div className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              <p className="mb-2">Scaled impact for hundreds of millions of users at Amazon.</p>
              <p className="mb-2">Turned startup ideas into profitable products.</p>
              <p className="mb-2">Today I help mission-driven teams.</p>
            </div>
            
            {/* CTA and social buttons */}
            <div className="flex items-center justify-start gap-4">
              <a 
                href="https://calendly.com/vpikarevskis/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-base font-medium rounded-lg"
                >
                  Book a consultation
                </Button>
              </a>
              
              {/* Social icon */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/vpikarevskis/"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company logos */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 opacity-60">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
            alt="YouTube"
            className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
          <div className="text-gray-400 font-medium text-lg tracking-wide">
            KLEINER PERKINS
          </div>
          <div className="text-gray-400 font-medium text-lg tracking-wide">
            greylock
          </div>
        </div>
      </div>
    </section>
  );
}
