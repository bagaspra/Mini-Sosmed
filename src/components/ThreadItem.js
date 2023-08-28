import React from 'react';
import PropTypes from 'prop-types';
import { TfiComment } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import VoteButton from './VoteButton';
import postedAt from '../utils';

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neturalizeVote,
  threadOwner,
  authUser,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  return (
    <div>
      <header>
        <span className="bg-white text-sm font-medium mr-2 px-3 py-1 rounded border">
          {`#${category}`}
        </span>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
          onClick={onThreadClick}
          className="text-blue-600 text-xl font-medium my-3"
        >
          {title}
        </div>
        <div className="mb-3">
          <div
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{
              __html: body.length > 300 ? `${body.substring(0, 250)}...` : body,
            }}
          />
        </div>
      </header>
      <div className="flex">
        <div className="inline-flex items-center">
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
        <p className="mr-3 inline-flex items-center">
          <button href="/detail-thread" type="button" className="mr-1">
            <TfiComment />
          </button>
          {totalComments}
        </p>
        <p className="mr-3">{postedAt(createdAt)}</p>
        <p className="mr-3">
          Dibuat Oleh <span className="font-semibold">{threadOwner.name}</span>
        </p>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};

export { threadItemShape, userShape };
