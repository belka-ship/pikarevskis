export function ExperienceSection() {
  const experiences = [
    {
      title: "Founder & CEO, Optic",
      description:
        "Building AI-native biopharma. Raised $12M from Kleiner Perkins and Greylock. Trusted by Stanford, Puretech, Southern Research, Innoviva, UNC, and more.",
    },
    {
      title: "Director of Product, Google",
      description:
        "Led an org of 200+ across PM, UX, and Engineering. Founding PM for Google's VR/AR group. Launched Cardboard, Daydream, Tilt Brush, YouTube VR, and Stadia.",
    },
  ];

  return (
    <section className="py-16 px-7">
      <div className="max-w-[920px] mx-auto">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-12">
          EXPERIENCE
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
