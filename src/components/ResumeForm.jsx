import React, { useState } from "react";

// Capitalize first letter of every word
const capitalizeWords = (text) =>
  text.replace(/\b\w/g, (char) => char.toUpperCase());

const ResumeForm = ({ formData, setFormData, formErrors }) => {
  const [skillInput, setSkillInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value.trimStart() }));
  };

  const handleBlurCapitalize = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: capitalizeWords(value.trim()) }));
  };

  // --- Education ---
  const handleEducationChange = (index, e) => {
    const updated = [...formData.education];
    updated[index][e.target.name] = e.target.value.trimStart();
    setFormData((prev) => ({ ...prev, education: updated }));
  };

  const capitalizeEducation = (index, e) => {
    const updated = [...formData.education];
    const { name, value } = e.target;
    updated[index][name] = capitalizeWords(value.trim());
    setFormData((prev) => ({ ...prev, education: updated }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, { school: "", degree: "", grade: "", startYear: "", endYear: "" }],
    }));
  };

  const removeEducation = (i) => {
    const updated = [...formData.education];
    updated.splice(i, 1);
    setFormData((prev) => ({ ...prev, education: updated }));
  };

  // --- Projects ---
  const handleProjectChange = (index, e) => {
    const updated = [...formData.projects];
    updated[index][e.target.name] = e.target.value.trimStart();
    setFormData((prev) => ({ ...prev, projects: updated }));
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, { title: "", link: "", description: "", timeline: "" }],
    }));
  };

  const removeProject = (i) => {
    const updated = [...formData.projects];
    updated.splice(i, 1);
    setFormData((prev) => ({ ...prev, projects: updated }));
  };

  // --- Experience ---
  const handleExperienceChange = (index, e) => {
    const updated = [...formData.experience];
    updated[index][e.target.name] = e.target.value.trimStart();
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, { title: "", description: "", timeline: "" }],
    }));
  };

  const removeExperience = (i) => {
    const updated = [...formData.experience];
    updated.splice(i, 1);
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  // --- Skills ---
  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();
      if (!formData.skills.includes(skillInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          skills: [...prev.skills, capitalizeWords(skillInput.trim())],
        }));
      }
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    const updated = [...formData.skills];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, skills: updated }));
  };

  return (
    <div className="card bg-base-100 shadow-lg p-6 space-y-6 overflow-y-auto max-h-[90vh]">

      {/* Personal Info */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input name="name" placeholder="Full Name" className="input input-bordered w-full" value={formData.name} onChange={handleChange} onBlur={handleBlurCapitalize} />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          </div>
          <input name="role" placeholder="Role (e.g. Software Engineer)" className="input input-bordered w-full capitalize" value={formData.role} onChange={handleChange} onBlur={handleBlurCapitalize} />
          <div>
            <input name="email" placeholder="Email" type="email" className="input input-bordered w-full" value={formData.email} onChange={handleChange} />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>
          <input name="phone" placeholder="Phone Number" className="input input-bordered w-full" value={formData.phone} onChange={handleChange} />
          <input name="location" placeholder="Location" className="input input-bordered w-full capitalize" value={formData.location} onChange={handleChange} onBlur={handleBlurCapitalize} />
          <input name="linkedin" placeholder="LinkedIn URL" className="input input-bordered w-full" value={formData.linkedin} onChange={handleChange} />
          <input name="github" placeholder="GitHub URL" className="input input-bordered w-full" value={formData.github} onChange={handleChange} />
          <input name="leetcode" placeholder="LeetCode URL" className="input input-bordered w-full" value={formData.leetcode} onChange={handleChange} />
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {formData.education.map((edu, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            <input name="school" placeholder="Institute Name" className="input input-bordered capitalize" value={edu.school} onChange={(e) => handleEducationChange(i, e)} onBlur={(e) => capitalizeEducation(i, e)} />
            <input name="degree" placeholder="Degree" className="input input-bordered capitalize" value={edu.degree} onChange={(e) => handleEducationChange(i, e)} onBlur={(e) => capitalizeEducation(i, e)} />
            <input name="grade" placeholder="Grade/GPA" className="input input-bordered" value={edu.grade} onChange={(e) => handleEducationChange(i, e)} />
            <input name="startYear" placeholder="Start Year" className="input input-bordered" value={edu.startYear} onChange={(e) => handleEducationChange(i, e)} />
            <input name="endYear" placeholder="End Year" className="input input-bordered" value={edu.endYear} onChange={(e) => handleEducationChange(i, e)} />
            <button className="btn btn-error btn-sm" onClick={() => removeEducation(i)}>Remove</button>
          </div>
        ))}
        <button className="btn btn-outline btn-sm" onClick={addEducation}>+ Add Education</button>
        {formErrors.education && <p className="text-red-500 text-sm">{formErrors.education}</p>}
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        {formData.projects.map((proj, i) => (
          <div key={i} className="grid grid-cols-1 gap-4 mb-2">
            <input name="title" placeholder="Project Title" className="input input-bordered capitalize" value={proj.title} onChange={(e) => handleProjectChange(i, e)} onBlur={(e) => handleProjectChange(i, { target: { name: "title", value: capitalizeWords(proj.title) } })} />
            <input name="link" placeholder="Project URL" className="input input-bordered" value={proj.link} onChange={(e) => handleProjectChange(i, e)} />
            <textarea name="description" placeholder="Description (use new lines)" className="textarea textarea-bordered" value={proj.description} onChange={(e) => handleProjectChange(i, e)} />
            <input name="timeline" placeholder="Timeline" className="input input-bordered" value={proj.timeline} onChange={(e) => handleProjectChange(i, e)} />
            <button className="btn btn-error btn-sm" onClick={() => removeProject(i)}>Remove</button>
          </div>
        ))}
        <button className="btn btn-outline btn-sm" onClick={addProject}>+ Add Project</button>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        {formData.experience.map((exp, i) => (
          <div key={i} className="grid grid-cols-1 gap-4 mb-2">
            <input name="title" placeholder="Role or Title" className="input input-bordered capitalize" value={exp.title} onChange={(e) => handleExperienceChange(i, e)} onBlur={(e) => handleExperienceChange(i, { target: { name: "title", value: capitalizeWords(exp.title) } })} />
            <textarea name="description" placeholder="Description (use new lines)" className="textarea textarea-bordered" value={exp.description} onChange={(e) => handleExperienceChange(i, e)} />
            <input name="timeline" placeholder="Timeline" className="input input-bordered" value={exp.timeline} onChange={(e) => handleExperienceChange(i, e)} />
            <button className="btn btn-error btn-sm" onClick={() => removeExperience(i)}>Remove</button>
          </div>
        ))}
        <button className="btn btn-outline btn-sm" onClick={addExperience}>+ Add Experience</button>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <input type="text" placeholder="Press Enter to add" className="input input-bordered w-full" value={skillInput} onChange={(e) => setSkillInput(e.target.value.trimStart())} onKeyDown={handleSkillKeyDown} />
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.skills.map((skill, i) => (
            <span key={i} className="badge badge-outline">
              {skill}
              <button className="ml-1" onClick={() => removeSkill(i)}>✕</button>
            </span>
          ))}
        </div>
        {formErrors.skills && <p className="text-red-500 text-sm mt-1">{formErrors.skills}</p>}
      </section>
    </div>
  );
};

export default ResumeForm;
