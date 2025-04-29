export const Todo = ({ title, id, deleteOne }) => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2 border border-gray-300 rounded-2xl shadow-sm bg-white hover:shadow-md transition">
      <div className="text-gray-800 text-base">{title}</div>
      <button
        aria-label={`Delete todo: ${title}`}
        className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition px-4 py-1 rounded-full font-semibold"
        onClick={() => deleteOne(id)}
      >
        Delete
      </button>
    </div>
  );
};
