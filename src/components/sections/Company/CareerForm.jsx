"use client";

import { useState } from "react";
import { Form, Input, Button } from "antd";
import { postJobForm } from "@/data/loaders";

const CareerForm = ({ selectedJob }) => {
  const [statusMessage, setStatusMessage] = useState("");

  const onFinish = async (values) => {
    try {
      const formData = {
        name: values.name,
        email: values.email,
        contact: values.contact,
        location: values.location,
      };

      const response = await postJobForm(formData);
      console.log("Strapi response:", response);
      setStatusMessage("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting job form:", error);
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="p-2">
      <h2 className="text-xl font-semibold text-center mb-4">{selectedJob}</h2>

      <Form layout="vertical" onFinish={onFinish}>
        {/* Full Name */}
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        {/* Contact Number */}
        <Form.Item
          label="Contact Number"
          name="contact"
          rules={[
            { required: true, message: "Please enter your contact number" },
            { pattern: /^[0-9]{10,15}$/, message: "Enter a valid contact number" },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Enter a valid email address" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        {/* Location */}
        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please enter your location" }]}
        >
          <Input placeholder="Enter your location" />
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit Application
          </Button>
        </Form.Item>

        {/* Status message */}
        {statusMessage && (
          <p className="text-center text-sm font-semibold text-gray-700">
            {statusMessage}
          </p>
        )}
      </Form>
    </div>
  );
};

export default CareerForm;
