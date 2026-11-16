import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "919024942219"; // Replace with business WhatsApp number

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Right Cut CNC Works!

I want to enquire about your CNC services.

Name: ${formData.name}
Mobile: ${formData.phone}
Email: ${formData.email || "Not provided"}
Service: ${formData.service}

Project Details:
${formData.message}
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="bg-[#fff8ec]">
      {/* Page Heading */}
      <section className="bg-[#49220d] py-20 px-4 text-center">
        <p className="text-[#e9a83f] font-bold tracking-[3px] text-sm">
          GET IN TOUCH
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
          Contact Us
        </h1>

        <p className="text-[#f1dfca] mt-5 max-w-xl mx-auto">
          Have a CNC design requirement? Let's discuss your project and create
          something beautiful together.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <p className="text-[#b8752c] font-bold tracking-widest text-sm">
                CONTACT INFORMATION
              </p>

              <h2 className="text-3xl font-bold text-[#49220d] mt-3">
                Let's Talk About Your Project
              </h2>

              <p className="text-[#80634b] mt-4 leading-7">
                Contact us for CNC wood cutting, MDF jali, 3D carving and
                customized design enquiries.
              </p>
            </div>

            {[
              {
                icon: Phone,
                title: "Phone",
                detail: "+91 9024942219",
              },
              {
                icon: Mail,
                title: "Email",
                detail: "rightcutcncworks@gmail.com",
              },
              {
                icon: MapPin,
                title: "Workshop Address",
                detail:
                  "Neelkanth vihar-D, Plot No. 5, Dhawas, Lalarpura, Jaipur, Jaipur Nagar Nigam Area, Rajasthan 302021",
              },
              {
                icon: Clock,
                title: "Business Hours",
                detail: "Monday - Saturday: 10:00 AM - 6:00 PM",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-[#f1dfca] flex items-center justify-center text-[#a65b19]">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#49220d]">{item.title}</h3>

                    <p className="text-sm text-[#80634b] mt-1">{item.detail}</p>
                  </div>
                </div>
              );
            })}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-[#ead8bf] p-6 md:p-9">
            <h2 className="text-2xl font-bold text-[#49220d]">
              Send Us An Enquiry
            </h2>

            <p className="text-[#80634b] text-sm mt-2 mb-7">
              Fill in your project details and contact us through WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#49220d] mb-2">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-[#dfc5a0] rounded-lg px-4 py-3 outline-none focus:border-[#b8752c]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#49220d] mb-2">
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    pattern="[0-9+\-\s]{10,15}"
                    required
                    className="w-full border border-[#dfc5a0] rounded-lg px-4 py-3 outline-none focus:border-[#b8752c]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#49220d] mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full border border-[#dfc5a0] rounded-lg px-4 py-3 outline-none focus:border-[#b8752c]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#49220d] mb-2">
                    Select Service *
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#dfc5a0] rounded-lg px-4 py-3 outline-none focus:border-[#b8752c] bg-white"
                  >
                    <option value="">Choose a service</option>
                    <option>CNC Wood Cutting</option>
                    <option>MDF Jali Designs</option>
                    <option>3D Wood Carving</option>
                    <option>Furniture Panels</option>
                    <option>Decorative Panels</option>
                    <option>Custom Designs</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#49220d] mb-2">
                  Project Details *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Describe your CNC design requirements..."
                  className="w-full border border-[#dfc5a0] rounded-lg px-4 py-3 outline-none focus:border-[#b8752c] resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-[#71350f] hover:bg-[#a65b19] text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Send Enquiry on WhatsApp
                <Send size={18} />
              </button>

              <p className="text-xs text-[#80634b]">
                Your enquiry will open in WhatsApp. Review and send the message
                to complete your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
