import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';

export default function LeaderBoardItem({ user, score }) {
  return (
    <tbody>
      <tr className="bg-white hover:bg-gray-50">
        <td className="py-2 px-6">
          <img
            className="rounded-full w-8 h-8 mx-auto"
            alt="Avatar Icon"
            src={user.avatar}
          />
        </td>
        <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
          {user.name}
        </td>
        <td className="py-4 px-6">{score}</td>
      </tr>
    </tbody>
  );
}

LeaderBoardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};
