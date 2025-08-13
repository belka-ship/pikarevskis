import { Button } from "@/components/ui/button";
import profileImage from "@assets/Vadim photo_1755113401263.jpeg";
import primeVideoLogo from "../prime-video-logo.png";
import revolutLogo from "../revolut-logo.png";
import marriottLogo from "../marriott-logo.png";
import linkedinIcon from "../linkedin-icon.png";

export function HeroSection() {
  return (
    <section className="py-16 px-7">
      <div className="max-w-[920px] mx-auto">
        {/* Main hero content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7 mb-16">
          {/* Profile image - appears first on mobile */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <img
              src={profileImage}
              alt="Vadim Pikarevskis"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
          </div>
          
          {/* Text content - appears second on mobile */}
          <div className="flex-1 max-w-2xl order-2 lg:order-1 text-left">
            <h1 className="text-[42px] leading-[1.05] font-bold text-[#0a0a0a] mb-2 tracking-[-0.02em] mx-[-2px]">
              Vadim Pikarevskis
            </h1>
            <div className="text-[20px] leading-[1.55] text-[#6b7280] mb-6 mt-[6px]">
              <p className="mb-0">Built 100M+ user products at Amazon.</p>
              <p className="mb-0">Turned ideas into profitable products at startups.</p>
              <p className="mb-0">I help mission-driven teams with product strategy and execution.</p>
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
                  <img 
                    src={linkedinIcon} 
                    alt="LinkedIn" 
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company logos */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 opacity-60">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src={primeVideoLogo}
            alt="Prime Video"
            className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src={revolutLogo}
            alt="Revolut"
            className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src={marriottLogo}
            alt="Marriott Bonvoy"
            className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
