import { useState, useEffect } from "react";
import Button from "./Button";

export default function EditNotes({ onClose, noteId }) {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    console.log("BASE_URL:", BASE_URL); // Log BASE_URL
    console.log("noteId:", noteId); // Log noteId

    // Fetch the existing note data when the component is mounted
    const fetchNoteData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/notes/${noteId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log data fetched
        setTitle(data.name);
        setDescription(data.description);
      } catch (error) {
        console.error("Error fetching note data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (noteId) {
      fetchNoteData();
    }
  }, [noteId, BASE_URL]);

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Buat objek yang berisi data form
    const noteData = {
      name: title,
      description: description,
    };

    try {
      // Kirim data ke server menggunakan method PUT untuk memperbarui catatan
      const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      });
      console.log(await response.json());
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      // Reset form dan tutup popup jika berhasil
      setTitle("");
      setDescription("");
      closePopup();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-xs rounded-lg bg-white p-6 shadow-lg md:max-w-2xl">
            <div className="mb-4 flex justify-end">
              <button onClick={closePopup} className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
                  />
                </svg>
              </button>
            </div>

            {isLoading ? (
              <div className="flex justify-center text-sm text-primary">
                <p>Loading...</p>
              </div>
            ) : (
              <form
                className="mt-4 flex w-full flex-col justify-start"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border-none text-xl font-semibold text-secondary  outline-none"
                />
                <hr className="border-t-1 mt-2 w-full border-secondary" />

                <textarea
                  className="mt-4 h-56 rounded-lg border-[1.5px] border-primary/50 px-4 py-1 text-primary  outline-none"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <div className="mt-6 flex justify-end">
                  <Button
                    className={"md:w-1/6"}
                    variant="primary"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
