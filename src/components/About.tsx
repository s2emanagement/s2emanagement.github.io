const About = () => {
  return (
    <section
      id="about"
      className="bg-[#fffdeb] text-[#333] py-20 px-4 md:px-20 transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ffd952] mb-6">
          About S2E
        </h2>
        <p className="text-lg md:text-xl leading-relaxed font-medium mb-6">
          <span className="text-[#ffd952] font-semibold">S2E Management</span> is a KOL & Influencer agency that helps brands run effective and targeted campaigns.  
          We focus on building strong collaborations with trusted talents, from influencer matchmaking to campaign management and performance tracking.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white shadow-md p-6 rounded-2xl border border-[#ffd952] max-w-sm">
            <h3 className="text-xl font-bold text-[#ffd952] mb-2">Influencer Matchmaking</h3>
            <p className="text-base text-gray-700">
              We connect brands with suitable influencers based on audience, niche, and campaign goals.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl border border-[#ffd952] max-w-sm">
            <h3 className="text-xl font-bold text-[#ffd952] mb-2">Campaign Coordination</h3>
            <p className="text-base text-gray-700">
              From briefing to content posting, we manage each step to ensure smooth execution and timely delivery.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl border border-[#ffd952] max-w-sm">
            <h3 className="text-xl font-bold text-[#ffd952] mb-2">Insight Reporting</h3>
            <p className="text-base text-gray-700">
              We provide insight reports post-campaign to evaluate key metrics such as reach, engagement, and content performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;