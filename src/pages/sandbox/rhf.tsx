import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import DatePicker from '@/components/forms/DatePicker';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function FormSandbox() {
  //#region  //*============== FORM
  const methods = useForm({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*============== FORM

  //#region //*============== FORM SUBMIT
  const onSubmit = (data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
    return;
  };
  //#endregion //*============== FORM SUBMIT
  return (
    <Layout>
      <Seo templateTitle='Form-sandbox' />

      <section className=''>
        <div className='min-h-screen py-20 layout'>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='max-w-sm space-y-3'
            >
              <Input
                id='name'
                label='Name'
                validation={{ required: 'Name must be filled' }}
              />
              <DropzoneInput
                id='photo'
                label='Activity Photo'
                validation={{ required: 'Photo must be filled' }}
                accept='image/png, image/jpg, image/jpeg'
                helperText='You can upload file with .png, .jpg, atau .jpeg extension.'
              />
              <DatePicker
                id='date'
                label='Date'
                validation={{ required: 'Photo must be filled' }}
              />
            </form>
          </FormProvider>
        </div>
      </section>
    </Layout>
  );
}
