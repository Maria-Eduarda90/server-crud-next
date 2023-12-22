'use client'

import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import { createTodo } from '@/app/actions'

const initialState = {
    message: null,
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button className='text-white font-bold py-2 px-4 ml-2 rounded bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-sm text-center me-2 mb-2' type="submit" aria-disabled={pending}>
            Add
        </button>
    )
}

export function AddForm() {
    const [state, formAction] = useFormState(createTodo, initialState)

    return (
        <form action={formAction} >
            <label htmlFor="todo" className='mb-2'>Adicione uma task: </label>
            <div className='flex justify-center mt-2.5'>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' type="text" id="todo" name="todo" placeholder='adicione a sua task...' required />
                <SubmitButton />
                <p aria-live="polite" className="sr-only" role="status">
                    {state?.message}
                </p>
            </div>
        </form>
    )
}