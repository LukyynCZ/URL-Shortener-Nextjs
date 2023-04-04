import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='bg-gray-100 flex justify-center items-center flex-col shadow-lg mx-auto w-3/4 mt-20 rounded-lg max-w-3xl sm:px-20 py-10'>
      <h1 className='text-3xl py-5'>Page Not Found :(</h1>
      <Link href={'/'}>
        <button className='py-1 bg-lime-500 px-4 rounded-md'>HOME</button>
      </Link>
    </div>
  );
}
