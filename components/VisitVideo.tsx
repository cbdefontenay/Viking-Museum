const VisitVideo = () => {
  return (
    <div className="relative">
      <video
        className="absolute inset-0 z-[-1] w-screen h-screen object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/visit-header.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VisitVideo;
