const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 z-50">
      <div className="text-2xl font-bold text-[#ffd952] tracking-wide">
        S2E Management
      </div>
      <ul className="hidden md:flex gap-6 text-[#333] font-medium">
        <li>
          <a
            href="#home"
            className="hover:text-[#ffd952] hover:underline underline-offset-4 transition duration-300 ease-in-out"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-[#ffd952] hover:underline underline-offset-4 transition duration-300 ease-in-out"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="hover:text-[#ffd952] hover:underline underline-offset-4 transition duration-300 ease-in-out"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-[#ffd952] hover:underline underline-offset-4 transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;