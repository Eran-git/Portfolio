'use client';

import { useState, useEffect, useCallback } from "react";
import Table from "../components/Table";
import AddProjectModal from "../components/AddProjectModal";
import EditProjectModal from "../components/EditProjectModal";
import DeleteModal from "../components/DeleteModal";

export default function DataManagement() {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [projects, setProjects] = useState([]);

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const fetchProjects = useCallback(async () => {
        const response = await fetch("/api/projects");
        const data = await response.json();

        if (data.success) {
            setProjects(data.projects);
        }
    }, []);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    const handleEdit = (project) => {
        setSelectedProject(project);
        setIsEditOpen(true);
    };

    const handleDelete = (project) => {
        setSelectedProject(project);
        setIsDeleteOpen(true);
    };

    const deleteProject = async () => {
        const response = await fetch(
            `/api/projects/${selectedProject._id}`,
            {
                method: "DELETE",
            }
        );

        const data = await response.json();

        if (data.success) {
            fetchProjects();
            setIsDeleteOpen(false);
        }
    };

    return (
        <>
            <div className="bg-white/90 min-h-screen w-full p-4 py-25">
                <div className="flex flex-col gap-6 items-center">

                    <h1 className="text-2xl md:text-5xl font-bold text-black">
                        Data Management
                    </h1>

                    {/* Scrollable Table */}
                    <div className="w-full overflow-x-auto">
                        <Table
                            projects={projects}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    </div>

                    <button
                        onClick={() => setIsAddOpen(true)}
                        className="bg-blue-300 font-bold text-black px-5 py-2 rounded hover:bg-blue-500 transition"
                    >
                        Add Project
                    </button>

                </div>

                <AddProjectModal
                    isOpen={isAddOpen}
                    onClose={() => setIsAddOpen(false)}
                    fetchProjects={fetchProjects}
                />

                <EditProjectModal
                    isOpen={isEditOpen}
                    onClose={() => setIsEditOpen(false)}
                    project={selectedProject}
                    fetchProjects={fetchProjects}
                />

                <DeleteModal
                    isOpen={isDeleteOpen}
                    onClose={() => setIsDeleteOpen(false)}
                    project={selectedProject}
                    onDelete={deleteProject}
                />
            </div>
        </>
    );
}