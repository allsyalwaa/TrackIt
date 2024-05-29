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
      <div className="absolute bottom-10 right-8">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
