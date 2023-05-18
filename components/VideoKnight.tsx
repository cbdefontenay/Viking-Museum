const VideoKnight = () => {
  return (
    <>
      <div className="relative">
        <video
          className="absolute inset-0 z-[-1] w-screen h-screen object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/knight-shadow.mp4" type="video/mp4" />
        </video>

        <div className="absolute mt-80 ml-54 flex flex-col justify-center items-center z-2">
          <h1 className="text-2xl ml-10 md:text-6xl md:pl-96 md:ml-24 text-white leading-tight mt-24 text-center">
            This is Just the Beginning
          </h1>
          <p class="text-gray-300 px-4 text-center flex flex-col md:items-center md:justify-center mt-8 md:ml-96 md:pl-12 md:mt-10">
            Discover all ticket options for our sister attractions, including
            joint tickets and event bookings.
          </p>
          <button
            type="button"
            class="text-yellow-400 mt-8 text-xl border border-yellow-800 hover:bg-yellow-800 hover:text-gray-300 rounded-3xl px-8 py-2"
          >
            <a href="/">Click Here</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoKnight;
