import AddTask from "../ui/AddTask";
import ButtonPlus from "../ui/ButtonPlus";
import CardTasks from "../ui/CardTasks";

import { useState } from "react";

export default function SecTasks() {
  const [isTaskPopupOpen, setIsTaskPopupOpen] = useState(false);

  const handleOpenTaskPopup = () => {
    setIsTaskPopupOpen(true);
  };

  const handleCloseTaskPopup = () => {
    setIsTaskPopupOpen(false);
  };

  return (
    <section>
      <div className="text-3xl font-bold text-secondary">My Tasks</div>
      <hr className="mt-4 border-t border-primary/50" />
      <div className="mt-4 flex flex-col gap-4">
        <CardTasks text1="Task name" text2="Description" />
        <CardTasks text1="Task name" text2="Description" />
        <CardTasks text1="Task name" text2="Description" />
        <CardTasks text1="Task name" text2="Description" />
      </div>
      <button
        onClick={handleOpenTaskPopup}
        className="absolute bottom-8 right-8"
      >
        <ButtonPlus />
      </button>

      {isTaskPopupOpen && <AddTask onClose={handleCloseTaskPopup} />}
    </section>
  );
}
