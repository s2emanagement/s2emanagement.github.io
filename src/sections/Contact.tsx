const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-10 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center text-yellow-500">Contact Me</h2>

      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6">
        <form action="https://formsubmit.co/s2e.management@gmail.com" method="POST" className="space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Message from Portfolio Site" />
          
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;