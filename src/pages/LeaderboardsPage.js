import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateLeaderboards } from '../states/leaderboards/action';
import LeaderBoardItem from '../components/LeaderboardItem';

export default function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center">
      <div className="py-20 px-0 w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <h4 className="font-semibold text-xl my-3 pl-7">
          Klasmen Pengguna Aktif
        </h4>
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6 text-center">
                  Foto
                </th>
                <th scope="col" className="py-3 px-6">
                  Pengguna
                </th>
                <th scope="col" className="py-3 px-6">
                  Skor
                </th>
              </tr>
            </thead>
            {leaderboards.map(({ user, score }) => (
              <LeaderBoardItem key={user.id} user={user} score={score} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
