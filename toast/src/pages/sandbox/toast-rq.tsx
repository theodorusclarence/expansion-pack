import axios from 'axios';
import * as React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

import useLoadingToast from '@/hooks/toast/useLoadingToast';
import useRQWithToast from '@/hooks/toast/useRQWithToast';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';

import { defaultToastMessage } from '@/constant/toast';

export type DataType = {
  id: number;
  title: string;
  completed: boolean;
};

const queryFn = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos'
  );
  return data;
};

export default function SandboxPage() {
  const isLoading = useLoadingToast();

  const { data: queryData } = useRQWithToast(
    useQuery<DataType, Error>('/statistics', queryFn)
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
                  ...defaultToastMessage,
                }
              )
            }
          >
            Submit
          </Button>
          {queryData && (
            <pre className='max-w-lg truncate'>{JSON.stringify(queryData)}</pre>
          )}
        </div>
      </section>
    </>
  );
}
