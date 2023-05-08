const Transition = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
        <img
          className="my-0 mx-auto"
          src="/transition.svg"
          alt="Something"
        />

        <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-6">
          The Original Viking
        </h1>

        <h1 className="text-4xl sm:text-6xl text-white leading-tight">
          Encounter
        </h1>

        <h2 className="text-yellow-500 text-2xl sm:text-4xl mt-4">
          <a href="/book-your-visit">Book Now</a>
        </h2>

        <img
          className="mt-4 mx-auto"
          src="/slide.svg"
          alt="Something round"
        />
      </div>
    </>
  );
};

export default Transition;
