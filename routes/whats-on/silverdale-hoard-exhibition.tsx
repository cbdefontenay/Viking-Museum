const SiverExhibition = () => {
  return (
    <>
      <div className="relative">
        <img
          src="/bracelet.jpg"
          alt="an old bracelet"
          className="absolute inset-0 z-[-1] w-screen h-screen object-cover"
        />
      </div>

      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
        <img
          className="my-0 mx-auto"
          src="/transition.svg"
          alt="Something"
        />

        <h1 className="text-3xl lg:text-6xl text-yellow-500 leading-tight mt-8">
          Uncover the Silverdale Hoard at JORVIK
        </h1>
        <h2 className="text-yellow-500 text-xl mt-8 lg:text-2xl">
          Exhibition opens 8 February 2022
        </h2>
      </div>
    </>
  );
};

export default SiverExhibition;
