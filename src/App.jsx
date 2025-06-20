import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import PdfDownloader from "./components/PdfDownloader";
// import ATSEvaluator from "./components/ATSEvaluator";

function App() {
  const { template } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    leetcode: "",
    education: [],
    experience: [],
    projects: [],
    skills: [],
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      errors.email = "Valid email is required";
    if (!formData.education.length)
      errors.education = "Add at least one education entry";
    if (!formData.skills.length)
      errors.skills = "Add at least one skill";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main className="p-4 grid lg:grid-cols-2 gap-6">
        {/* Form Section */}
        <ResumeForm
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
        />

        {/* Preview + Sticky Button Section */}
        <div className="flex flex-col items-center relative h-full">
          <div id="resume-preview" className="w-full bg-white p-4 rounded shadow">
            <ResumePreview data={formData} template={template} />
          </div>

          {/* Sticky Download Button */}
<div className="fixed bottom-6 right-6 z-50 group">
  <button
    onClick={() => {
      if (validate()) {
        const event = new CustomEvent("download-pdf");
        window.dispatchEvent(event);
      }
    }}
    className="flex items-center gap-3 bg-primary text-white rounded-full px-4 py-3 shadow-lg transition-all duration-300 ease-out hover:pr-6 hover:shadow-xl"
  >
    {/* Circular Icon */}
    <span className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center text-2xl font-bold transition-transform duration-300 ease-in-out group-hover:scale-110">
      ↓
    </span>

    {/* Expandable Text */}
    <span className="hidden group-hover:inline-block text-sm font-semibold transition-all duration-300">
      Download as PDF
    </span>
  </button>
</div>


          {/* <ATSEvaluator resumeData={formData} /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
