/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { CircleCheckIcon } from '@trego/components/ui/icons';

const Success = () => {
  return (
    <div className='flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-md text-center'>
        <CircleCheckIcon className='mx-auto h-12 w-12 text-green-500' />
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
          Thank you for reaching out!
        </h1>
        <p className='mt-4 text-muted-foreground'>
          Thank you for reaching out! We typically respond
          within 15 minutes.
        </p>
        <div className='mt-6'>
          <Link
            href='/'
            className='inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
            prefetch={false}
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
