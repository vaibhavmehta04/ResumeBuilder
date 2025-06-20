import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Palette, Layers } from "lucide-react";
import Navbar from "./Navbar";

const templates = [
  { name: "Classic", id: "classic", icon: <Layout className="w-8 h-8" /> },
  { name: "Modern", id: "modern", icon: <Palette className="w-8 h-8" /> },
  { name: "Minimal", id: "minimal", icon: <Layers className="w-8 h-8" /> },
];

const TemplateSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-100 text-base-content">
      {/* ✅ Navbar with theme toggle */}
      <Navbar />

      {/* ✅ Main content */}
      <div className="max-w-5xl mx-auto text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-4">
          Pick Your <span className="text-primary">Resume Template</span>
        </h1>
        <p className="text-lg text-gray-500 mb-12">
          Choose from professional templates and build your standout resume in minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              onClick={() => navigate(`/builder/${tpl.id}`)}
              className="group cursor-pointer relative overflow-hidden bg-base-100 border border-base-300 rounded-xl shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1"
            >
              <div className="flex flex-col justify-center items-center space-y-3">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  {tpl.icon}
                </div>
                <h2 className="text-xl font-semibold group-hover:text-primary">
                  {tpl.name}
                </h2>
                <p className="text-sm text-gray-500 text-center">
                  A clean and customizable layout for your resume.
                </p>
<button
  className="btn btn-outline btn-sm mt-4 transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white"
>
  Use {tpl.name}
</button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
