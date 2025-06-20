import React from "react";

const ClassicTemplate = ({ data }) => {
  const linkStyle = "text-black hover:underline";

  return (
    <div className="bg-white text-black p-6 max-w-3xl mx-auto rounded shadow font-sans space-y-6">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">{data.name || "Your Name"}</h1>
        <p className="text-lg font-semibold opacity-80">{data.role || "Software Engineer"}</p>
      </div>

      {/* Contact */}
{/* Contact Info */}
<div className="text-sm flex flex-wrap justify-center gap-4 text-gray-700">
  {data.email && <span>{data.email}</span>}
  {data.phone && <span>{data.phone}</span>}
  {data.location && <span>{data.location}</span>}
  {data.linkedin && <a href={data.linkedin} className="text-black" target="_blank" rel="noopener noreferrer">LinkedIn</a>}
  {data.github && <a href={data.github} className="text-black" target="_blank" rel="noopener noreferrer">GitHub</a>}
  {data.leetcode && <a href={data.leetcode} className="text-black" target="_blank" rel="noopener noreferrer">LeetCode</a>}
</div>


      {/* Education */}
{data.education.length > 0 && (
  <section>
    <h2 className="text-xl font-bold border-b pb-1 mb-2">Education</h2>
    {data.education.map((edu, i) => (
      <div key={i} className="flex justify-between items-start mb-3">
        <div className="w-full pr-4">
          <div className="font-semibold">{edu.school}</div>
          <div className="text-sm text-gray-700">{edu.degree}</div>
          {edu.grade && (
            <div className="text-sm text-gray-500">Grade: {edu.grade}</div>
          )}
        </div>
        <div className="text-sm text-gray-600 whitespace-nowrap">
          {edu.startYear} – {edu.endYear}
        </div>
      </div>
    ))}
  </section>
)}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section>
          <h2 className="text-xl font-bold border-b pb-1 mb-2">Skills</h2>
          <p className="text-sm">{data.skills.join(", ")}</p>
        </section>
      )}

      {/* Projects */}
{data.projects.length > 0 && (
  <section>
    <h2 className="text-xl font-bold border-b pb-1 mb-2">Projects</h2>
    {data.projects.map((proj, i) => (
      <div key={i} className="flex justify-between items-start mb-3">
        <div className="w-full pr-4">
          <div className="font-semibold">
            <a href={proj.link} className="text-black" target="_blank" rel="noopener noreferrer">
              {proj.title}
            </a>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {proj.description?.split("\n").map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-gray-600 whitespace-nowrap">
          {proj.timeline}
        </div>
      </div>
    ))}
  </section>
)}

      {/* Experience */}
{data.experience.length > 0 && (
  <section>
    <h2 className="text-xl font-bold border-b pb-1 mb-2">Experience</h2>
    {data.experience.map((exp, i) => (
      <div key={i} className="flex justify-between items-start mb-4">
        <div className="w-full pr-4">
          <div className="font-semibold">{exp.title}</div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {exp.description?.split("\n").map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-gray-600 whitespace-nowrap">
          {exp.timeline}
        </div>
      </div>
    ))}
  </section>
)}
    </div>
  );
};

export default ClassicTemplate;
