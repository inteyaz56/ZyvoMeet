import React, { useRef } from "react";

const Dashboard = () => {
  let videoRef = useRef(null);

  const startCamera = async () => {
    let stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    videoRef.current.srcObject = stream;
  };

  return (
    <div className="w-full h-screen bg-gray-500 gap-4 p-4 flex flex-col items-center justify-center ">
      <div className="w-[500px] h-[400px]  bg-white rounded-2xl shadow-lg ">
        <video ref={videoRef} />
      </div>

      <button
        onClick={startCamera}
        className="w-[100px] h-[40px] bg-blue-500 text-white cursor-pointer rounded-lg font-semibold "
      >
        Call
      </button>
    </div>
  );
};

export default Dashboard;
