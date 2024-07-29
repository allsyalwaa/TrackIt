import { useState, useEffect } from "react";
import EditNotes from "../editcontent/EditNotes";
import { fetchNoteDetails } from "../../../utils/fetchdata/NotesService";

export default function DetailNotes({ id, onClose }) {
  const [isNotesPopupOpen, setIsNotesPopupOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      try {
        const data = await fetchNoteDetails(id);
        setTitle(data.name);
        setDescription(data.description);
        setDate(data.date);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, [id]);

  const handleOpenNotesPopup = () => {
    setIsNotesPopupOpen(true);
  };

  const handleCloseNotesPopup = () => {
    setIsNotesPopupOpen(false);
  };

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            isNotesPopupOpen ? "bg-transparent" : "bg-black/50"
          }`}
        >
          <div className="w-full max-w-xs rounded-lg bg-white p-6 shadow-lg md:max-w-2xl">
            <div className="mb-1 flex justify-end">
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
              <div className="flex w-full flex-col justify-start">
                <p className="mb-2 text-xs font-medium text-primary/50">
                  {date}
                </p>
                <div className="flex justify-between">
                  <h1 className="w-full border-none text-xl font-semibold text-secondary">
                    {title}
                  </h1>

                  <button
                    onClick={handleOpenNotesPopup}
                    className="text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.3em"
                      height="1.3em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
                      />
                    </svg>
                  </button>
                </div>
                <hr className="border-t-1 mt-2 w-full border-secondary" />
                <div className="h-[299px]">
                  <p className="mt-4 border-none text-primary">{description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {isNotesPopupOpen && (
        <EditNotes onClose={handleCloseNotesPopup} noteId={id} />
      )}
    </>
  );
}
