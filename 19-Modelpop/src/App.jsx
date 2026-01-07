import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        Open Modal
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-3">Modal Title</h2>
            <p className="text-gray-600 mb-6">
              This is a Tailwind modal popup.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md border"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md bg-black text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
