import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Welcome to my TodoApp</h1>
        <AddTask />
      </div>
      <TodoList />
    </main>
  );
}
