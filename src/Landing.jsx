
import React, { useState } from "react";

export default function Landing() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

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
      } else setStatus("Failed to send.");
    } catch {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gray-100">
        <img src="https://via.placeholder.com/150" alt="Profile" className="mx-auto rounded-full mb-4" />
        <h1 className="text-4xl font-bold">Creative Web Developer</h1>
        <p className="mt-2 text-lg">Full Stack Developer | AWS | React | Node.js</p>
        <div className="mt-4 space-x-4">
          <a href="#contact" className="px-6 py-2 bg-black text-white rounded">Contact Me</a>
          <a href="/Surya_Arunachalam_Resume.pdf" download className="px-6 py-2 border border-black rounded">Download CV</a>
        </div>
      </section>

      {/* Skills Ribbon */}
      <div className="overflow-hidden whitespace-nowrap bg-black text-white py-3 px-2 text-sm animate-marquee">
        WordPress &nbsp; | &nbsp; HTML &nbsp; | &nbsp; ReactJS &nbsp; | &nbsp; NodeJS &nbsp; | &nbsp; CSS &nbsp; | &nbsp; Shopify &nbsp; | &nbsp; AWS &nbsp;
      </div>

      {/* About Grid */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid gap-8 md:grid-cols-3 text-center">
        <div>
          <h3 className="text-xl font-bold mb-2">Strategy</h3>
          <p>Clean architecture, scalable codebases, agile delivery, and performance-first focus.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">My Skills</h3>
          <p>JavaScript, TypeScript, Node.js, React, AWS, MongoDB, REST APIs, CI/CD, Git, Agile.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Advice</h3>
          <p>Write maintainable code, prioritize readability, communicate clearly, and never stop learning.</p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-6 rounded hover:shadow-lg transition">
            <h4 className="font-semibold text-xl">POS Application</h4>
            <p className="text-sm mt-2">Used by 2,000+ stores. Built with React, Node.js, and AWS.</p>
            <p className="text-xs mt-1 text-gray-600">Tech: React, Node.js, TypeScript, AWS</p>
          </div>
          <div className="border p-6 rounded hover:shadow-lg transition">
            <h4 className="font-semibold text-xl">Financial Batch Jobs</h4>
            <p className="text-sm mt-2">Handled millions in inventory/financial processes using AWS Batch.</p>
            <p className="text-xs mt-1 text-gray-600">Tech: Node.js, SQL, AWS Batch</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
        <blockquote className="italic text-lg">"Surya is a reliable, innovative developer who consistently delivers beyond expectations."</blockquote>
        <p className="mt-2 text-sm text-gray-600">— Senior Architect, Avasoft</p>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full border p-3 rounded" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="w-full border p-3 rounded" />
          <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required placeholder="Your Message" className="w-full border p-3 rounded"></textarea>
          <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Send Message</button>
          {status && <p className="text-sm mt-2">{status}</p>}
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10">© {new Date().getFullYear()} Surya Arunachalam</footer>
    </div>
  );
}
