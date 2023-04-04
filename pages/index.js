import { ValidUrl } from '@/components/validUrlModal';
import Head from 'next/head';
import { useState } from 'react';
const validUrl = require('valid-url');

export default function Home() {
  const [urlInput, setUrlInput] = useState('');
  const [fullUrl, setFullUrl] = useState('');
  const [shortId, setShortId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validUrl.isUri(urlInput)) {
      await fetch('http://localhost:3000/api/urls', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          url: urlInput,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setFullUrl(data.resUrl.fullUrl);
          setShortId(data.resUrl.shortId);
        });
    } else {
      setShowModal(true);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`http://localhost:3000/${shortId}`);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 1500);
  };

  return (
    <>
      <Head>
        <title>URL Shortener</title>
      </Head>
      <main>
        {showModal && <ValidUrl setShowModal={setShowModal} setUrlInput={setUrlInput} />}
        <div className='bg-gray-100 shadow-lg mx-auto w-3/4 mt-20 rounded-lg max-w-3xl sm:px-20 pb-10'>
          <h1 className='text-center text-3xl py-5'>URL Shortener</h1>
          <form
            onSubmit={handleSubmit}
            className='flex justify-center flex-col sm:flex-row w-5/6 mx-auto'>
            <input
              type='text'
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder='https://google.com'
              className='rounded-md mr-1 py-1 px-4 w-full mb-2 sm:mb-0'
            />
            <button className='py-1 bg-lime-500 px-4 rounded-md' type='submit'>
              SUBMIT
            </button>
          </form>
          <div className='flex justify-between flex-col sm:flex-row items-center w-5/6 mx-auto ps-4 py-5'>
            <a
              className='text-indigo-800 underline mb-2 sm:mb-0'
              href={`http://localhost:3000/${shortId}`}>
              http://localhost:3000/{shortId}
            </a>
            <button className='py-1 bg-gray-200 px-4 rounded-md' onClick={copyLink}>
              {copyStatus ? 'COPIED!' : 'COPY LINK'}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
