export function ServicesSection() {
  const services = [
    "Building high-performing product teams and processes",
    "Developing product and AI strategies and roadmaps", 
    "Hands on support including user research, PRDs, prototypes, analytics",
    "End-to-end product development - UX reviews,  engineering and QA processes",
    "Go-to-Market Strategy",
    "Career coaching for PMs",
  ];

  return (
    <section className="py-16 px-7">
      <div className="max-w-[920px] mx-auto">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
          WHAT I CAN HELP WITH
        </h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="text-[20px] leading-[1.55] text-[#6b7280] font-normal">
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
