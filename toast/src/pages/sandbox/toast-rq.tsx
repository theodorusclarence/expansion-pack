import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import * as React from 'react';
import toast from 'react-hot-toast';

import apiMock, { mockQuery } from '@/lib/axios-mock';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useQueryToast from '@/hooks/toast/useQueryToast';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { ApiError, ApiReturn } from '@/types/api';

type User = {
  id: number;
  name: string;
  token: string;
};

type LoginData = {
  email: string;
  password: string;
};

export default function SandboxPage() {
  const {
    data: mutationData,
    isLoading,
    mutate,
  } = useMutationToast<ApiReturn<undefined>, LoginData>(
    useMutation((data) => apiMock.post('/login', data).then((res) => res.data))
  );

  const { data: queryData } = useQueryToast(
    useQuery<ApiReturn<User>, AxiosError<ApiError>>(['/me'], mockQuery)
  );

  return (
    <>
      <Seo templateTitle='Sandbox' />

      <section className='bg-gray-100'>
        <div className='layout flex min-h-screen flex-col items-start space-y-3 py-20'>
          <Button onClick={() => toast.success('Hello!')}>Open Toast</Button>
          <Button
            isLoading={isLoading}
            onClick={() =>
              mutate({ email: 'admin@mail.com', password: 'admin' })
            }
          >
            Submit
          </Button>
          <p>Query:</p>
          {queryData && <pre>{JSON.stringify(queryData, null, 2)}</pre>}
          <p>Mutation:</p>
          {mutationData && <pre>{JSON.stringify(mutationData, null, 2)}</pre>}
        </div>
      </section>
    </>
  );
}
