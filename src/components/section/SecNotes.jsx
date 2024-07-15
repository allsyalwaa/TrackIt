import { useEffect, useState } from "react";
import AddNotes from "../ui/addcontent/AddNotes";
import ButtonPlus from "../ui/ButtonPlus";
import CardNotes from "../ui/cardcontent/CardNotes";
import { getNotes } from "../../utils/fetchdata/NotesService";

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
    getNotes().then((data) => {
      const notesWithLastEdited = data.map((note) => ({
        ...note,
        lastEdited: note.lastEdited || new Date().toISOString(),
      }));

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
