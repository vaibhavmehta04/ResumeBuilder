import React from "react";

const ModernTemplate = ({ data }) => {
  const {
    name,
    role,
    email,
    phone,
    location,
    linkedin,
    github,
    leetcode,
    education,
    experience,
    projects,
    skills,
  } = data;

  return (
    <div className="flex bg-white rounded-lg overflow-hidden shadow-lg text-sm leading-relaxed border border-gray-300">
      {/* Sidebar */}
      <aside className="w-1/3 bg-blue-50 text-blue-900 p-6 space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-blue-800">{name || "Your Name"}</h1>
          <h2 className="text-blue-500 font-medium">{role || "Role/Title"}</h2>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-1">Contact</h3>
          <ul className="space-y-1">
            {email && <li>📧 {email}</li>}
            {phone && <li>📞 {phone}</li>}
            {location && <li>📍 {location}</li>}
            {linkedin && <li>🔗 {linkedin}</li>}
            {github && <li>💻 {github}</li>}
            {leetcode && <li>🏆 {leetcode}</li>}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-1">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="badge badge-outline text-blue-800 border-blue-300 bg-white">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Section */}
      <main className="w-2/3 p-6 space-y-8">
        {/* Summary */}


        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h3 className="text-xl font-bold border-b-2 border-blue-100 pb-1 mb-2">Work Experience</h3>
            {experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between font-semibold text-blue-900">
                  <div>{exp.title}</div>
                  <div className="text-sm text-gray-500">{exp.timeline}</div>
                </div>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                  {exp.description?.split("\n").map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h3 className="text-xl font-bold border-b-2 border-blue-100 pb-1 mb-2">Projects</h3>
            {projects.map((proj, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between font-semibold text-blue-900">
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {proj.title}
                  </a>
                  <div className="text-sm text-gray-500">{proj.timeline}</div>
                </div>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                  {proj.description?.split("\n").map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h3 className="text-xl font-bold border-b-2 border-blue-100 pb-1 mb-2">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="mb-2">
                <div className="flex justify-between font-semibold text-blue-900">
                  <div>{edu.school}</div>
                  <div className="text-sm text-gray-500">
                    {edu.startYear} – {edu.endYear}
                  </div>
                </div>
                <div className="text-sm text-gray-700">{edu.degree}</div>
                {edu.grade && <div className="text-sm text-gray-500">Grade: {edu.grade}</div>}
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default ModernTemplate;
