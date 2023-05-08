const Video2 = () => {
  return (
    <div className="relative">
      <video
        className="absolute object-left inset-0 z-[-1] w-screen h-screen object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/woman-in-black.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video2;
