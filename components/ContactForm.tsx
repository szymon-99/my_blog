import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { VscLoading } from 'react-icons/vsc'

interface FormData {
  name: string
  title: string
  message: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      console.log('response received')
      setIsLoading(false)
      if (res.status === 200) {
        const data = await res.json()
        console.log(data)
      }
    })
  }

  return (
    <form className='grid gap-4' onSubmit={handleSubmit(onSubmit)}>
      <input
        className='border border-purple-900 p-2'
        {...register('name', { required: true })}
      />
      {errors.name && <p>required</p>}
      <input
        className='border border-purple-900 p-2'
        {...register('title', { required: true })}
      />
      {errors.title && <p>required</p>}
      <textarea
        className='border border-purple-900 p-2'
        {...register('message', { required: true })}
      />
      {errors.message && <p>required</p>}
      {isLoading && <p className='text-3xl'>LOADING....</p>}
      <button className='btn-primary hover:scale-100 relative' type='submit'>
        <span className='absolute inset-0 flex items-center justify-center'>
          <span
            className={`opacity-0 text-purple-900 text-xl ${
              isLoading && 'opacity-100 animate-spin'
            }`}
          >
            <VscLoading />
          </span>
        </span>
        submit
      </button>
    </form>
  )
}

export default ContactForm
