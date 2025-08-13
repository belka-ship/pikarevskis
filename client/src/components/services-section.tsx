export function ServicesSection() {
  const services = [
    "Building high-performing product teams",
    "Developing product and AI strategies", 
    "Career coaching for PMs",
    "Fundraising for startups",
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
          WHAT I CAN HELP WITH
        </h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="text-xl lg:text-2xl text-black font-medium">
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
