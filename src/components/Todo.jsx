
export const Todo = ({ title, id, deleteOne }) => {
    return (
        <div className="flex gap-2 border-2 p-2 rounded-xl justify-between">
            <li>{title}</li>
            <button className="text-red-500 rounded-full border border-red-500 px-2 py-0.5 cursor-pointer" onClick={() => { deleteOne(id) }}>X</button>
        </div>
    )
}
