import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormData } from './ContactForm'

interface InputProps {
  name: 'name' | 'title' | 'message'
  textarea?: true
}

const Input: FC<InputProps> = ({ name, textarea }) => {
  const { register } = useFormContext<FormData>()

  const classes =
    'border-2 outline-none outline-none ring-purple-600 focus:ring-2   p-2 rounded-md'
  return (
    <div className='flex flex-col group'>
      <label
        className=' block group-hover:text-purple-900 transition font-bold text-black mb-2 capitalize'
        htmlFor={name}
      >
        {name}
      </label>
      {textarea && (
        <textarea {...register(name, { required: true })} className={classes} />
      )}
      {!textarea && <input {...register(name)} className={classes} />}
    </div>
  )
}

export default Input
