'use client';

import axios from 'axios';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

// import { setToken } from '@/common/lib/auth';
import {
  CREATE_ACCOUNT,
  CREATE_YOUR_ACCOUNT,
  SIGN_UP,
  SIGN_IN_EMAIL,
  CONTINUE_GOOGLE,
} from '@/src/common/constants/copy';
import { Button } from '@/src/components/buttons';
// import useGoogleAuth from '@/common/hooks/useGoogleAuth';

interface pageProps {}

type RegisterInput = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: FC<pageProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterInput>();
  const router = useRouter();
  // const { login, loading } = useGoogleAuth();

  const onSubmit: SubmitHandler<RegisterInput> = async data => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        message: 'Password does not match',
      });
      return;
    }

    try {
      // const { data: authData } = await axios.post(
      //   `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`,
      //   {
      //     name: data.name,
      //     email: data.email,
      //     username: data.email,
      //     password: data.password,
      //   }
      // );

      // setToken(authData);

      router.replace('/portfolio');
    } catch (error: any) {
      setError('password', {
        message: error?.response?.data?.error?.message,
      });
    }
  };

  return (
    <form className="user-auth-forms" onSubmit={handleSubmit(onSubmit)}>
      <>
        <title>{CREATE_ACCOUNT}</title>
      </>
      <h4 className="text-yellow lg:text-2xl text-md">{CREATE_YOUR_ACCOUNT}</h4>
      <input
        type="name"
        placeholder="Name"
        {...register('name', {
          required: 'Name is required',
        })}
      />
      {errors?.name?.message && (
        <div className="text-red mt-2">{errors?.name?.message}</div>
      )}
      <input
        type="email"
        placeholder="Email"
        className="mt-4"
        {...register('email', {
          required: 'Email is required',
        })}
      />
      {errors?.email?.message && (
        <div className="text-red mt-2">{errors?.email?.message}</div>
      )}
      <input
        type="password"
        placeholder="Password"
        className="mt-4"
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
        {...register('confirmPassword', {
          required: 'Confirm password is required',
        })}
      />
      {errors?.confirmPassword?.message && (
        <div className="text-red mt-2">{errors?.confirmPassword?.message}</div>
      )}
      <Button
        type="submit"
        gray="333"
        text={SIGN_UP}
        mt
        loading={isSubmitting}
        disabled={isSubmitting}
      />
      {/* <p className="text-yellow">Or sign in with</p> */}
      {/* <Button
        gray="555"
        text={CONTINUE_GOOGLE}
        google={true}
        loading={loading}
        onClick={login}
      /> */}
      <p className="text-yellow">
        Already have an account?{' '}
        <Link href="/login" className="text-pink no-underline	">
          {SIGN_IN_EMAIL}
        </Link>
      </p>
    </form>
  );
};

export default Register;
