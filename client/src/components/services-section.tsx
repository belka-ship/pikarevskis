export function ServicesSection() {
  const services = [
    "Building high-performing product teams",
    "Developing product and AI strategies",
    "Career coaching for PMs",
    "Fundraising for startups",
  ];

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          What I Can Help With
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 hover:bg-subtle rounded-lg transition-colors"
            >
              <h3 className="text-xl font-medium mb-2">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
