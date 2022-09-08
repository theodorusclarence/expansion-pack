import clsx from 'clsx';
import { useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export type PasswordInputProps = {
  /** Input label */
  label: string;
  /**
   * id to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  id: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'input'>;

export default function PasswordInput({
  label,
  placeholder = '',
  helperText,
  id,
  readOnly = false,
  validation,
  ...rest
}: PasswordInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div>
      <label htmlFor={id} className='block text-sm font-normal text-gray-700'>
        {label}
      </label>
      <div className='relative mt-1'>
        <input
          {...register(id, validation)}
          {...rest}
          type={showPassword ? 'text' : 'password'}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsx(
            readOnly
              ? 'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0'
              : errors[id]
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500',
            'block w-full rounded-md shadow-sm'
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        <button
          onClick={togglePassword}
          type='button'
          className='absolute inset-y-0 right-0 mr-3 flex items-center rounded-lg p-1 focus:outline-none focus:ring focus:ring-primary-500'
        >
          {showPassword ? (
            <HiEyeOff className='cursor-pointer text-xl text-gray-500 hover:text-gray-600' />
          ) : (
            <HiEye className='cursor-pointer text-xl text-gray-500 hover:text-gray-600' />
          )}
        </button>
      </div>
      <div className='mt-1'>
        {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
        {errors[id] && (
          <span className='text-sm text-red-500'>
            {errors[id]?.message as unknown as string}
          </span>
        )}
      </div>
    </div>
  );
}
