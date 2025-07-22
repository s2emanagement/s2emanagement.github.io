const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-pink-600">S2E Management</div>
      <ul className="flex gap-6 text-gray-800">
        <li className="hover:text-pink-500 cursor-pointer">Home</li>
        <li className="hover:text-pink-500 cursor-pointer">About</li>
        <li className="hover:text-pink-500 cursor-pointer">Influencer</li>
        <li className="hover:text-pink-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;