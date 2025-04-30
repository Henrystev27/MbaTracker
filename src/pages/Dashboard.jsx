import React from 'react';

const Dashboard = () => {
  const user = {
    name: 'John Smith',
    points: 15,
    team: 'Team Terrapins',
    teamPoints: 39,
  };

  const getProgress = (points) => {
    const levels = [10, 25, 50, 100, 200];
    const next = levels.find((lvl) => lvl > points) || 500;
    const current = levels.reverse().find((lvl) => lvl <= points) || 0;
    return {
      percent: ((points - current) / (next - current)) * 100,
      next,
    };
  };

  const { percent, next } = getProgress(user.points);

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-smith-red">Welcome, {user.name}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Team: <span className="font-medium">{user.team}</span> • Team Points: {user.teamPoints}
            </p>
          </div>
          <div>
            <span className="text-xl font-bold">{user.points} pts</span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-medium mb-1">Progress to next level ({next} pts)</h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
            <div
              className="bg-primary h-4 rounded-full"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Submit activities to earn more points and unlock rewards.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
