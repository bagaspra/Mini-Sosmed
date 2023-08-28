import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('');
  const onCommentSubmit = () => {
    addComment(comment);
    setComment('');
  };
  return (
    <>
      <h4 className="text-xl font-semibold">Beri komentar</h4>
      <form>
        <textarea
          rows="5"
          value={comment}
          onChange={onCommentChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 my-3"
        />
        <button
          type="button"
          onClick={onCommentSubmit}
          className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
        >
          Kirim
        </button>
      </form>
    </>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
