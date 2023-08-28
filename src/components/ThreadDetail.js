/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';
import VoteButton from './VoteButton';
import postedAt from '../utils';

export default function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neturalizeVoteThreadDetail,
  authUser,
}) {
  return (
    <>
      <header>
        <span className="bg-white text-sm font-medium mr-2 px-3 py-1 rounded border">{`#${category}`}</span>
        <div className="text-slate-800 text-3xl font-bold my-3">{title}</div>
      </header>
      <div className="mb-3">
        <div className="text-lg">
          <span dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
      <div className="flex mb-7">
        <div className="inline-flex items-center">
          <VoteButton
            id={id}
            authUser={authUser}
            upVote={upVoteThreadDetail}
            downVote={downVoteThreadDetail}
            neturalizeVote={neturalizeVoteThreadDetail}
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
          />
        </div>
        <p className="mr-4">{postedAt(createdAt)}</p>
        <div className="inline-flex items-center">
          <img
            className="w-5 h-5 rounded-full mr-2"
            src={owner.avatar}
            alt={owner.name}
          />
          <p className="mr-3">
            Dibuat Oleh <span className="font-semibold">{owner.name}</span>
          </p>
        </div>
      </div>
    </>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neturalizeVoteThreadDetail: PropTypes.func.isRequired,
};
