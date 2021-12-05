import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DatePicker from '@/components/forms/DatePicker';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import TextArea from '@/components/forms/TextArea';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function RHFSandbox() {
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
      <Seo templateTitle='React Hook Form Sandbox' />

      <section className=''>
        <div className='layout py-20 min-h-screen'>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-3 max-w-sm'
            >
              <Input
                id='name'
                label='Name'
                validation={{ required: 'Name must be filled' }}
              />
              <SelectInput
                id='gender'
                label='Gender'
                validation={{ required: 'Gender must be filled' }}
                placeholder='Choose gender'
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='none'>Prefer not to say</option>
              </SelectInput>
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
                validation={{ required: 'Date must be filled' }}
                // you can customize the default with `dateFormat`
                placeholder='dd/mm/yyyy'
              />
              <TextArea
                id='address'
                label='Address'
                validation={{ required: 'Address must be filled' }}
              />
              <div className='flex flex-wrap gap-4'>
                {/* other button must have type='button' so it won't trigger validation */}
                <Button type='button' variant='outline'>
                  Not Submit
                </Button>
                <Button>Submit</Button>
              </div>
              <p className='text-sm text-gray-800'>
                Check console after submit
              </p>
            </form>
          </FormProvider>
        </div>
      </section>
    </Layout>
  );
}
