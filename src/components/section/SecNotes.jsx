import AddNotes from "../ui/AddNotes";
import ButtonPlus from "../ui/ButtonPlus";
import CardNotes from "../ui/CardNotes";

import { useState } from "react";

export default function SecNotes({
  data = [
    {
      id: 1,
      date: "24 May 2024, 06.00 PM",
      name: "Note name",
      description: "Description",
    },
    {
      id: 2,
      date: "24 May 2024, 06.00 PM",
      name: "Note name",
      description: "Description",
    },
  ],
}) {
  const [isNotePopupOpen, setIsNotePopupOpen] = useState(false);

  const handleOpenNotePopup = () => {
    setIsNotePopupOpen(true);
  };

  const handleCloseNotePopup = () => {
    setIsNotePopupOpen(false);
  };

  return (
    <section>
      <div className="text-3xl font-bold text-secondary">My Notes</div>
      <hr className="mt-4 border-t border-primary/50" />
      <div className="mt-4 flex flex-col gap-4">
        {data.map((note) => (
          <CardNotes
            key={note.id}
            text1={note.date}
            text2={note.name}
            text3={note.description}
          />
        ))}
      </div>
      <button
        onClick={handleOpenNotePopup}
        className="absolute bottom-8 right-8"
      >
        <ButtonPlus />
      </button>

      {isNotePopupOpen && <AddNotes onClose={handleCloseNotePopup} />}
    </section>
  );
}
