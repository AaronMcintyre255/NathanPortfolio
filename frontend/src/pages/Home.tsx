import React from "react";

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Website!
      </h1>
      <p className="text-lg text-gray-700">
        This is the homepage of my awesome React + Django website. Here you can
        find information about me, projects, and more.
      </p>
    </div>
  );
};

export default Home;
