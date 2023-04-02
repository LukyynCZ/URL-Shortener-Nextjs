import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [urlInput, setUrlInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch('http://localhost:3000/api/urls', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        url: urlInput,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <Head>
        <title>URL Shortener</title>
      </Head>
      <main>
        <div className='bg-gray-100 shadow-lg m-auto w-3/4 mt-20 rounded-lg max-w-3xl px-20 pb-20'>
          <h1 className='text-center text-3xl py-5'>URL Shortener</h1>
          <form onSubmit={handleSubmit} className='flex justify-center w-full'>
            <input
              type='text'
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder='https://google.com'
              className='rounded-md mr-1 py-1 px-4 w-2/3'
            />
            <button className='py-1 bg-lime-500 px-4 rounded-md' type='submit'>
              SUBMIT
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
