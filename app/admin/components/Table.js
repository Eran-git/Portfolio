export default function Table({ projects, onEdit, onDelete }) {
    return (
        <div className="w-full md:overflow-hidden overflow-x-auto rounded-xl border border-gray-200 shadow-md">
            <table className="w-full min-w-[900px] border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-800 text-gray-100">
                    <tr className="border">
                        <th className="px-6 py-4 font-semibold">ID</th>
                        <th className="px-6 py-4 font-semibold">Title</th>
                        <th className="px-6 py-4 font-semibold">Description</th>
                        <th className="px-6 py-4 font-semibold">TechStack</th>
                        <th className="px-6 py-4 font-semibold">Image</th>
                        <th className="px-6 py-4 font-semibold">Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {projects.map((project, index) => (
                        <tr
                            key={project._id}
                            className="hover:bg-gray-50 transition-colors duration-200"
                        >
                            <td className="px-6 py-4 font-medium text-gray-900">
                                {index + 1}
                            </td>

                            <td className="px-6 py-4 font-medium text-gray-900">
                                {project.title}
                            </td>

                            <td className="px-6 py-4 max-w-[220px]">
                                <p className="line-clamp-2">
                                    {project.description}
                                </p>
                            </td>

                            <td className="px-6 py-4 max-w-[220px]">
                                <p className="line-clamp-2">
                                    {project.techStack?.join(", ")}
                                </p>
                            </td>



                            <td className="px-6 py-4">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-14 h-14 rounded object-cover border"
                                    />
                                ) : (
                                    <span className="text-gray-400">
                                        No Image
                                    </span>
                                )}
                            </td>

                            <td className="px-6 py-4">
                                <div className="flex justify-center gap-2">
                                    <button
                                        onClick={() => onEdit(project)}
                                        className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm ring-1 ring-inset ring-blue-700/10 hover:bg-blue-100 transition"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => onDelete(project)}
                                        className="inline-flex items-center gap-1 rounded-md bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 shadow-sm ring-1 ring-inset ring-red-700/10 hover:bg-red-100 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}