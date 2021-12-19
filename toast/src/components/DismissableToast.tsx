import * as React from 'react';
import { toast, ToastBar, Toaster } from 'react-hot-toast';
import { HiX } from 'react-icons/hi';

export default function DismissableToast() {
  return (
    <div>
      <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button
                    className='p-1 transition rounded-full hover:bg-[#444] focus-visible:ring ring-primary-400 focus:outline-none'
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <HiX />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
}