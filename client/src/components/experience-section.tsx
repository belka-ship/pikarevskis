export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Manager, Spotnana",
      description:
        "Led supplier-platform direct integration work to power Marriott’s SMB corporate travel booking portal , delivering full inventory and benefit parity outside traditional travel distribution channels",
    },
    {
      title: "Director of Product, Google",
      description:
        "Led an org of 200+ across PM, UX, and Engineering. Founding PM for Google's VR/AR group. Launched Cardboard, Daydream, Tilt Brush, YouTube VR, and Stadia.",
    },
  ];

  return (
    <section className="pt-4 pb-16 px-7">
      <div className="max-w-[920px] mx-auto">
        <h2 className="text-xl font-medium text-gray-500 uppercase tracking-wide mb-12">
          RECENT PRODUCT LAUNCHES
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
