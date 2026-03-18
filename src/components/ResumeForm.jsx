import { useState } from "react";

const ResumeForm = ({ resumeData, setResumeData }) => {

    const [skillInput, setSkillInput] = useState("");

    // ── Personal Info ──
    const handleChange = (e) => {
        const { name, value } = e.target;
        setResumeData({
            ...resumeData,
            personal_info: {
                ...resumeData.personal_info,
                [name]: value
            }
        });
    };

    // ── Photo Upload ──
    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            setResumeData({
                ...resumeData,
                personal_info: {
                    ...resumeData.personal_info,
                    image: reader.result
                }
            });
        };
        reader.readAsDataURL(file);
    };

    // ── Skills ──
    const addSkill = () => {
        if (!skillInput.trim()) return;
        setResumeData({
            ...resumeData,
            skills: [...(resumeData.skills || []), skillInput.trim()]
        });
        setSkillInput("");
    };

    const removeSkill = (index) => {
        setResumeData({
            ...resumeData,
            skills: resumeData.skills.filter((_, i) => i !== index)
        });
    };

    // ── Experience ──
    const addExperience = () => {
        setResumeData({
            ...resumeData,
            experience: [
                ...(resumeData.experience || []),
                { company: "", position: "", start_date: "", end_date: "", description: "", is_current: false }
            ]
        });
    };

    const updateExperience = (index, field, value) => {
        const updated = [...(resumeData.experience || [])];
        updated[index] = { ...updated[index], [field]: value };
        setResumeData({ ...resumeData, experience: updated });
    };

    const removeExperience = (index) => {
        setResumeData({
            ...resumeData,
            experience: resumeData.experience.filter((_, i) => i !== index)
        });
    };

    // ── Education ──
    const addEducation = () => {
        setResumeData({
            ...resumeData,
            education: [
                ...(resumeData.education || []),
                { institution: "", degree: "", field: "", graduation_date: "", gpa: "" }
            ]
        });
    };

    const updateEducation = (index, field, value) => {
        const updated = [...(resumeData.education || [])];
        updated[index] = { ...updated[index], [field]: value };
        setResumeData({ ...resumeData, education: updated });
    };

    const removeEducation = (index) => {
        setResumeData({
            ...resumeData,
            education: resumeData.education.filter((_, i) => i !== index)
        });
    };

    // ── Projects ──
    const addProject = () => {
        setResumeData({
            ...resumeData,
            project: [
                ...(resumeData.project || []),
                { name: "", type: "", description: "" }
            ]
        });
    };

    const updateProject = (index, field, value) => {
        const updated = [...(resumeData.project || [])];
        updated[index] = { ...updated[index], [field]: value };
        setResumeData({ ...resumeData, project: updated });
    };

    const removeProject = (index) => {
        setResumeData({
            ...resumeData,
            project: resumeData.project.filter((_, i) => i !== index)
        });
    };

    // ── Shared Styles ──
    const inputClass = "border border-gray-200 p-2.5 w-full rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-200";
    const sectionTitle = "text-lg font-semibold text-gray-800";
    const addBtnClass = "bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-blue-200";
    const removeBtnClass = "text-red-400 hover:text-red-600 text-xs font-medium transition-colors";
    const cardClass = "bg-gray-50 p-4 rounded-lg border border-gray-100 space-y-2";

    return (
        <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-h-[80vh] overflow-y-auto">

            {/* ── Photo Upload ── */}
            <div>
                <h2 className={sectionTitle}>Profile Photo</h2>
                <div className="flex items-center gap-4 mt-2">
                    {resumeData?.personal_info?.image && (
                        <img
                            src={resumeData.personal_info.image}
                            alt="Preview"
                            className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                        />
                    )}
                    <label className={addBtnClass + " cursor-pointer"}>
                        {resumeData?.personal_info?.image ? "Change" : "Upload Photo"}
                        <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                    </label>
                    {resumeData?.personal_info?.image && (
                        <button
                            onClick={() => setResumeData({
                                ...resumeData,
                                personal_info: { ...resumeData.personal_info, image: null }
                            })}
                            className={removeBtnClass}
                        >
                            Remove
                        </button>
                    )}
                </div>
            </div>

            {/* ── Personal Info ── */}
            <div>
                <h2 className={sectionTitle}>Personal Info</h2>
                <div className="space-y-2 mt-2">
                    <input className={inputClass} placeholder="Full Name" name="full_name" onChange={handleChange} value={resumeData?.personal_info?.full_name || ""} />
                    <input className={inputClass} placeholder="Email" name="email" onChange={handleChange} value={resumeData?.personal_info?.email || ""} />
                    <input className={inputClass} placeholder="Phone" name="phone" onChange={handleChange} value={resumeData?.personal_info?.phone || ""} />
                    <input className={inputClass} placeholder="Location" name="location" onChange={handleChange} value={resumeData?.personal_info?.location || ""} />
                    <input className={inputClass} placeholder="Profession / Title" name="profession" onChange={handleChange} value={resumeData?.personal_info?.profession || ""} />
                    <input className={inputClass} placeholder="LinkedIn URL" name="linkedin" onChange={handleChange} value={resumeData?.personal_info?.linkedin || ""} />
                    <input className={inputClass} placeholder="Website / Portfolio URL" name="website" onChange={handleChange} value={resumeData?.personal_info?.website || ""} />
                </div>
            </div>

            {/* ── Professional Summary ── */}
            <div>
                <h2 className={sectionTitle}>Professional Summary</h2>
                <textarea
                    className={inputClass + " min-h-[80px] mt-2"}
                    placeholder="Write a brief professional summary..."
                    value={resumeData?.professional_summary || ""}
                    onChange={(e) => setResumeData({ ...resumeData, professional_summary: e.target.value })}
                />
            </div>

            {/* ── Experience ── */}
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h2 className={sectionTitle}>Experience</h2>
                    <button onClick={addExperience} className={addBtnClass}>+ Add</button>
                </div>

                <div className="space-y-3">
                    {(resumeData?.experience || []).map((exp, index) => (
                        <div key={index} className={cardClass}>
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-semibold text-gray-400 uppercase">Experience {index + 1}</span>
                                <button onClick={() => removeExperience(index)} className={removeBtnClass}>Remove</button>
                            </div>
                            <input className={inputClass} placeholder="Position / Job Title" value={exp.position || ""} onChange={(e) => updateExperience(index, "position", e.target.value)} />
                            <input className={inputClass} placeholder="Company" value={exp.company || ""} onChange={(e) => updateExperience(index, "company", e.target.value)} />
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className="text-xs text-gray-500">Start Date</label>
                                    <input type="month" className={inputClass} value={exp.start_date || ""} onChange={(e) => updateExperience(index, "start_date", e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500">End Date</label>
                                    <input type="month" className={inputClass} value={exp.end_date || ""} onChange={(e) => updateExperience(index, "end_date", e.target.value)} disabled={exp.is_current} />
                                </div>
                            </div>
                            <label className="flex items-center gap-2 text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    checked={exp.is_current || false}
                                    onChange={(e) => updateExperience(index, "is_current", e.target.checked)}
                                    className="rounded"
                                />
                                Currently working here
                            </label>
                            <textarea
                                className={inputClass + " min-h-[60px]"}
                                placeholder="Job description, responsibilities, achievements..."
                                value={exp.description || ""}
                                onChange={(e) => updateExperience(index, "description", e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Education ── */}
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h2 className={sectionTitle}>Education</h2>
                    <button onClick={addEducation} className={addBtnClass}>+ Add</button>
                </div>

                <div className="space-y-3">
                    {(resumeData?.education || []).map((edu, index) => (
                        <div key={index} className={cardClass}>
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-semibold text-gray-400 uppercase">Education {index + 1}</span>
                                <button onClick={() => removeEducation(index)} className={removeBtnClass}>Remove</button>
                            </div>
                            <input className={inputClass} placeholder="Degree (e.g. B.E., B.Tech, M.Sc)" value={edu.degree || ""} onChange={(e) => updateEducation(index, "degree", e.target.value)} />
                            <input className={inputClass} placeholder="Field of Study (e.g. Computer Science)" value={edu.field || ""} onChange={(e) => updateEducation(index, "field", e.target.value)} />
                            <input className={inputClass} placeholder="Institution / University" value={edu.institution || ""} onChange={(e) => updateEducation(index, "institution", e.target.value)} />
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className="text-xs text-gray-500">Graduation Date</label>
                                    <input type="month" className={inputClass} value={edu.graduation_date || ""} onChange={(e) => updateEducation(index, "graduation_date", e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500">GPA (optional)</label>
                                    <input className={inputClass} placeholder="e.g. 8.5" value={edu.gpa || ""} onChange={(e) => updateEducation(index, "gpa", e.target.value)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Projects ── */}
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h2 className={sectionTitle}>Projects</h2>
                    <button onClick={addProject} className={addBtnClass}>+ Add</button>
                </div>

                <div className="space-y-3">
                    {(resumeData?.project || []).map((proj, index) => (
                        <div key={index} className={cardClass}>
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-semibold text-gray-400 uppercase">Project {index + 1}</span>
                                <button onClick={() => removeProject(index)} className={removeBtnClass}>Remove</button>
                            </div>
                            <input className={inputClass} placeholder="Project Name" value={proj.name || ""} onChange={(e) => updateProject(index, "name", e.target.value)} />
                            <input className={inputClass} placeholder="Project Type (e.g. Web App, Mobile App)" value={proj.type || ""} onChange={(e) => updateProject(index, "type", e.target.value)} />
                            <textarea
                                className={inputClass + " min-h-[60px]"}
                                placeholder="Project description, tech stack, key features..."
                                value={proj.description || ""}
                                onChange={(e) => updateProject(index, "description", e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Skills ── */}
            <div>
                <h2 className={sectionTitle}>Skills</h2>
                <div className="flex gap-2 mt-2 mb-2">
                    <input
                        className={inputClass + " flex-1"}
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        placeholder="Add a skill"
                        onKeyDown={(e) => e.key === "Enter" && addSkill()}
                    />
                    <button onClick={addSkill} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Add
                    </button>
                </div>

                {resumeData?.skills?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                                {skill}
                                <button onClick={() => removeSkill(index)} className="text-gray-400 hover:text-red-500 ml-1">×</button>
                            </span>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default ResumeForm;