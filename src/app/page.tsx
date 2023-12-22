import { sql } from "@vercel/postgres";
import { AddForm } from "./components/add-form";
import { DeleteForm } from "./components/delete-form";


export default async function Home() {
  let data = await sql`SELECT *  FROM todos`;
  const { rows: todos } = data;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
      <h1 className=''>TODO</h1>

      <AddForm />

      <ul className="w-3/6">
        {todos.map(todo => (
          <li key={todo.id} className="bg-gray-100 text-gray-900 rounded p-1 mb-2">
            <div className="flex justify-between items-center">
              <p>{todo.text}</p>
              <DeleteForm id={todo.id} todo={todo.text} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
