import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

export default function VoteButton({
  id,
  upVote,
  downVote,
  neturalizeVote,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const onNeutralizeVoteClick = () => {
    neturalizeVote(id);
  };
  return (
    <>
      <p className="mr-3 inline-flex items-center">
        <button type="button" className="mr-1">
          {isUpVoted ? (
            <AiOutlineLike
              onClick={onNeutralizeVoteClick}
              className="text-blue-500"
            />
          ) : (
            <AiOutlineLike onClick={onUpVoteClick} />
          )}
        </button>
        {isUpVoted ? (
          <span className="text-blue-500"> {upVotesBy.length} </span>
        ) : (
          <span> {upVotesBy.length} </span>
        )}
      </p>
      <p className="mr-3 inline-flex items-center">
        <button type="button" className="mr-1">
          {isDownVoted ? (
            <AiOutlineDislike
              className="text-red-500"
              onClick={onNeutralizeVoteClick}
            />
          ) : (
            <AiOutlineDislike onClick={onDownVoteClick} />
          )}
        </button>
        {isDownVoted ? (
          <span className="text-red-500">{downVotesBy.length}</span>
        ) : (
          <span>{downVotesBy.length}</span>
        )}
      </p>
    </>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};
