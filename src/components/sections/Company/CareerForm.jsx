import { useState } from "react";
import { Form, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CareerForm = ({ selectedJob }) => {
  const [statusMessage, setStatusMessage] = useState("");

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("access_key", "fd76397b-5a95-4f73-b421-b13e6abdb121");
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("contact", values.contact);
    formData.append("location", values.location);
    formData.append("position", selectedJob);
    formData.append("file", values.file?.file?.originFileObj);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const res = await response.json();

      if (res.success) {
        setStatusMessage("Application submitted successfully!");
      } else {
        setStatusMessage("Failed to submit. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-2">
      <h2 className="text-xl font-semibold text-center mb-4">{selectedJob}</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item
          label="Contact Number"
          name="contact"
          rules={[
            { required: true, message: "Please enter your contact number" },
            {
              pattern: /^[0-9]{10,15}$/,
              message: "Enter a valid contact number",
            },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>

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

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please enter your location" }]}
        >
          <Input placeholder="Enter your location" />
        </Form.Item>

        <Form.Item
          label="Upload Resume"
          name="file"
          rules={[{ required: true, message: "Please upload your resume" }]}
          valuePropName="file"
          getValueFromEvent={(e) => e}
        >
          <Upload beforeUpload={() => false} maxCount={1}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit Application
          </Button>
        </Form.Item>

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
