import { FaBullhorn, FaUsers, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaBullhorn size={30} />,
    title: 'Campaign Management',
    desc: 'Kami bantu kelola campaign kamu dari awal sampai akhir dengan strategi yang tepat sasaran.',
  },
  {
    icon: <FaUsers size={30} />,
    title: 'Influencer Matchmaking',
    desc: 'Temukan influencer paling cocok dengan brand kamu dengan data & analisa.',
  },
  {
    icon: <FaChartLine size={30} />,
    title: 'Performance Report',
    desc: 'Laporan detail yang nunjukin performa setiap campaign kamu secara transparan.',
  },
];

export default function Services() {
  return (
    <section className="bg-white text-black py-20 px-4 md:px-10" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-500">Our Services</h2>
        <p className="text-gray-600 mb-10">Solusi end-to-end buat kebutuhan campaign brand kamu.</p>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-yellow-400 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}