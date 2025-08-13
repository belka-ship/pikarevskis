export function CommunitySection() {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-center">Community</h2>
        <div className="text-center">
          <p className="text-lg leading-relaxed text-secondary">
            Author of the{" "}
            <a
              href="https://www.instagram.com/dobry"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @dobry
            </a>{" "}
            blog. Co-founder of the{" "}
            <a
              href="https://www.mesto.co/"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mesto.co
            </a>{" "}
            online community and{" "}
            <a
              href="https://www.nytimes.com/2022/05/23/technology/russia-tech-engineers.html"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              DobryDom
            </a>{" "}
            co-living in San Francisco. Certified yoga teacher.
          </p>
        </div>
      </div>
    </section>
  );
}
