import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

export default function ThreadsList({
  threads,
  upVote,
  downVote,
  neturalizeVote,
}) {
  return (
    <div>
      {threads.map((thread) => (
        <div key={thread.id}>
          <ThreadItem
            key={thread.id}
            {...thread}
            upVote={upVote}
            downVote={downVote}
            neturalizeVote={neturalizeVote}
          />
          <hr className="my-6 border-gray-300" />
        </div>
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};
