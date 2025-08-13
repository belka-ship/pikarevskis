export function ExperienceSection() {
  const experiences = [
    {
      title: "Founder & CEO",
      company: "Optic",
      url: "https://www.optic.inc/",
      description:
        "Building AI-native biopharma. Raised $12M from Kleiner Perkins and Greylock. Trusted by Stanford, Puretech, Southern Research, Innoviva, UNC, and more.",
    },
    {
      title: "Director of Product",
      company: "Google",
      url: "https://www.google.com/",
      description:
        "Led an org of 200+ across PM, UX, and Engineering. Founding PM for Google's VR/AR group. Launched Cardboard, Daydream, Tilt Brush, YouTube VR, and Stadia.",
    },
    {
      title: "Head of Mobile",
      company: "YouTube",
      url: "https://www.youtube.com/",
      description:
        "Launched the YouTube app for iOS, Android, and mobile web. Negotiated key distribution deals, including with Apple. Scaled the product from 0 to 1B+ users.",
    },
    {
      title: "Angel Investor & Advisor",
      company: "",
      url: "",
      description:
        "Backed Coda, Grammarly, PandaDoc, Titan, Reface, FlutterFlow, Chatfuel, DressX, and others.",
    },
  ];

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          <div className="border-l-2 border-accent pl-8 relative">
            {experiences.map((experience, index) => (
              <div key={index} className="pb-8 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                <h3 className="text-xl font-semibold mb-2">
                  {experience.title}
                  {experience.company && (
                    <>
                      ,{" "}
                      {experience.url ? (
                        <a
                          href={experience.url}
                          className="text-accent hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {experience.company}
                        </a>
                      ) : (
                        experience.company
                      )}
                    </>
                  )}
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  {experience.description.includes("YouTube") && experience.company === "Google" ? (
                    <>
                      Led an org of 200+ across PM, UX, and Engineering. Founding PM for Google's VR/AR group. 
                      Launched Cardboard, Daydream, Tilt Brush,{" "}
                      <a
                        href="https://www.youtube.com/"
                        className="text-accent hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>{" "}
                      VR, and Stadia.
                    </>
                  ) : (
                    experience.description
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
