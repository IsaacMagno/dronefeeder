import React from "react";

const Hero = () => {
  return (
    <div
      className='relative min-h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3'
      id='hero-div'
    >
      <div className='video-docker absolute top-0 left-0 w-full h-full overflow-hidden'>
        <video
          autoPlay
          loop
          muted
          className='min-w-full min-h-full absolute object-cover'
          src='https://assets.mixkit.co/videos/preview/mixkit-low-view-of-a-drone-flying-against-the-sky-32585-large.mp4'
        ></video>
      </div>
      <div className='video-content space-y-2'>
        <h1 className='text-8xl mt-20 font-bold text-white/60'>DRONELIVERY</h1>
        <p className='text-3xl font-thin text-white-70 mb-8'>
          Aqui sua entrega chega voando!
        </p>
      </div>
    </div>
  );
};

export default Hero;
