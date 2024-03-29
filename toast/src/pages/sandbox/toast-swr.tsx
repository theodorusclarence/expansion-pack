import * as React from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';

import apiMock from '@/lib/axios-mock';
import useLoadingToast from '@/hooks/toast/useLoadingToast';
import useWithToast from '@/hooks/toast/useSWRWithToast';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';

import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

export type DataTypeApi = { id: number; title: string; completed: boolean };

export default function SandboxPage() {
  const isLoading = useLoadingToast();

  const { data: queryData } = useWithToast(
    useSWR<DataTypeApi>('dummy', () =>
      apiMock.get('/me').then((res) => res.data)
    )
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
          {queryData && <pre>{JSON.stringify(queryData)}</pre>}
        </div>
      </section>
    </>
  );
}
