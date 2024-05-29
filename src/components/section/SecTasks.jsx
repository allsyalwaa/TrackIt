import ButtonPlus from "../ui/ButtonPlus";
import CardTasks from "../ui/CardTasks";

export default function SecTasks() {
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
      <div className="absolute bottom-8 right-8">
        <ButtonPlus />
      </div>
    </section>
  );
}
