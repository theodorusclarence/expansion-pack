import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import {
  HiExclamationCircle,
  HiOutlineCheck,
  HiOutlineExclamation,
  HiOutlineX,
} from 'react-icons/hi';

import Button from '@/components/buttons/Button';

type BaseDialogProps = {
  /** Maintained by useDialogStore */
  open: boolean;
  /** Maintained by useDialogStore */
  onSubmit: () => void;
  /** Maintained by useDialogStore */
  onClose: () => void;
  /** Customizable Dialog Options */
  options: DialogOptions;
};

export type DialogOptions = {
  catchOnCancel?: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
  variant: 'success' | 'warning' | 'danger';
  submitText: React.ReactNode;
};

/**
 * Base Dialog for useDialog hook implementation.
 *
 * **Should be called with the hook, not by the component itself**
 *
 *
 * @see useDialogStore
 * @example ```tsx
 * const dialog = useDialog();
 *
 * dialog(options);
 * ```
 */
export default function BaseDialog({
  open,
  onSubmit,
  onClose,
  options: { title, description, variant, submitText },
}: BaseDialogProps) {
  const current = colorVariant[variant];

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as='div'
        static
        className='overflow-y-auto fixed inset-0 z-40'
        open={open}
        onClose={() => onClose()}
      >
        <div className='flex justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:h-screen sm:align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block overflow-hidden z-auto px-4 pt-5 pb-4 w-full text-left align-bottom bg-white rounded-lg shadow-xl transition-all transform sm:p-6 sm:my-8 sm:max-w-lg sm:align-middle'>
              <div className='hidden absolute top-0 right-0 pt-4 pr-4 sm:block'>
                <button
                  type='button'
                  className={clsx(
                    'text-gray-400 bg-white rounded-md hover:text-gray-500',
                    'focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none',
                    'disabled:filter disabled:brightness-90 disabled:cursor-wait'
                  )}
                  onClick={onClose}
                >
                  <span className='sr-only'>Close</span>
                  <HiOutlineX className='w-6 h-6' aria-hidden='true' />
                </button>
              </div>
              <div className='sm:flex sm:items-start'>
                <div
                  className={clsx(
                    'flex flex-shrink-0 justify-center items-center rounded-full',
                    'mx-auto w-12 h-12 sm:mx-0 sm:w-10 sm:h-10',
                    current.bg.light
                  )}
                >
                  <current.icon
                    className={clsx('w-6 h-6', current.text.primary)}
                    aria-hidden='true'
                  />
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    {title}
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>{description}</p>
                  </div>
                </div>
              </div>
              <div className='mt-5 sm:flex sm:flex-row-reverse sm:mt-4'>
                <Button
                  onClick={onSubmit}
                  className={clsx(
                    '!font-medium justify-center items-center w-full sm:ml-3 sm:w-auto sm:text-sm'
                  )}
                >
                  {submitText}
                </Button>
                <Button
                  type='button'
                  variant='outline'
                  onClick={onClose}
                  className='!font-medium justify-center items-center mt-3 w-full sm:mt-0 sm:w-auto sm:text-sm'
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const colorVariant = {
  success: {
    bg: {
      light: 'bg-green-100',
    },
    text: {
      primary: 'text-green-500',
    },
    icon: HiOutlineCheck,
  },
  warning: {
    bg: {
      light: 'bg-yellow-100',
    },
    text: {
      primary: 'text-yellow-500',
    },
    icon: HiOutlineExclamation,
  },
  danger: {
    bg: {
      light: 'bg-red-100',
    },
    text: {
      primary: 'text-red-500',
    },
    icon: HiExclamationCircle,
  },
};
