import { FaPlus } from "react-icons/fa6";

const AddTask = () => {
    return (
        <div>
            <button className="btn btn-primary w-full flex items-center justify-center">
                <span className="font-bold text-white">Add Task</span>
                <FaPlus className="text-white"/>
            </button>
        </div>
    )
}

export default AddTask;

