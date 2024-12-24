import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await fetch(
      "https://randomuser.me/api/?page=1&results=1&seed=abc"
    );
    const dataObj = await response.json();
    const finalData = dataObj.results && dataObj.results[0];
    setData(finalData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-cyan-200 via-violet-300 to-sky-200">
      <div className="h-[450px] w-[700px] border-4 border-white bg-[#ddb9ff] opacity-80 rounded-[43px] relative z-20 shadow-lg">
        <div className="flex gap-5 h-[450px] w-[670px] bg-[#c1edf8] opacity-90 border-2 border-white rounded-[43px] absolute top-3 left-3 p-6">
          <div className="p-4 flex justify-center">
            <div className="w-52 h-52 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-sky-200 p-[6px] animate-border">
              <img
                src={data?.picture?.large}
                alt="Profile"
                className="w-full h-full rounded-full bg-white"
              />
            </div>
          </div>
          <div>
            <div className="mt-4 flex flex-col justify-around border-t pt-4">
                <h2 className="text-2xl font-extrabold text-gray-800">
                  {data?.name?.first} {data?.name?.last}
                </h2>
                <p className="text-sm tracking-wider font-normal text-gray-500">{data?.email}</p>
                <p className="mt-2 max-w-60 text-sm font-medium text-gray-600">
                I'm a resident of {data?.location?.city}, {data?.location?.country}.
                Feel free to reach out!
                </p>
                <div className="grid grid-cols-3 gap-2 -ml-6 my-4">
                  <div className="flex flex-col text-center">
                    <p className="font-bold text-lg">57</p>
                    <p className="text-sm text-gray-600">Age</p>
                  </div>
                  <div className="flex flex-col text-center">
                    <p className="font-bold text-lg">6</p>
                    <p className="text-sm text-gray-600">Years Active</p>
                  </div>
                  <div className="flex flex-col text-center">
                    <p className="font-bold text-lg">Ireland</p>
                    <p className="text-sm text-gray-600">Country</p>
                  </div>
                </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <button className="px-4 py-2 bg-black text-white text-sm rounded-lg shadow-md hover:bg-gray-800">
                Follow
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-800 text-sm rounded-lg border-2 border-white shadow-md hover:bg-gray-200">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
