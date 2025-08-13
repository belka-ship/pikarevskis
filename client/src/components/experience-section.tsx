import { ExternalLink } from "lucide-react";
import skiftThumbnail from "@assets/Rendering-of-Aloft-istanbul-Karakoy-in-Turkey-marriott-international_1755126611028.webp";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Business travel management platform by Marriott",
      description:
        "Led the supplier-platform integrations powering Business Access by Marriott Bonvoy, Marriott’s new SMB travel booking portal. Delivered a direct-connect experience with Marriott’s full portfolio, discounted SMB rates and Bonvoy benefits - plus flights, rail, and car bookings. Launched globally - Marriott’s first hotel program built on Spotnana’s Travel-as-a-Service infrastructure.",
    },
    {
      title: "Fora - Integrated Booking Platform & Vault",
      description:
        "Built a modern advisor booking platform aggregating 100k+ hotels with real-time perks/commission visibility, and launched Vault to securely collect/store client payment details and streamline payouts. Shipped adoption loops and analytics to scale usage across the advisor community.",
    },
  ];

  return (
    <section className="py-16 px-7">
      <div className="max-w-[920px] mx-auto">
        <h2 className="text-xl font-medium text-gray-500 uppercase tracking-wide mb-12">
          MY PRODUCT LAUNCHES
        </h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index}>
              <h3 className="text-xl lg:text-2xl font-semibold text-black mb-4">
                {experience.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                {experience.description}
              </p>
              {index === 0 && (
                <div className="mt-6">
                  <a 
                    href="https://skift.com/2024/07/10/fresh-details-on-marriotts-travel-booking-tool-for-small-businesses/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-md transition-all duration-300 max-w-2xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                        <img 
                          src={skiftThumbnail} 
                          alt="Skift article thumbnail" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-base font-medium text-gray-900 leading-snug">
                            Fresh Details on Marriott's Travel Booking Tool for Small Businesses
                          </h4>
                          <ExternalLink className="flex-shrink-0 w-4 h-4 text-gray-400 mt-1" />
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          skift.com
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
