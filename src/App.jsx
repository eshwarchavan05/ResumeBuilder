import React, { useState } from "react";

import ClassicTemplate from "./templates/ClassicTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import MinimalImageTemplate from "./templates/MinimalImageTemplate";
import ModernTemplate from "./templates/ModernTemplate";

import { dummyResumeData } from "../assets/assets";

import ResumeForm from "./components/ResumeForm";
import DownloadButton from "./components/DownloadButton";

const templates = {
    classic: ClassicTemplate,
    minimal: MinimalTemplate,
    "minimal-image": MinimalImageTemplate,
    modern: ModernTemplate,
};

function App() {

    const [mode, setMode] = useState("preview");

    const [selectedTemplate, setSelectedTemplate] = useState("classic");
    const [resumeIndex, setResumeIndex] = useState(0);

    const [resumeData, setResumeData] = useState(dummyResumeData?.[0] || {});

    const TemplateComponent = templates[selectedTemplate];

    const data =
        mode === "preview"
            ? dummyResumeData?.[resumeIndex] || {}
            : resumeData;

    return (
        <div className="min-h-screen py-10 px-4 bg-gray-100">

            <div className="max-w-6xl mx-auto">

                {/* MODE SWITCH */}
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setMode("preview")}
                        className={`px-4 py-2 rounded ${mode === "preview"
                                ? "bg-blue-600 text-white"
                                : "bg-white border"
                            }`}
                    >
                        Preview Mode
                    </button>

                    <button
                        onClick={() => setMode("builder")}
                        className={`px-4 py-2 rounded ${mode === "builder"
                                ? "bg-blue-600 text-white"
                                : "bg-white border"
                            }`}
                    >
                        Builder Mode
                    </button>
                </div>

                {/* HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Resume Builder
                        </h1>
                        <p className="text-gray-500">
                            Select template and build your resume
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">

                        {/* TEMPLATE SELECTOR */}
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                Template
                            </label>

                            <select
                                value={selectedTemplate}
                                onChange={(e) => setSelectedTemplate(e.target.value)}
                                className="bg-gray-50 border border-gray-200 rounded-lg p-2.5"
                            >
                                <option value="classic">Classic</option>
                                <option value="minimal">Minimal</option>
                                <option value="minimal-image">Minimal Image</option>
                                <option value="modern">Modern</option>
                            </select>
                        </div>

                        {/* DUMMY DATA SELECTOR */}
                        {mode === "preview" && (
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Dummy Data
                                </label>

                                <select
                                    value={resumeIndex}
                                    onChange={(e) =>
                                        setResumeIndex(parseInt(e.target.value))
                                    }
                                    className="bg-gray-50 border border-gray-200 rounded-lg p-2.5"
                                >
                                    {dummyResumeData.map((item, idx) => (
                                        <option key={idx} value={idx}>
                                            {item.personal_info?.full_name || "Resume"}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* FORM */}
                    {mode === "builder" && (
                        <ResumeForm
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                        />
                    )}

                    {/* PREVIEW */}
                    <div
                        id="resume"
                        className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 min-h-[1000px]"
                    >
                        {TemplateComponent && (
                            <TemplateComponent
                                data={data}
                                accentColor={data?.accent_color || "#14B8A6"}
                            />
                        )}
                    </div>

                </div>

                {/* DOWNLOAD BUTTON */}
                {mode === "builder" && (
                    <div className="mt-6">
                        <DownloadButton />
                    </div>
                )}

            </div>
        </div>
    );
}

export default App;