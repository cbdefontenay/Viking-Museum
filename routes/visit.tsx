import VisitVideo from "../components/VisitVideo.tsx";

const Visit = () => {
  return (
    <>
      <div className="h-screen">
        <VisitVideo />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
          <img
            className="my-0 mx-auto"
            src="/transition.svg"
            alt="Something"
          />

          <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-4">
            Visit
          </h1>

          <h2 className="text-gray-200 text-xl sm:text-3xl mt-10">
            Everything you Need to Plan Your Visit
          </h2>
        </div>
      </div>

      <div className="flex justify-center bg-gray-200 pt-8 relative w-full lg:py-2">
        <div class="flex flex-col">
          <h2 class="text-center text-red-800 text-2xl text-center md:block md:mt-10 lg:text-5xl">
            Plan your visit
          </h2>
          <div class=" px-4 pb-8 text-justify mt-8 md:max-w-3xl">
            <div class="mb-4 md:text-lg md:text-2xl">
              <p class="mb-4">
                <span class="font-bold text-xl md:text-3xl">T</span>
                o get the most out of your visit, you’ll find all of the
                information you need here. You can pre-book at any time by
                clicking{" "}
                <a
                  href="/book-your-visit"
                  class="text-yellow-600 hover:text-gray-600 hover:underline"
                >
                  HERE
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visit;
