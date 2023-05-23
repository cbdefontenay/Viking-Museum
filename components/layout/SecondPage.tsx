const SecondPage = () => {
  return (
    <>
      <div className="bg-gray-200 h-full pt-20 relative w-full lg:h-full lg:py-16 lg:px-40 2xl:pt-60">
        <h2 className="text-4xl text-center md:text-6xl">
          Welcome to
        </h2>
        <h2 className="text-4xl text-center md:text-6xl mt-2">JORVIK!</h2>
        <p className="text-center md:text-2xl mt-5 text-lg px-7 pb-2">
          Discover the Vikings! Pre-booking
          <a
            href="/book-your-visit"
            target="_blank"
            rel="noopener"
            className="text-yellow-500 ml-2"
          >
            online
          </a>,
          <p className="text-center text-lg px-7 pb-2 md:text-2xl">
            or by calling <strong>01904 616973</strong>, is advisable.
          </p>
        </p>
        <img
          className="w-60 h-44 items-center ml-28 mt-6 md:ml-auto md:mr-auto ml-20 pb-6 md:block md:items-center md:justify-items-center"
          src="/tourism.png"
          alt="tourism"
          loading="lazy"
        />

        <button
          type="button"
          className="bg-transparent border border-yellow-500 hover:bg-yellow-700 hover:text-white px-10 py-3 flex justify-center text-yellow-600 uppercase 
          rounded-3xl mx-auto md:px-24 md:py-4 items-center"
        >
          <a href="/book-your-visit">
            Book now
          </a>
        </button>
      </div>

      <img
        className="z-10 relative mb-0"
        src="/between.svg"
        alt="between"
      />
    </>
  );
};

export default SecondPage;
