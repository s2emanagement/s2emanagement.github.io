const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 text-center mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} S2E Management. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="https://www.instagram.com/s2e.management" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          Instagram
        </a>
        <a href="https://www.linkedin.com/company/s2emanagement" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;