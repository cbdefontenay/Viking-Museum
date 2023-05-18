const ImagesLayers = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 my-0 mx-0 border-0 w-full">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.64)]">
        </div>
        <img
          className="w-full "
          src="/book-your-vikings.png"
          alt="vikings"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-6">
          <img src="/arrowUp.svg" alt="an arrow" className="mb-8" />
          <h1 className="text-yellow-300 text-4xl md:text-5xl mb-4 text-center">
            Book JORVIK
          </h1>
          <p className="text-yellow-500 text-xl md:font-bold md:text-2xl text-center">
            Pre-booking your tickets is advisable
          </p>

          <button
            type="button"
            class="text-yellow-400 mt-8 text-xl border border-yellow-800 hover:bg-yellow-800 hover:text-gray-300 rounded-3xl px-8 py-2"
          >
            <a href="/event-tickets">Click Here</a>
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[rgba(31,42,68,0.64)]">
        </div>
        <img
          className="w-full"
          src="/roman.png"
          alt="vikings"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-6">
          <img src="/arrowUp.svg" alt="an arrow" className="mb-8" />
          <h1 className="text-yellow-300 text-4xl md:text-5xl mb-4 text-center">
            Book Pastport
          </h1>
          <p className="text-white text-xl md:font-bold md:text-2xl text-center md:px-8">
            Entry to 4 fantastic York attractions - JORVIK, Barley Hall, DIG and
            City Walls Experience
          </p>

          <button
            type="button"
            class="text-yellow-400 mt-8 text-xl border border-yellow-800 hover:bg-yellow-800 hover:text-gray-300 rounded-3xl px-8 py-2"
          >
            <a href="/">Click Here</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagesLayers;
