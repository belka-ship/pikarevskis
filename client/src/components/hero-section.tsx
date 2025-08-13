import { SiGoogle, SiYoutube } from "react-icons/si";

export function HeroSection() {
  const companyLogos = [
    { name: "Google", url: "https://www.google.com/", icon: SiGoogle },
    { name: "YouTube", url: "https://www.youtube.com/", icon: SiYoutube },
    { name: "Kleiner Perkins", url: "https://www.kleinerperkins.com/" },
    { name: "Greylock", url: "https://greylock.com/" },
  ];

  return (
    <section className="py-16 text-center max-w-4xl mx-auto px-4">
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
          alt="Professional headshot"
          className="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg object-cover"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-12">
          {companyLogos.map((company, index) => (
            <a
              key={index}
              href={company.url}
              className="hover:opacity-75 transition-opacity group"
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.icon ? (
                <company.icon className="h-10 w-auto text-gray-600 group-hover:text-gray-900 transition-colors" />
              ) : (
                <div className="h-10 px-4 py-2 bg-gray-100 rounded-md flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                  {company.name}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
