import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaTools } from "react-icons/fa";

export default function Landing() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send.");
      }
    } catch {
      setStatus("Error occurred.");
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-20 text-center px-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="mx-auto w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mt-6">Creative Web Developer</h1>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Full Stack Developer passionate about building modern, scalable web applications with React, Node.js, and AWS.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="#about"
            className="inline-block px-6 py-2 bg-white border border-black text-black rounded shadow hover:bg-black hover:text-white transition duration-300"
          >
            About Me
          </a>
          <a
            href="/Surya_Arunachalam_Resume.pdf"
            download
            className="inline-block px-6 py-2 bg-black text-white rounded shadow hover:bg-gray-800 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Skills Ribbon */}
      <div className="w-full bg-black py-3 text-white text-sm font-medium overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-6">JavaScript</span>
          <span className="mx-6">ReactJS</span>
          <span className="mx-6">NodeJS</span>
          <span className="mx-6">TypeScript</span>
          <span className="mx-6">AWS</span>
          <span className="mx-6">MongoDB</span>
          <span className="mx-6">CI/CD</span>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
          <p className="text-center max-w-2xl mx-auto mb-10 text-gray-600">
            I specialize in creating custom, high-performance full-stack applications. With 2.5+ years of experience, I turn business goals into working solutions using clean code and modern practices.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <FaCode className="text-3xl mx-auto text-blue-500 mb-2" />
              <h3 className="font-semibold text-lg">Development</h3>
              <p className="text-sm text-gray-600">React, Node.js, TypeScript, REST APIs</p>
            </div>
            <div>
              <FaRocket className="text-3xl mx-auto text-pink-500 mb-2" />
              <h3 className="font-semibold text-lg">Deployment</h3>
              <p className="text-sm text-gray-600">AWS, CI/CD, Batch Jobs, Serverless</p>
            </div>
            <div>
              <FaTools className="text-3xl mx-auto text-green-500 mb-2" />
              <h3 className="font-semibold text-lg">Engineering</h3>
              <p className="text-sm text-gray-600">Clean Code, Testing, Mentorship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white">
        &copy; {new Date().getFullYear()} Surya Arunachalam. Designed with ❤️
      </footer>

      {/* Marquee Animation */}
      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
