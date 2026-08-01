'use client';

export default function DeleteModal({isOpen, onClose, project, onDelete }) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center">

            <div className="bg-white p-8 rounded-xl text-black w-[400px]">

                <h1 className="text-2xl font-bold">
                    Delete Project
                </h1>

                <p className="mt-5">
                    Are you sure you want to delete
                    <strong> {project?.title}</strong> ?
                </p>

                <div className="flex justify-end gap-4 mt-8">

                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onDelete}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}