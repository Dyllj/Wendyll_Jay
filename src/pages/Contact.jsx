import { useState } from "react";
import emailjs from "@emailjs/browser";
import IconLabel from "../components/Icon/Icon";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import ScrollFadeIn from "../components/ScrollFadeIn/Scroll_FadeIn";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus({ loading: false, success: "", error: "All fields are required." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ loading: false, success: "", error: "Please enter a valid email address." });
      return;
    }

    setStatus({ loading: true, success: "", error: "" });

    emailjs
      .send(
        "service_7nibidk",
        "template_fest7rc",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        "Egqu1L8xIUAhD3eGv"
      )
      .then(() => {
        setStatus({
          loading: false,
          success: "Message sent successfully! I'll get back to you soon.",
          error: "",
        });
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus({
          loading: false,
          success: "",
          error: "Something went wrong. Please try again later.",
        });
      });
  };

  return (
    <section id="contact" className="relative w-full">
      {/* First Article - Floating Contact Form */}
      <article className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 mt-20 border-t-2 border-zinc-700 pt-5">
        <ScrollFadeIn>
          <div className="flex gap-20 justify-center items-center flex-col md:flex-row">
            <div className="flex flex-col justify-center max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-zinc-300">
                Get in <span className="text-amber-600">Touch</span>
              </h2>
              <p className="text-zinc-400 text-xl mb-8">
                Have a question or want to work together? Send me a message!
              </p>
            </div>
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="mb-2 font-semibold text-zinc-700">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-10 px-4 border-2 border-zinc-300 rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="lastName" className="mb-2 font-semibold text-zinc-700">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-10 px-4 border-2 border-zinc-300 rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-semibold text-zinc-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-10 px-4 border-2 border-zinc-300 rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 font-semibold text-zinc-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="px-4 py-3 border-2 border-zinc-300 rounded-lg focus:outline-none focus:border-amber-600 resize-none transition-colors"
                  required
                />
              </div>

              {status.error && (
                <div className="p-4 bg-red-100 border-2 border-red-400 text-red-700 rounded-lg">
                  {status.error}
                </div>
              )}
              {status.success && (
                <div className="p-4 bg-green-100 border-2 border-green-400 text-green-700 rounded-lg">
                  {status.success}
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full h-12 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        </ScrollFadeIn>
      </article>

      {/* Second Article - Footer (Full Width - No Gaps) */}
      <footer className="relative z-10 w-full bg-amber-700 pt-20 h-80 -mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left: Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                Contact me via
              </h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <IconLabel
                  icon={FaFacebookF}
                  href="https://www.facebook.com/wendyl.tautoan"
                  ariaLabel="Facebook profile"
                />
                <IconLabel
                  icon={FaInstagram}
                  href="https://www.instagram.com/wendylljay/"
                  ariaLabel="Instagram profile"
                />
                <IconLabel
                  icon={FaGithub}
                  href="https://github.com/Dyllj"
                  ariaLabel="GitHub profile"
                />
                <IconLabel
                  icon={FaLinkedin}
                  href="https://linkedin.com"
                  ariaLabel="LinkedIn profile"
                />
              </div>
            </div>

            {/* Right: Additional Info */}
            <div className="text-center md:text-right">
              <p className="text-zinc-900 mb-2 font-bold">
                <a href="mailto:wendylljay@gmail.com" className="hover:text-amber-600 transition-colors">
                  wendylljay@gmail.com
                </a>
              </p>
              <p className="text-zinc-900 font-bold">
                Guripan, Mahayag, Zamboanga Del Sur, Philippines
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8  border-t-3 border-zinc-800 text-center pb-8">
            <p className="text-zinc-900 text-sm font-bold">
              © 2025 Wendyll Jay Tautoan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;