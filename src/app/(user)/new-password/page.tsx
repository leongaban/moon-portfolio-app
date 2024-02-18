'use client'

import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/src/components/buttons'
import {
  SUBMIT,
  RESET_PASS,
  ENTER_NEW_PASS,
  SIGN_IN,
} from '@/src/common/constants/copy'
import { useState } from 'react'
import Link from 'next/link'

type NewPasswordInput = {
  code: string
  password: string
  passwordConfirmation: string
}

const NewPassword = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<NewPasswordInput>()

  const searchParams = useSearchParams()
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const onSubmit: SubmitHandler<NewPasswordInput> = async data => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`,
        {
          ...data,
          code: searchParams?.get('confirmation'),
        }
      )

      setSuccessMessage('Your password has been changed')
    } catch (error: any) {
      setSuccessMessage(null)
      setError('passwordConfirmation', { message: 'This link has expired' })
    }
  }

  return (
    <div className="user-auth-forms">
      <>
        <title>{RESET_PASS}</title>
      </>
      <h4 className="text-yellow lg:text-2xl text-md">{ENTER_NEW_PASS}</h4>
      <form className="input-fields" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
          })}
        />
        {errors?.password?.message && (
          <div className="text-red mt-2">{errors?.password?.message}</div>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          className="mt-4"
          {...register('passwordConfirmation', {
            required: 'Confirm password is required',
          })}
        />
        {errors?.passwordConfirmation?.message && (
          <div className="text-red mt-2">
            {errors?.passwordConfirmation?.message}
          </div>
        )}
        {successMessage && (
          <div className="text-green mt-2">{successMessage}</div>
        )}
        <Button
          gray="333"
          text={SUBMIT}
          mt={true}
          disabled={isSubmitting}
          type="submit"
          loading={isSubmitting}
        />
        <Link href="/login" className="no-underline">
          <Button gray="333" text={SIGN_IN} mb={true} />
        </Link>
      </form>
    </div>
  )
}

export default NewPassword
