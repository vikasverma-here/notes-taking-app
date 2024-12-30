import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const allPaste = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const pasteId = searchParams.get('pasteId');

  useEffect(() => {
    if (pasteId) {
      const paste = allPaste.find((paste) => paste._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPaste]);

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste)); // Update paste
    } else {
      dispatch(addToPastes(paste)); // Create new paste
    }

    // Reset form and URL parameters
    setTitle('');
    setValue('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
        <header className="flex justify-between items-center pb-4 border-b border-gray-300">
          <input
            className="text-lg font-semibold text-gray-800 bg-gray-100 p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="text"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            className="ml-4 bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            onClick={createPaste}
          >
            {pasteId ? 'Update Paste' : 'Create My Paste'}
          </button>
        </header>

        <div className="mt-6">
          <textarea
            className="w-full h-72 p-4 text-gray-800 bg-gray-100 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none"
            placeholder="Enter your paste here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
        </div>

        <footer className="mt-4 text-right text-sm text-gray-500">
          <p>{pasteId ? 'Editing existing paste...' : 'Creating a new paste...'}</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
