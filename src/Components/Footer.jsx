

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl mb-4">Subscribe to our newsletter</h2>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                className="p-2 rounded-l-md outline-none text-gray-900"
                placeholder="Enter your email"
              />
              <button type="submit" className="p-2 bg-red-600 text-white rounded-r-md hover:bg-red-500">
                Subscribe
              </button>
            </form>
          </div>
          <nav className="mt-6 md:mt-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing </a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials </a></li>
            </ul>
          </nav>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
