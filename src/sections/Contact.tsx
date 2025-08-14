const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-10 bg-[#fff9e0] text-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#ffd952]">Contact Me</h2>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <form 
          action="https://formsubmit.co/s2e.management@gmail.com" 
          method="POST" 
          className="space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Message from Portfolio Site" />
          <input type="hidden" name="_next" value="https://s2e-portofolio.vercel.app/thanks" />

          <div>
            <label className="block mb-1 font-semibold text-sm">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-xl p-3 bg-gray-900 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ffd952]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-xl p-3 bg-gray-900 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ffd952]"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-xl p-3 bg-gray-900 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ffd952]"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#ffd952] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#f5cb3f] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;