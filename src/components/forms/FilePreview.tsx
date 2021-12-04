import * as React from 'react';
import {
  HiOutlineExternalLink,
  HiOutlineEye,
  HiOutlinePaperClip,
  HiOutlinePhotograph,
  HiX,
} from 'react-icons/hi';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

import UnstyledLink from '@/components/links/UnstyledLink';

import { FileWithPreview } from '@/types/dropzone';

type FilePreviewProps = {
  file: FileWithPreview;
} & (
  | {
      deleteFile?: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        file: FileWithPreview
      ) => void;
      readOnly?: true;
    }
  | {
      deleteFile: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        file: FileWithPreview
      ) => void;
      readOnly?: false;
    }
);

export default function FilePreview({
  deleteFile,
  file,
  readOnly,
}: FilePreviewProps): React.ReactElement {
  const [index, setIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const images = [file.preview];

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    deleteFile?.(e, file);
  };

  const imagesType = ['image/png', 'image/jpg', 'image/jpeg'];

  return imagesType.includes(file.type) ? (
    <>
      <li
        className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'
        key={file.name}
      >
        <div className='flex items-center flex-1 w-0'>
          <HiOutlinePhotograph
            className='flex-shrink-0 w-5 h-5 text-gray-400'
            aria-hidden='true'
          />
          <span className='flex-1 w-0 ml-2 truncate'>{file.name}</span>
        </div>
        <div className='flex items-center flex-shrink-0 ml-4 space-x-2'>
          <button
            type='button'
            onClick={() => setIsOpen(true)}
            className='inline-block text-xl font-medium text-gray-500 rounded focus:outline-none focus:ring focus:ring-primary-500 hover:text-gray-700'
          >
            <HiOutlineEye />
          </button>
          {!readOnly && (
            <button
              type='button'
              onClick={handleDelete}
              className='text-xl font-medium text-red-500 rounded focus:outline-none focus:ring focus:ring-red-500 hover:text-red-700'
            >
              <HiX />
            </button>
          )}
        </div>
      </li>
      {isOpen && (
        <Lightbox
          mainSrc={images[index]}
          nextSrc={images[(index + 1) % images.length]}
          prevSrc={images[(index + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIndex(
              (prevIndex) => (prevIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        />
      )}
    </>
  ) : (
    <li
      key={file.name}
      className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'
    >
      <div className='flex items-center flex-1 w-0'>
        <HiOutlinePaperClip
          className='flex-shrink-0 w-5 h-5 text-gray-400'
          aria-hidden='true'
        />
        <span className='flex-1 w-0 ml-2 truncate'>{file.name}</span>
      </div>
      <div className='flex items-center flex-shrink-0 ml-4 space-x-2'>
        <UnstyledLink
          href={file.preview}
          className='text-gray-500 rounded focus:outline-none focus:ring focus:ring-primary-500 hover:text-gray-700'
        >
          <HiOutlineExternalLink size={20} />
        </UnstyledLink>
        {!readOnly && (
          <button
            className='text-red-500 rounded cursor-pointer focus:outline-none focus:ring focus:ring-red-500 hover:text-red-700'
            type='button'
            onClick={(e) => deleteFile?.(e, file)}
          >
            <HiX size={24} />
          </button>
        )}
      </div>
    </li>
  );
}
