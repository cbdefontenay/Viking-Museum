import ArrowVikingVideo from "../components/ArrowVikingVideo.tsx";

const WhatsOn = () => {
  return (
    <>
      <div className="h-screen">
        <ArrowVikingVideo />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
          <img
            className="my-0 mx-auto"
            src="/transition.svg"
            alt="Something"
          />

          <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-4">
            What's on at Jorvik?
          </h1>
        </div>
      </div>

      <div className="bg-gray-200 pt-32 relative w-full lg:h-full lg:py-12 lg:px-40 2xl:pt-28">
        <div class="container mx-auto p-4">
          <div class="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="bracelet.jpg" alt="a nice old bracelet" class="w-full" />
            <div class="p-4 flex flex-col justify-center items-center">
              <span class="text-sm flex justify-center mb-8">
                8TH FEBRUARY 2022 - 16TH OCTOBER 2023
              </span>
              <h1 class="text-2xl font-bold mb-2 flex justify-center">
                Silverdale Hoard Exhibition
              </h1>
              <img
                className="mt-4 mx-auto"
                src="/transition.svg"
                alt="Something"
              />
              <p class="mb-4 mt-4 flex justify-center">
                Discover one of the largest hoards ever discovered in the UK.
              </p>
              <button
                type="button"
                class="bg-yellow-700 hover:bg-yellow-600 text-gray-800 mt-10 font-bold py-2 px-4 rounded-xl"
              >
                <a href="/whats-on/silverdale-hoard-exhibition">Click here</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsOn;
