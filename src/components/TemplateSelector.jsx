const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {

    return (
        <div>

            <h2 className="text-xl font-semibold mb-2">
                Select Template
            </h2>

            <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="border p-2 w-full rounded"
            >

                <option value="classic">Classic</option>
                <option value="minimal">Minimal</option>
                <option value="minimal-image">Minimal Image</option>
                <option value="modern">Modern</option>

            </select>

        </div>
    );
};

export default TemplateSelector;