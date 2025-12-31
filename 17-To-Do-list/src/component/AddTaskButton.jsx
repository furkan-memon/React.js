const AddTaskButton = ({ editId }) => (
  <button
    type="submit"
    className="w-full bg-white text-black font-semibold py-2 rounded-lg"
  >
    {editId ? 'Update Task' : 'Add Task'}
  </button>
)

export default AddTaskButton
