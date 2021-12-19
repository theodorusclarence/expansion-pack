/* eslint-disable no-console */
import * as React from 'react';

import useDialog from '@/hooks/useDialog';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';

export default function UseDialogPage() {
  const dialog = useDialog();

  const openSuccess = () => {
    dialog({
      title: 'Success title',
      description: 'Success description whatever you want',
      submitText: 'Hurray',
      variant: 'success',
      catchOnCancel: true,
    })
      .then(() => console.log('accept'))
      .catch(() => console.log('reject'));
  };
  const openWarning = () => {
    dialog({
      title: 'Warning title !!!',
      description: 'Warning description whatever you want',
      submitText: 'Sure',
      variant: 'warning',
      catchOnCancel: true,
    })
      .then(() => console.log('accept'))
      .catch(() => console.log('reject'));
  };
  const openDanger = () => {
    dialog({
      title: "Danger action! Don't do it",
      description: 'Danger description, are you sure?',
      submitText: 'Do it',
      variant: 'danger',
      catchOnCancel: true,
    })
      .then(() => console.log('accept'))
      .catch(() => console.log('reject'));
  };

  return (
    <>
      <Seo templateTitle='useDialog' />

      <section className='bg-gray-100'>
        <div className='layout flex flex-col items-start py-20 space-y-3 min-h-screen'>
          <Button onClick={openSuccess}>Success Alert</Button>
          <Button onClick={openWarning}>Warning Alert</Button>
          <Button onClick={openDanger}>Danger Alert</Button>
        </div>
      </section>
    </>
  );
}
