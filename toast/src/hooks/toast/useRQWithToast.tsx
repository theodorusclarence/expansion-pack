import * as React from 'react';
import { UseQueryResult } from 'react-query';
import toast from 'react-hot-toast';

import { defaultToastMessage } from '@/constant/toast';

type OptionType = {
  runCondition?: boolean;
  loading?: string;
  success?: string;
  error?: string;
};

export default function useRQWithToast<T, E>(
  query: UseQueryResult<T, E>,
  { runCondition = true, ...customMessages }: OptionType = {}
) {
  const { data, isError, isLoading } = query;

  const toastStatus = React.useRef<string>(data ? 'done' : 'idle');
  const toastMessage = {
    ...defaultToastMessage,
    ...customMessages,
  };

  React.useEffect(() => {
    if (!runCondition) return;

    // If it is not the first render
    if (toastStatus.current === 'done' && !isLoading) return;

    if (isError) {
      toast.error(toastMessage.error, { id: toastStatus.current });
      toastStatus.current = 'done';
    } else if (isLoading) {
      toastStatus.current = toast.loading(toastMessage.loading);
    } else if (data) {
      toast.success(toastMessage.success, { id: toastStatus.current });
      toastStatus.current = 'done';
    }

    return () => {
      toast.dismiss(toastStatus.current);
    };
  }, [
    data,
    isError,
    isLoading,
    runCondition,
    toastMessage.error,
    toastMessage.loading,
    toastMessage.success,
  ]);

  return { ...query };
}