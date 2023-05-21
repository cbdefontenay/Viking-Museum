import Footer from "../components/Footer.tsx";
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

      <div class="bg-gray-200 w-full flex justify-center pt-10 md:pt-14">
        <img src="/jorvik-winner-visit.webp" alt="jorvik winner 2022" />
      </div>

      <div class="bg-gray-200 w-full pt-32 pb-14 md:pt-56 md:pb-20">
        <h1 class="flex justify-center text-3xl md:text-6xl">Opening Times</h1>
        <p class="flex text-justify md:justify-center mt-20 mx-4">
          Our planned opening hours for 2023 are as follows (the time shown is
          last admission, closing time is 1 hour later):
        </p>

        <div className="flex justify-center">
          <ul className="w-full max-w-md mt-20 mx-4">
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                24th April – 26th May 2023:
              </span>
              10am – 5pm
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                27th May – 4th June 2023:
              </span>
              9am – 5pm
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                5th June – 21st July 2023:
              </span>
              10am – 5pm
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                22nd July – 3rd September 2023:
              </span>
              9am – 5pm
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                4th September – 27th October 2023:
              </span>
              10am – 5pm
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                28th October – 5th November 2023:
              </span>
              9am – 5pm
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                6th November – 23rd December 2023:
              </span>
              10am - 4pm
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                27th December – 7th January 2024:
              </span>
              9am - 5pm
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                8th January – 9th February 2024:
              </span>
              10am – 4pm
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Visit;
