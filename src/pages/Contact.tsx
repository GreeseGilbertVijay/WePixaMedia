import { useState } from "react";
import axios from "axios";

interface FormData {
  name: string;
  gmail: string;
  phone: string;
  message: string;
  services: string[];
}

const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    gmail: "",
    phone: "",
    message: "",
    services: [],
  });

  const handleCheckbox = (service: string) => {
    setForm((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5050/send-email", form);
    alert(res.data.msg);
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Contact Form
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Gmail */}
        <input
          type="email"
          placeholder="Your Gmail"
          value={form.gmail}
          onChange={(e) => setForm({ ...form, gmail: e.target.value })}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Message */}
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className="w-full h-28 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Checkboxes */}
        <div>
          <h4 className="text-lg font-medium text-gray-700 mb-2">
            Select Services:
          </h4>

          {["Website", "Designing", "Video Editing", "Logo Creation"].map(
            (service) => (
              <label
                key={service}
                className="flex items-center gap-2 mb-2 text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={form.services.includes(service)}
                  onChange={() => handleCheckbox(service)}
                  className="w-4 h-4"
                />
                {service}
              </label>
            )
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-medium transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
