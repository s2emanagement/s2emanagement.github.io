const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#fffdeb] text-[#333] min-h-screen flex flex-col justify-center items-center px-4 pt-24 md:pt-32"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#ffd952] text-center mb-4">
        Welcome to S2E Management
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl font-medium">
         We connect brands and creators to build meaningful partnerships. <br />
         Your trusted partner in managing impactful brand and creator collaborations.
      </p>
      <a
        href="#contact"
        className="mt-8 bg-[#ffd952] hover:bg-[#fee600] text-black font-semibold py-3 px-6 rounded-full shadow-md transition-all"
      >
        Let’s Work Together
      </a>
    </section>
  );
};

export default Hero;