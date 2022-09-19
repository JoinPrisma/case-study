import { Icon } from '@joinprisma/components';
import { FC } from 'react';

const CanvasesList: FC = () => {
  return (
    <div
      className="absolute space-y-2 left-4 top-3 w-fit text-outline"
      role="presentation"
    >
      <Icon name="hamburger" className="w-6 h-6 mx-auto" />
      <div className="aspect-[4/3] w-[41px] rounded-1 shadow-md border border-outline/15 bg-orange-container" />
      <div className="aspect-[4/3] w-[41px] rounded-1 shadow-md bg-primary-container flex justify-center items-center text-primary ring-2 ring-primary">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.28882 4.49043C2.28882 3.44211 3.13865 2.59229 4.18697 2.59229H6.46474C7.51306 2.59229 8.36289 3.44211 8.36289 4.49043V6.76821C8.36289 7.81653 7.51306 8.66636 6.46474 8.66636H4.18697C3.13865 8.66636 2.28882 7.81653 2.28882 6.76821V4.49043Z" />
          <path d="M10.6406 4.49043C10.6406 3.4421 11.4905 2.59229 12.5388 2.59229H14.8166C15.8648 2.59229 16.7147 3.4421 16.7147 4.49043V6.76821C16.7147 7.81654 15.8648 8.66636 14.8166 8.66636H12.5388C11.4905 8.66636 10.6406 7.81654 10.6406 6.76821V4.49043Z" />
          <path d="M2.28882 12.8422C2.28882 11.794 3.13864 10.9441 4.18697 10.9441H6.46474C7.51307 10.9441 8.36289 11.794 8.36289 12.8422V15.12C8.36289 16.1683 7.51307 17.0182 6.46474 17.0182H4.18697C3.13864 17.0182 2.28882 16.1683 2.28882 15.12V12.8422Z" />
          <path d="M10.6406 12.8422C10.6406 11.7939 11.4905 10.9441 12.5388 10.9441H14.8166C15.8648 10.9441 16.7147 11.7939 16.7147 12.8422V15.12C16.7147 16.1683 15.8648 17.0182 14.8166 17.0182H12.5388C11.4905 17.0182 10.6406 16.1683 10.6406 15.12V12.8422Z" />
        </svg>
      </div>
      <div className="aspect-[4/3] w-[41px] rounded-1 shadow-md border border-outline/15 bg-teal-container" />
      <div className="aspect-[4/3] w-[41px] rounded-1 shadow-md border border-outline/15 bg-yellow-container" />
      <div className="aspect-[4/3] w-[41px] rounded-1 shadow-md border border-outline/15 bg-yellow-container" />
      <div className="aspect-[4/3] w-[41px] rounded-1 shadow-md bg-background flex justify-center items-center">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.28882 4.49043C2.28882 3.44211 3.13865 2.59229 4.18697 2.59229H6.46474C7.51306 2.59229 8.36289 3.44211 8.36289 4.49043V6.76821C8.36289 7.81653 7.51306 8.66636 6.46474 8.66636H4.18697C3.13865 8.66636 2.28882 7.81653 2.28882 6.76821V4.49043Z" />
          <path d="M10.6406 4.49043C10.6406 3.4421 11.4905 2.59229 12.5388 2.59229H14.8166C15.8648 2.59229 16.7147 3.4421 16.7147 4.49043V6.76821C16.7147 7.81654 15.8648 8.66636 14.8166 8.66636H12.5388C11.4905 8.66636 10.6406 7.81654 10.6406 6.76821V4.49043Z" />
          <path d="M2.28882 12.8422C2.28882 11.794 3.13864 10.9441 4.18697 10.9441H6.46474C7.51307 10.9441 8.36289 11.794 8.36289 12.8422V15.12C8.36289 16.1683 7.51307 17.0182 6.46474 17.0182H4.18697C3.13864 17.0182 2.28882 16.1683 2.28882 15.12V12.8422Z" />
          <path d="M10.6406 12.8422C10.6406 11.7939 11.4905 10.9441 12.5388 10.9441H14.8166C15.8648 10.9441 16.7147 11.7939 16.7147 12.8422V15.12C16.7147 16.1683 15.8648 17.0182 14.8166 17.0182H12.5388C11.4905 17.0182 10.6406 16.1683 10.6406 15.12V12.8422Z" />
        </svg>
      </div>
      <div className="aspect-[4/3] w-[41px] rounded-1 shadow-md border border-outline/15 bg-blue-container" />
    </div>
  );
};

export default CanvasesList;
