import { useEffect, useState } from "react";
import AddTask from "../ui/addcontent/AddTask";
import ButtonPlus from "../ui/ButtonPlus";
import CardTasks from "../ui/cardcontent/CardTasks";
import { getTasks } from "../../utils/fetchdata/TaskService";

export default function SecTasks() {
  const [isTaskPopupOpen, setIsTaskPopupOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenTaskPopup = () => {
    setIsTaskPopupOpen(true);
  };

  const handleCloseTaskPopup = () => {
    setIsTaskPopupOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    getTasks().then((data) => {
      const tasksWithLastEdited = data.map((task) => ({
        ...task,
        lastEdited: task.lastEdited || new Date().toISOString(),
      }));

      tasksWithLastEdited.sort(
        (a, b) => new Date(b.lastEdited) - new Date(a.lastEdited),
      );

      setTasks(tasksWithLastEdited);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <div className="text-3xl font-bold text-secondary">My Tasks</div>
      <hr className="mt-4 border-t border-primary/50" />
      {isLoading ? (
        <div className="mt-4 text-center text-sm text-primary">Loading...</div>
      ) : (
        <div className="mt-4 flex flex-col gap-4">
          {tasks.map((task) => (
            <CardTasks
              key={task.id}
              id={task.id}
              text1={task.name}
              text2={task.description}
              initialCompleted={task.completed}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      )}

      <ButtonPlus
        onClick={handleOpenTaskPopup}
        className="absolute bottom-8 right-8"
      />

      {isTaskPopupOpen && <AddTask onClose={handleCloseTaskPopup} />}
    </section>
  );
}
