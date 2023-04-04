export const ValidUrl = ({ setShowModal, setUrlInput }) => {
  const closeModal = () => {
    setShowModal(false);
    setUrlInput('');
  };

  return (
    <div className='absolute bg-white flex justify-center items-start mt-20 left-0 right-0 bottom-0 top-0 z-10'>
      <div className='bg-gray-100 w-3/5 text-center shadow-md py-20 rounded-md flex flex-col justify-center items-center'>
        <>Enter a valid URL!</>
        <button className='mt-4 py-1 bg-sky-500 px-4 rounded-md' onClick={closeModal}>
          OKAY
        </button>
      </div>
    </div>
  );
};
