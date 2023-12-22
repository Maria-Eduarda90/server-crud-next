import { sql } from "@vercel/postgres";
import { AddForm } from "./components/add-form";


export default async function Home() {
  let data = await sql`SELECT *  FROM todos`;
  const { rows: todos } = data;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
      <h1 className=''>TODO</h1>

      <AddForm />

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </main>
  )
}
