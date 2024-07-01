import AddTask from "../ui/AddTask";
import ButtonPlus from "../ui/ButtonPlus";
import CardTasks from "../ui/CardTasks";

import { useState } from "react";

export default function SecTasks({
  data = [
    {
      id: 1,
      name: "Task name",
      description: "Description",
    },
    {
      id: 2,
      name: "Task name",
      description: "Description",
    },
  ],
}) {
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
        {data.map((task) => (
          <CardTasks key={task.id} text1={task.name} text2={task.description} />
        ))}
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
