"use client";
import { useState } from "react";
import { postContactForm } from "@/data/loaders";

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await postContactForm(data);

      if (response && response.data) {
        setStatusMessage(" Form submitted successfully!");
        event.target.reset();
      } else {
        setStatusMessage(" Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("⚠️ An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-white border border-gray-100 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
        Enquiry Form
      </h2>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 text-gray-700"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 text-gray-700"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-600"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 text-gray-700"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Enter your message"
            className="w-full px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 text-gray-700"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full mt-6 py-3 font-semibold rounded-md shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white hover:shadow-lg transform hover:scale-[1.02]"
        }`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {/* Status Message */}
      {statusMessage && (
        <p className="mt-4 text-center text-sm font-semibold text-gray-700">
          {statusMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
