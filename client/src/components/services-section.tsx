export function ServicesSection() {
  const services = [
    "Building high-performing product teams and processes",
    "Developing product and AI strategies and roadmaps", 
    "Hands-on support including user research, PRDs, prototypes, analytics",
    "End-to-end product development - UX reviews,  engineering and QA processes",
    "Go-to-Market Strategy",
    "Career coaching for PMs",
  ];

  return (
    <section className="pt-4 pb-16 px-7">
      <div className="max-w-[920px] mx-auto">
        <h2 className="text-xl font-medium text-gray-500 uppercase tracking-wide mb-8">
          WHAT I CAN HELP WITH
        </h2>
        <div className="space-y-2">
          {services.map((service, index) => (
            <div key={index} className="text-lg lg:text-xl text-black font-medium leading-tight">
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
