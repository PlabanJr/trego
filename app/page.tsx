/* eslint-disable react/no-unescaped-entities */

import { Gabarito } from 'next/font/google';
import { Tenor_Sans } from 'next/font/google';

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
});

const tenorSans = Tenor_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

import Link from 'next/link';
import Image from 'next/image';
import {
  Button,
  Input,
  Textarea,
} from '@trego/components/ui';
import {
  BookIcon,
  CarIcon,
  CheckIcon,
  ClockIcon,
  LocateIcon,
  XIcon,
} from '@trego/components/ui/icons';

const Home = () => {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link
          href='#'
          className='flex items-center justify-center'
          prefetch={false}
        >
          <Image
            src={'/logo-white.png'}
            width={250}
            height={150}
            alt='Trego logo'
          />
          <span className='sr-only'>
            Vehicle Service Platform
          </span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            href=''
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href='#services'
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href='#how-it-works'
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            How It Works
          </Link>
          <Link
            href='#pricing'
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href='#contact'
            className='text-sm font-medium hover:underline underline-offset-4'
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Hassle-free Vehicle Service
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Our platform connects you with
                    authorized service centers, offering
                    pick-up and drop-off assistance, and
                    real-time updates on your vehicle's
                    status.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link
                    href='#'
                    className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                    prefetch={false}
                  >
                    Explore Services
                  </Link>
                  <Link
                    href='#'
                    className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                    prefetch={false}
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
              <img
                src='/placeholder.svg'
                width='550'
                height='550'
                alt='Hero'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
              />
            </div>
          </div>
        </section>
        <section
          id='services'
          className='w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                  Our Services
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Hassle-free Vehicle Servicing
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Our platform connects you with authorized
                  service centers, offering pick-up and
                  drop-off assistance, and real-time updates
                  on your vehicle's status.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <div className='flex flex-col justify-center space-y-4'>
                <ul className='grid gap-6'>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>
                        Authorized Service Centers
                      </h3>
                      <p className='text-muted-foreground'>
                        Our platform connects you with
                        certified service centers to ensure
                        quality repairs and maintenance.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>
                        Pick-up and Drop-off
                      </h3>
                      <p className='text-muted-foreground'>
                        We offer convenient pick-up and
                        drop-off services to make your
                        vehicle servicing experience
                        hassle-free.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>
                        Real-time Updates
                      </h3>
                      <p className='text-muted-foreground'>
                        Stay informed about the status of
                        your vehicle's service with
                        real-time updates throughout the
                        process.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src='/placeholder.svg'
                width='550'
                height='310'
                alt='Services'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
              />
            </div>
          </div>
        </section>
        <section
          id='how-it-works'
          className='w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                  How It Works
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Our Simple Process
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Our platform makes vehicle servicing easy
                  and convenient. Here's how it works:
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='grid gap-1'>
                  <div className='flex items-center gap-2'>
                    <div className='rounded-full bg-primary p-2 text-primary-foreground'>
                      <BookIcon className='h-5 w-5' />
                    </div>
                    <h3 className='text-xl font-bold'>
                      Book Appointment
                    </h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Schedule your vehicle service
                    appointment through our easy-to-use
                    platform.
                  </p>
                </div>
              </div>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='grid gap-1'>
                  <div className='flex items-center gap-2'>
                    <div className='rounded-full bg-primary p-2 text-primary-foreground'>
                      <CarIcon className='h-5 w-5' />
                    </div>
                    <h3 className='text-xl font-bold'>
                      Pick-up and Drop-off
                    </h3>
                  </div>
                  <p className='text-muted-foreground'>
                    We'll pick up your vehicle and drop it
                    off after the service is complete.
                  </p>
                </div>
              </div>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='grid gap-1'>
                  <div className='flex items-center gap-2'>
                    <div className='rounded-full bg-primary p-2 text-primary-foreground'>
                      <ClockIcon className='h-5 w-5' />
                    </div>
                    <h3 className='text-xl font-bold'>
                      Real-time Updates
                    </h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Stay informed about the status of your
                    vehicle's service with real-time
                    updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id='areas-covered'
          className='w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                  Areas Covered
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  We Serve These Areas
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Our platform is available in the following
                  areas:
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='grid gap-1'>
                  <div className='flex items-center gap-2'>
                    <LocateIcon className='h-5 w-5 text-primary' />
                    <h3 className='text-xl font-bold'>
                      Bangalore
                    </h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Our platform is available in Bangalore,
                    offering convenient vehicle servicing
                    solutions.
                  </p>
                </div>
              </div>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='grid gap-1'>
                  <div className='flex items-center gap-2'>
                    <LocateIcon className='h-5 w-5 text-primary' />
                    <h3 className='text-xl font-bold'>
                      Mumbai
                    </h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Our platform is available in Mumbai,
                    providing hassle-free vehicle servicing.
                  </p>
                </div>
              </div>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='grid gap-1'>
                  <div className='flex items-center gap-2'>
                    <LocateIcon className='h-5 w-5 text-primary' />
                    <h3 className='text-xl font-bold'>
                      Delhi
                    </h3>
                  </div>
                  <p className='text-muted-foreground'>
                    Our platform is available in Delhi,
                    making vehicle servicing easy and
                    convenient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id='pricing'
          className='w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                  Pricing
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Subscription Plans
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Choose the plan that best fits your
                  vehicle servicing needs.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
              <div className='flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm'>
                <div className='space-y-2'>
                  <h3 className='text-2xl font-bold'>
                    Freemium
                  </h3>
                  <p className='text-4xl font-bold'>$0</p>
                  <p className='text-muted-foreground'>
                    per month
                  </p>
                </div>
                <ul className='space-y-2 text-muted-foreground'>
                  <li className='flex items-center gap-2'>
                    <CheckIcon className='h-5 w-5 text-green-500' />
                    Basic vehicle servicing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckIcon className='h-5 w-5 text-green-500' />
                    Pick-up and drop-off
                  </li>
                  <li className='flex items-center gap-2'>
                    <XIcon className='h-5 w-5 text-red-500' />
                    Real-time updates
                  </li>
                  <li className='flex items-center gap-2'>
                    <XIcon className='h-5 w-5 text-red-500' />
                    Priority support
                  </li>
                </ul>
                <Button className='w-full'>Sign Up</Button>
              </div>
              <div className='flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm'>
                <div className='space-y-2'>
                  <h3 className='text-2xl font-bold'>
                    Premium
                  </h3>
                  <p className='text-4xl font-bold'>$19</p>
                  <p className='text-muted-foreground'>
                    per month
                  </p>
                </div>
                <ul className='space-y-2 text-muted-foreground'>
                  <li className='flex items-center gap-2'>
                    <CheckIcon className='h-5 w-5 text-green-500' />
                    Basic vehicle servicing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckIcon className='h-5 w-5 text-green-500' />
                    Pick-up and drop-off
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckIcon className='h-5 w-5 text-green-500' />
                    Real-time updates
                  </li>
                  <li className='flex items-center gap-2'>
                    <XIcon className='h-5 w-5 text-red-500' />
                    Priority support
                  </li>
                </ul>
                <Button className='w-full'>Sign Up</Button>
              </div>
              <div className='flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm'>
                <div className='space-y-2'>
                  <h3 className='text-2xl font-bold'>
                    Elite
                  </h3>
                  <p className='text-4xl font-bold'>$49</p>
                  <p className='text-muted-foreground'>
                    per month
                  </p>
                </div>
                <ul className='space-y-2 text-muted-foreground'>
                  <li className='flex items-center gap-2'>
                    <CheckIcon className='h-5 w-5 text-green-500' />
                    Basic vehicle servicing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckIcon className='h-5 w-5 text-green-500' />
                    Pick-up and drop-off
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckIcon className='h-5 w-5 text-green-500' />
                    Real-time updates
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckIcon className='h-5 w-5 text-green-500' />
                    Priority support
                  </li>
                </ul>
                <Button className='w-full'>Sign Up</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id='contact'
          className='w-full py-12 md:py-24 lg:py-32 border-t flex items-center justify-center'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                  Contact Us
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Get in Touch
                </h2>
                <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Have a question or feedback? Fill out the
                  form below and we'll get back to you as
                  soon as possible.
                </p>
              </div>
              <div className='mx-auto w-full max-w-sm space-y-2'>
                <form className='flex flex-col gap-2'>
                  <Input
                    type='text'
                    placeholder='Name'
                    className='max-w-lg flex-1'
                  />
                  <Input
                    type='email'
                    placeholder='Email'
                    className='max-w-lg flex-1'
                  />
                  <Textarea
                    placeholder='Message'
                    className='max-w-lg flex-1'
                    rows={4}
                  />
                  <Button type='submit'>Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
