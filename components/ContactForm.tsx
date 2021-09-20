import { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { VscLoading } from 'react-icons/vsc'
import Input from './Input'

export interface FormData {
  name: string
  title: string
  message: string
}

const ContactForm = () => {
  const methods = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => setIsSuccess(false), 3000)
    }
  }, [isSuccess])

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setIsLoading(false)
        setIsSuccess(true)
      } else {
        throw new Error(response.statusText)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <FormProvider {...methods}>
      {isSuccess && <p className='text-2xl text-green-400'>Success!!!</p>}
      <form
        className='section grid gap-4 mx-auto w-full max-w-sm'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Input name='name' />
        <Input name='title' />
        <Input textarea name='message' />

        <button className='btn bg-purple-900 text-white relative' type='submit'>
          <span className='absolute inset-0 flex items-center justify-center'>
            <span
              className={`opacity-0 text-purple-900 text-xl ${
                isLoading && 'opacity-100 animate-spin'
              }`}
            >
              <VscLoading />
            </span>
          </span>
          <span className={`${isLoading && 'opacity-0'}`}>SUBMIT</span>
        </button>
      </form>
      {methods.formState.isDirty && (
        <p className='text-xl text-red-600'>fill all fields</p>
      )}
    </FormProvider>
  )
}

export default ContactForm
