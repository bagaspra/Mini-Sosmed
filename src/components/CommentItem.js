/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';
import VoteButton from './VoteButton';
import postedAt from '../utils';

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  authUser,
}) {
  return (
    <div>
      <div className="justify-between mt-4">
        <div className="inline-flex items-center">
          <img
            className="w-6 h-6 rounded-full mr-1"
            src={owner.avatar}
            alt={`${owner.name}`}
          />
          <h5>{owner.name}</h5>
        </div>
        <div>
          <p className="font-light">{postedAt(createdAt)}</p>
        </div>
        <div className="mt-2">
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="mt-3">
          <VoteButton
            id={id}
            authUser={authUser}
            upVote={upVote}
            downVote={downVote}
            neturalizeVote={neturalizeVote}
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
          />
        </div>
        <hr className="my-6 border-gray-200" />
      </div>
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};
export { commentShape };
