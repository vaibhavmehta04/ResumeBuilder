import React from "react";

const MinimalTemplate = ({ data }) => {
  const {
    name,
    role,
    email,
    phone,
    linkedin,
    github,
    leetcode,
    education,
    experience,
    projects,
    skills,
  } = data;

  return (
    <div className="bg-white text-gray-800 px-12 py-10 font-sans max-w-4xl mx-auto leading-relaxed">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-green-800">{name || "Your Name"}</h1>
        <p className="text-lg text-gray-600">{role || "Role/Title"}</p>
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-2">
          {phone && <span>📞 {phone}</span>}
          {email && <span>✉️ {email}</span>}
          {linkedin && <span>🔗 {linkedin}</span>}
          {github && <span>💻 {github}</span>}
          {leetcode && <span>🏆 {leetcode}</span>}
        </div>
      </div>

      {/* Achievements */}
      {projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-2">Achievements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((proj, i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-800">{proj.title}</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                  {proj.description?.split("\n").map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-2">Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between font-semibold">
                <span>{exp.title}</span>
                <span className="text-sm text-gray-500">{exp.timeline}</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                {exp.description?.split("\n").map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-green-800 mb-2">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between font-semibold text-gray-800">
                <span>{edu.school}</span>
                <span className="text-sm text-gray-500">{edu.startYear} – {edu.endYear}</span>
              </div>
              <p className="text-sm">{edu.degree}</p>
              {edu.grade && <p className="text-xs text-gray-500">Grade: {edu.grade}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-green-800 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            {skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 border border-green-500 rounded-full text-green-700">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
