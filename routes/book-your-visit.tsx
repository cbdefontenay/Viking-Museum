const BookingPage = () => {
  return (
    <div className="h-screen">
      <div className="bg-opacity-50">
        <img
          src="/viking-warrior.webp"
          alt="a viking warrior"
          className="absolute inset-0 z-[-1] w-screen h-screen object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
          <img
            className="my-0 mx-auto"
            src="/transition.svg"
            alt="Something"
          />

          <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-4">
            Book your Visit
          </h1>
          <h2 className="text-white text-xl sm:text-2xl mt-10">
            Booking your visit to JORVIK Viking Centre and our sister
            attractions couldn't be easier!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
