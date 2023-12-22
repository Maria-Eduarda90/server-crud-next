'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { deleteTodo } from '@/app/actions'

const initialState = {
    message: null,
}

function DeleteButton() {
    const { pending } = useFormStatus()

    return (
        <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2' type="submit" aria-disabled={pending}>
            Delete
        </button>
    )
}

export function DeleteForm({ id, todo }: { id: number; todo: string }) {
    const [state, formAction] = useFormState(deleteTodo, initialState)

    return (
        <form action={formAction} className='flex'>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="todo" value={todo} />
            <DeleteButton />
            <p aria-live="polite" className="sr-only" role="status">
                {state?.message}
            </p>
        </form>
    )
}