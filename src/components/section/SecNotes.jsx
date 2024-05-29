import ButtonPlus from "../ui/ButtonPlus";
import CardNotes from "../ui/CardNotes";

export default function SecNotes() {
  return (
    <section>
      <div className="text-3xl font-bold text-secondary">My Notes</div>
      <hr className="mt-4 border-t border-primary/50" />
      <div className="mt-4 flex flex-col gap-4">
        <CardNotes
          text1="24 May 2024, 06.00 PM"
          text2="Note name"
          text3="Description"
        />
        <CardNotes
          text1="24 May 2024, 06.00 PM"
          text2="Note name"
          text3="Description"
        />
      </div>
      <div className="absolute bottom-8 right-8">
        <ButtonPlus />
      </div>
    </section>
  );
}
