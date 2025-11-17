import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const contacts = [
    { id: 1, href: "mailto:victorugwu9772@example.com", name: "Email", label: "victorugwu9772@example.com", icon: <FaEnvelope />, hover: true},
    { id: 2,  href: "tel:+2349162821139", name: "Phone", label: "+234 916 282 1139", icon: <FaPhoneAlt />, hover: true},
    { id: 3, name: "Location", label: "Enugu, Nigeria", icon: <FaMapMarkerAlt />, hover: false},
  ]

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 md:px-20 py-20 overflow-hidden hero-gradient"
    >
      {/* === Section Heading === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        Get in <span className="text-[#8b5cf6]">Touch</span>
      </motion.div>

      {/* === Description === */}
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
        I’m always open to discussing new projects, creative ideas, or
        opportunities to collaborate. Feel free to reach out. I’ll get back to
        you as soon as possible.
      </p>

      {/* === Contact Grid === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mb-16">
        {/* === Left Side: Contact Info === */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {contacts.map(contact=> (
            <div 
            key={contact.id}
            className="flex items-center gap-4">
              <div className="text-2xl text-[#8b5cf6]">
              {contact.icon}
              </div>

              <div>
                <h4 className="font-semibold text-lg">{contact.name}</h4>
                <a
                  href={contact.href}
                  className={`text-gray-400 transition-colors duration-300
                  ${ contact.hover ? ' hover:text-[#8b5cf6]' : null}
                  `}
                >
                  {contact.label}
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* === Right Side: Contact Form === */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#111]/60 z-10 relative  rounded-2xl p-8 shadow-lg  space-y-5"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-[#222]/60 text-white focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-[#222]/60 text-white focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-[#222]/60 text-white focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-[#8b5cf6] text-white rounded-lg font-medium shadow-md hover:bg-[#7c3aed] transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* === Footer Text === */}
      <p className="text-white text-sm text-center">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#8b5cf6] font-medium">BoyAlone</span>. All rights reserved.
      </p>

      {/* === Background Glow === */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8b5cf6]/20 rounded-full blur-[140px]" />
    </section>
  );
}

export default Contact;
