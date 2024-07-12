import AddNotes from "../ui/AddNotes";
import ButtonPlus from "../ui/ButtonPlus";
import CardNotes from "../ui/CardNotes";

import { useEffect, useState } from "react";
import { getNotes } from "../../utils/FetchData";

export default function SecNotes() {
  const [isNotePopupOpen, setIsNotePopupOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenNotePopup = () => {
    setIsNotePopupOpen(true);
  };

  const handleCloseNotePopup = () => {
    setIsNotePopupOpen(false);
  };

  useEffect(() => {
    console.log("mendapatkan Notes");
    getNotes().then((data) => {
      // Tambahkan properti lastEdited jika tidak ada
      const notesWithLastEdited = data.map((note) => ({
        ...note,
        lastEdited: note.lastEdited || new Date().toISOString(),
      }));

      // Urutkan note berdasarkan lastEdited
      notesWithLastEdited.sort(
        (a, b) => new Date(b.lastEdited) - new Date(a.lastEdited),
      );

      setNotes(notesWithLastEdited);
      setIsLoading(false);
    });
  }, []);

  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <section>
      <div className="text-3xl font-bold text-secondary">My Notes</div>
      <hr className="mt-4 border-t border-primary/50" />
      {isLoading ? (
        <div className="mt-4 text-center text-sm text-primary">Loading...</div>
      ) : (
        <div className="mt-4 flex flex-col gap-4">
          {notes.map((note) => (
            <CardNotes
              key={note.id}
              text1={note.date}
              text2={note.name}
              text3={note.description}
              id={note.id}
              onDelete={handleDeleteNote}
            />
          ))}
        </div>
      )}

      <ButtonPlus
        onClick={handleOpenNotePopup}
        className={"fixed bottom-8 right-8"}
      />

      {isNotePopupOpen && <AddNotes onClose={handleCloseNotePopup} />}
    </section>
  );
}
