import { FaExternalLinkAlt } from "react-icons/fa";

const portfolioItems = [
  {
    title: "S2E Campaign with Local Brands",
    image: "https://via.placeholder.com/400x250?text=S2E+Campaign",
    link: "https://instagram.com/s2emanagement",
  },
  {
    title: "QA Automation with Katalon",
    image: "https://via.placeholder.com/400x250?text=QA+Automation",
    link: "#",
  },
  {
    title: "Freelance Web Development Project",
    image: "https://via.placeholder.com/400x250?text=Web+Dev+Project",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-white text-gray-800 px-4 md:px-10">
      <h2 className="text-3xl font-bold mb-10 text-center text-yellow-500">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 mt-2 hover:underline"
              >
                View Project <FaExternalLinkAlt className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;