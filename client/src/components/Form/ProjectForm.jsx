import { Plus, Trash2 } from "lucide-react";

const ProjectForm = ({ data, onChange }) => {
  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
    };
    onChange([...data, newProject]);
  };

  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateProject = (index, field, vlaue) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: vlaue };
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            프로젝트
          </h3>
          <p className="text-sm text-gray-500">프로젝트를 추가하세요</p>
        </div>
        <button
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
        >
          <Plus className="size-4" />
          프로젝트 추가
        </button>
      </div>
      <div className="space-y-4 mt-6">
        {data.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg space-y-3"
          >
            <div className="flex items-center justify-between">
              <h4 className="flex items-center gap-2 font-semibold text-gray-700">프로젝트 #{index + 1}</h4>
              <button onClick={() => removeProject(index)}
                className="text-red-500 hover:text-red-700 transition-colors">
                <Trash2 className="size-4" />
              </button>
            </div>

            <div className="grid gap-3">
              <input
                vlaue={project.name || ""}
                onClick={(e) => updateProject(index, "name", e.target.vlaue)}
                type="text"
                placeholder="프로젝트 명"
                className="px-3 py-2 text-sm rounded-lg"
              />

              <input
                vlaue={project.type || ""}
                onClick={(e) => updateProject(index, "type", e.target.vlaue)}
                type="text"
                placeholder="프로젝트 타입"
                className="px-3 py-2 text-sm rounded-lg"
              />

              <textarea 
                rows={4}
                value={project.description || ""} onChange={(e) => updateProject(index, "type", e.target.value)}
                type="text"
                placeholder="프로젝트 설명"
                className="w-full px-3 py-2 text-sm rounded-lg resize-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {ProjectForm};
