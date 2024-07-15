import { useState } from "react";
import EditNotes from "../editcontent/EditNotes";
import DetailNotes from "../detailcontent/DetailNotes";
import ConfirmDelete from "../ConfirmDelete";
import { handleDeleteNote } from "../../../utils/fetchdata/NotesService";

export default function CardNotes({ id, text1, text2, text3, onDelete }) {
  const [isNotesPopupOpen, setIsNotesPopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] =
    useState(false);
  const [isDetailNotesPopupOpen, setIsDetailNotesPopupOpen] = useState(false);

  const handleOpenNotesPopup = () => {
    setIsNotesPopupOpen(true);
  };

  const handleCloseNotesPopup = () => {
    setIsNotesPopupOpen(false);
  };

  const handleOpenConfirmDeletePopup = () => {
    setIsConfirmDeletePopupOpen(true);
  };

  const handleCloseConfirmDeletePopup = () => {
    setIsConfirmDeletePopupOpen(false);
  };

  const handleOpenDetailNotesPopup = () => {
    setIsDetailNotesPopupOpen(true);
  };

  const handleCloseDetailNotesPopup = () => {
    setIsDetailNotesPopupOpen(false);
  };

  const handleDelete = async () => {
    try {
      await handleDeleteNote(id);
      setIsConfirmDeletePopupOpen(false);
      onDelete(id);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="rounded-lg border-[1.5px] border-primary p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-2">
          <p className="text-xs font-medium text-primary/50">{text1}</p>
          <button
            onClick={handleOpenDetailNotesPopup}
            className="text-lg font-medium text-primary hover:text-secondary"
          >
            {text2}
          </button>
          <p className="text-xs font-medium text-primary">{text3}</p>
        </div>
        <div className="flex justify-end gap-3">
          <button onClick={handleOpenNotesPopup} className="text-primary">
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
          <button
            onClick={handleOpenConfirmDeletePopup}
            className="text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
              />
            </svg>
          </button>
        </div>
      </div>
      {isNotesPopupOpen && (
        <EditNotes onClose={handleCloseNotesPopup} noteId={id} />
      )}
      {isConfirmDeletePopupOpen && (
        <ConfirmDelete
          onClose={handleCloseConfirmDeletePopup}
          onDelete={handleDelete}
        />
      )}
      {isDetailNotesPopupOpen && (
        <DetailNotes onClose={handleCloseDetailNotesPopup} id={id} />
      )}
    </div>
  );
}
