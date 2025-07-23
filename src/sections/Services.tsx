import { FaBullhorn, FaUsers, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaBullhorn size={32} />,
    title: "Campaign Management",
    desc: "We help you manage your campaign from start to finish with targeted strategy and execution.",
  },
  {
    icon: <FaUsers size={32} />,
    title: "Influencer Matchmaking",
    desc: "Discover the right influencers for your brand using data-driven selection and analysis.",
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Insight Report",
    desc: "Transparent reports highlighting post metrics like reach, impressions, ER, and audience interaction.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#fffdeb] text-[#333] py-20 px-4 md:px-10" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffd952]">Our Services</h2>
        <p className="text-[#666] mb-12 text-base md:text-lg">
          End-to-end solutions to elevate your brand campaigns.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition duration-300 border border-[#fcefa7]"
            >
              <div className="text-[#ffd952] mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}