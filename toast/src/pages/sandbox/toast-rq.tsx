import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import toast from 'react-hot-toast';

import { mockQuery } from '@/lib/axios-mock';
import useLoadingToast from '@/hooks/toast/useLoadingToast';
import useRQWithToast from '@/hooks/toast/useRQWithToast';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';

import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import { ApiReturn } from '@/types/api';

type User = {
  id: number;
  name: string;
  token: string;
};

export default function SandboxPage() {
  const isLoading = useLoadingToast();

  const { data: queryData } = useRQWithToast(
    useQuery<ApiReturn<User>, Error>(['/me'], mockQuery)
  );

  return (
    <>
      <Seo templateTitle='Sandbox' />

      <section className='bg-gray-100'>
        <div className='flex flex-col items-start min-h-screen py-20 space-y-3 layout'>
          <Button onClick={() => toast.success('Hello!')}>Open Toast</Button>
          <Button
            isLoading={isLoading}
            onClick={() =>
              toast.promise(
                new Promise(function (resolve) {
                  setTimeout(resolve, 1000);
                }),
                {
                  ...DEFAULT_TOAST_MESSAGE,
                }
              )
            }
          >
            Submit
          </Button>
          {queryData && <pre>{JSON.stringify(queryData, null, 2)}</pre>}
        </div>
      </section>
    </>
  );
}
