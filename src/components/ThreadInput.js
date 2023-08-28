import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow-md py-20">
        <form className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 text-center">
            Tambahkan Thread
          </h5>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Judul
              <input
                type="text"
                id="title"
                value={title}
                onChange={onTitleChange}
                placeholder="Masukkan Judul..."
                className="title mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="thread"
              className="block mb-2 text-sm font-medium text-gray-90"
            >
              Isi Thread
              <textarea
                placeholder="Text..."
                style={{ height: 200 }}
                value={body}
                onChange={onBodyChange}
                id="thread"
                className="thread mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Kategori
              <input
                type="text"
                id="category"
                value={category}
                onChange={onCategoryChange}
                placeholder="Isi Kategori..."
                className="category title bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </label>
          </div>
          <button
            type="button"
            onClick={() => addThread({ title, body, category })}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
