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

        {
          /* <div className="absolute mt-80 ml-54 flex flex-col justify-center items-center z-2">
          <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-4 text-center">
            This is Just the Beginning
          </h1>
        </div> */
        }
      </div>
    </>
  );
};

export default VideoKnight;
