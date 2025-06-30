import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
      const sections = ["about", "projects", "skills", "experience", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= window.scrollY + 100) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("https://formspree.io/f/mqkryqyo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      {/* Header/Navbar */}
      <nav className={`flex items-center justify-between p-4 sm:p-6 sticky top-0 z-50 shadow-md ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <h1 className="text-xl font-bold">Surya A.</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-blue-400 text-xl">☰</button>
        <ul className="hidden sm:flex space-x-6 text-sm">
          {["about", "projects", "skills", "experience", "contact"].map(id => (
            <li key={id}>
              <button onClick={() => scrollToSection(id)} className={activeSection === id ? "underline text-blue-400" : "hover:underline"}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => setDarkMode(!darkMode)} className="underline text-blue-300">
              {darkMode ? "Light" : "Dark"} Mode
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-gray-800 text-white text-center py-2 space-y-2">
          {["about", "projects", "skills", "experience", "contact"].map(id => (
            <button key={id} className="block w-full" onClick={() => scrollToSection(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} className="text-blue-300">
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      )}

      {/* Sections with animation */}
      <motion.section id="about" className="p-4 sm:p-6 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-sm sm:text-base">
          Software Development Engineer with 2.5 years of experience building and optimizing enterprise-grade
          applications. Skilled in JavaScript, Node.js, React.js, TypeScript, and AWS. Passionate about clean code,
          scalable systems, and creating real-world impact through technology.
        </p>
      </motion.section>

      <motion.section id="projects" className="p-4 sm:p-6 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">POS Application</h3>
          <p>Cloud-based POS system built with Node.js, React.js, TypeScript, and AWS. Used by 2,000+ stores across the US. Improved uptime and performance by 30% through scalable microservices.</p>
          <p className="text-sm text-gray-400">Tech: Node.js, React.js, TypeScript, AWS, SQL</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Financial Batch Jobs</h3>
          <p>Developed AWS Batch jobs for high-value processes like past-due agreements and inventory depreciation, handling millions in financial impact.</p>
          <p className="text-sm text-gray-400">Tech: AWS Batch, SQL, Node.js</p>
        </div>
      </motion.section>

      <motion.section id="skills" className="p-4 sm:p-6 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          <li>JavaScript</li><li>TypeScript</li><li>Node.js</li><li>React.js</li><li>SQL</li><li>AWS</li><li>Jest</li>
          <li>HTML/CSS</li><li>Agile/Scrum</li><li>CI/CD</li><li>Git</li><li>JIRA</li>
        </ul>
      </motion.section>

      <motion.section id="experience" className="p-4 sm:p-6 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">AVASOFT – Software Engineer</h3>
          <p className="text-sm text-gray-400">Feb 2023 - Present</p>
          <ul className="list-disc list-inside">
            <li>Optimized a POS app used by 2,000+ stores across the US</li>
            <li>Refactored monolithic architecture into scalable microservices</li>
            <li>Led batch automation for financial reporting and inventory depreciation</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">AVASOFT – Software Trainee</h3>
          <p className="text-sm text-gray-400">Aug 2022 - Feb 2023</p>
          <ul className="list-disc list-inside">
            <li>Contributed to full stack development using JavaScript and SQL</li>
            <li>Actively engaged in code reviews and debugging sessions</li>
          </ul>
        </div>
      </motion.section>

      <motion.section id="contact" className="p-4 sm:p-6 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <h2 className="text-xl sm:text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Contact Me</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" required className="w-full px-4 py-2 rounded bg-gray-800 text-white"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
          {status && <p className="text-sm mt-2">{status}</p>}
        </form>
      </motion.section>

      {showScrollTop && (
        <button className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700" onClick={scrollToTop}>↑ Top</button>
      )}

      <footer className="p-4 sm:p-6 text-center text-gray-400 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Surya Arunachalam. Built with React.
      </footer>
    </div>
  );
}
