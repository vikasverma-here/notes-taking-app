import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Past = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const filteredPastess = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
    console.log(pasteId);
  };

  const handleShare = async (paste) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: paste.title,
          text: paste.content,
          url: window.location.href, // Optional: Include the current URL or a specific URL
        });
        console.log('Content shared successfully!');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <input
            className="text-black w-full p-4 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search Paste Here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid gap-8">
          {filteredPastess.length > 0 &&
            filteredPastess.map((paste) => {
              return (
                <div
                  className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col gap-5"
                  key={paste._id}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-800">{paste.title}</h1>
                      <p className="mt-2 text-gray-600">{paste.content}</p>
                    </div>
                    <span className="text-sm text-gray-500">{paste.createAt}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                      <Link to={`/?pasteId=${paste._id}`}>
                        <i className="ri-edit-2-fill"></i> Edit
                      </Link>
                    </button>
                    <button
                      className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                      onClick={() => handleDelete(paste._id)}
                    >
                      <i className="ri-delete-bin-fill"></i> Delete
                    </button>
                    <button
                      className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
                      onClick={() => {
                        navigator.clipboard.writeText(paste.content);
                        toast.success('Copied successfully');
                      }}
                    >
                      <i className="ri-file-copy-fill"></i> Copy
                    </button>
                    <button
                      className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                      onClick={() => handleShare(paste)}
                    >
                      <i className="ri-share-fill"></i> Share
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Past;
