'use client';

import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/src/components/buttons';
import {
  SUBMIT,
  RESET_PASS,
  RESET_YOUR_PASS,
} from '@/src/common/constants/copy';
import { useState } from 'react';

type ResetPasswordInput = {
  email: string;
};

const ResetPassword = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ResetPasswordInput>();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ResetPasswordInput> = async data => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
        data
      );

      setSuccessMessage('Reset password link has been sent to your email');
    } catch (error: any) {
      setSuccessMessage(null);
      setError('email', { message: 'Invalid email' });
    }
  };

  return (
    <div className="user-auth-forms">
      <>
        <title>{RESET_PASS}</title>
      </>
      <h4 className="text-yellow lg:text-2xl text-md">{RESET_YOUR_PASS}</h4>
      <form className="input-fields" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
          })}
        />
        {errors?.email?.message && (
          <div className="text-red mt-2">{errors?.email?.message}</div>
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
      </form>
    </div>
  );
};

export default ResetPassword;
