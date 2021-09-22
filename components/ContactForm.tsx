import { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { VscLoading } from 'react-icons/vsc'
import Input from './Input'
import { useRouter } from 'next/router'

export interface FormData {
  name: string
  title: string
  message: string
}

const ContactForm = () => {
  const methods = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const { reset } = methods
  const router = useRouter()

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => setIsSuccess(false), 3000)
    }
    if (isError) {
      setTimeout(() => setIsError(false), 3000)
    }
  }, [isSuccess, isError])

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
        router.push('/success')
      } else {
        throw new Error(response.statusText)
      }
    } catch (error) {
      setIsLoading(false)
      reset()
      setIsError(true)
    }
  }
  return (
    <FormProvider {...methods}>
      <form
        className='section grid gap-4 mx-auto w-full max-w-sm'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Input name='name' />
        <Input name='title' />
        <Input textarea name='message' />

        <button
          className={`btn py-3 bg-purple-900 text-white relative ${
            isLoading && 'bg-opacity-80'
          }`}
          type='submit'
        >
          <span className='absolute inset-0 flex items-center justify-center'>
            <span
              className={`opacity-0 text-white text-xl ${
                isLoading && 'opacity-100 animate-spin'
              }`}
            >
              <VscLoading />
            </span>
          </span>
          <span className={`${isLoading && 'opacity-0'}`}>SUBMIT</span>
        </button>
      </form>
      {/* {isSuccess && <p className='text-2xl text-green-400'>Success!!!</p>} */}
      {isError && <p className='text-2xl text-red-600'>Errro happened</p>}
    </FormProvider>
  )
}

export default ContactForm
