import { useState } from "react";

const ResumeForm = ({ resumeData, setResumeData }) => {

    const [skillInput, setSkillInput] = useState("");

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

    const addSkill = () => {

        if (!skillInput) return;

        setResumeData({
            ...resumeData,
            skills: [...resumeData.skills, skillInput]
        });

        setSkillInput("");
    };

    return (
        <div className="space-y-4">

            <h2 className="text-xl font-semibold">Personal Info</h2>

            <input
                className="border p-2 w-full"
                placeholder="Full Name"
                name="full_name"
                onChange={handleChange}
                value={resumeData?.personal_info?.full_name || ""}
            />

            <input
                className="border p-2 w-full"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={resumeData?.personal_info?.email || ""}
            />

            <input
                className="border p-2 w-full"
                placeholder="Phone"
                name="phone"
                onChange={handleChange}
                value={resumeData?.personal_info?.phone || ""}
            />

            <input
                className="border p-2 w-full"
                placeholder="Location"
                name="location"
                onChange={handleChange}
                value={resumeData?.personal_info?.location || ""}
            />

            <input
                className="border p-2 w-full"
                placeholder="Profession"
                name="profession"
                onChange={handleChange}
                value={resumeData?.personal_info?.profession || ""}
            />

            <textarea
                className="border p-2 w-full"
                placeholder="Professional Summary"
                value={resumeData?.professional_summary || ""}
                onChange={(e) =>
                    setResumeData({
                        ...resumeData,
                        professional_summary: e.target.value
                    })
                }
            />

            <h2 className="text-xl font-semibold">Skills</h2>

            <div className="flex gap-2">
                <input
                    className="border p-2 flex-1"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="Add Skill"
                />

                <button
                    onClick={addSkill}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add
                </button>
            </div>

        </div>
    );
};

export default ResumeForm;