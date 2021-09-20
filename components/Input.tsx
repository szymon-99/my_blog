import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormData } from './ContactForm'

interface InputProps {
  name: 'name' | 'title' | 'message'
  textarea?: true
}

const Input: FC<InputProps> = ({ name, textarea }) => {
  const { register } = useFormContext<FormData>()

  const classes = 'border-2 border-purple-900 p-2 rounded-md'
  return (
    <div className='flex flex-col'>
      <label
        className=' block font-bold text-purple-900 mb-1 capitalize'
        htmlFor={name}
      >
        {name}
      </label>
      {textarea && (
        <textarea {...register(name, { required: true })} className={classes} />
      )}
      {!textarea && (
        <input {...register(name, { required: true })} className={classes} />
      )}
    </div>
  )
}

export default Input
