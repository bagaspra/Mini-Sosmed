import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsList from '../components/ThreadsList';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeturalizeVoteThread,
} from '../states/threads/action';

function HomePage() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const categories = new Set(threads.map((thread) => thread.category));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeturalizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow-md py-24 px-9">
        <div className="mb-3">
          <h1 className="text-lg font-semibold mb-3">Kategori Popular</h1>
          {Array.from(categories).map((category) => {
            if (filter === category) {
              return (
                <div className="inline" key={category}>
                  <button
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                    key={category}
                    type="button"
                    onClick={() => setFilter('')}
                  >
                    {`#${category}`}
                  </button>
                </div>
              );
            }
            return (
              <div className="inline" key={category}>
                <button
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                >
                  {`#${category}`}
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-semibold mb-6">Diskusi Tersedia</h1>
          <ThreadsList
            threads={
              filter
                ? threadList.filter((thread) => thread.category === filter)
                : threadList
            }
            upVote={onUpVoteThread}
            downVote={onDownVoteThread}
            neturalizeVote={onNeturalizeVoteThread}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
