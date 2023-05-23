import Footer from "../components/Footer.tsx";
import VisitVideo from "../components/VisitVideo.tsx";
import PricesTable from "../components/prices-table/PricesTable.tsx";

const Visit = () => {
  return (
    <>
      <div className="h-screen">
        <VisitVideo />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
          <img
            className="my-0 mx-auto 
            animate__animated animate__fadeIn animate__delay-2s"
            src="/transition.svg"
            alt="Something"
          />

          <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-4
           animate__animated animate__fadeIn animate__delay-1s">
            Visit
          </h1>

          <h2 className="text-gray-200 text-xl sm:text-3xl mt-10
           animate__animated animate__fadeIn animate__delay-2s">
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
        <p class="flex text-justify text-lg md:justify-center md:text-2xl mt-20 mx-4 md:mx-44">
          Our planned opening hours for 2023 are as follows (the time shown is
          last admission, closing time is 1 hour later):
        </p>

        <div className="flex justify-center">
          <ul className="w-full max-w-md md:max-w-xl md:ml-20 mt-20 mx-4">
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
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                10th February – 18th February 2024:
              </span>
              9am – 5pm
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                19th February – 22nd March 2024:
              </span>
              10am – 4pm
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold mr-2 text-xl">
                23rd March – 14th April 2024:
              </span>
              9am – 5pm
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold text-xl">
                If you are booked into the last time slot, please arrive on
                time.
              </span>
            </li>
            <li className="py-1 mt-4 sm:py-2">
              <span class="font-bold text-xl">
                You can expect your visit to JORVIK to last around one hour.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-gray-200 w-full">
        <p class="mx-4 md:mx-72 pb-8 md:pb-20 text-justify md:text-xl">
          We ask that you arrive on time for your visit. The time you have
          booked is the time we will start admitting visitors for that slot. In
          busy times, it may take up to 20 minutes to admit everyone who has
          booked that slot. Due to our controls on visitor capacity, we are not
          able to admit visitors who are late, but we may be able to move your
          visit to another time if there are spaces available.
        </p>
      </div>

      <div class="bg-gray-200 w-full">
        <PricesTable />
      </div>

      <div class="bg-gray-200 w-full flex justify-center items-center flex-col">
        <div class="w-7/12 mt-16 mb-24 text-center">
          <p class=" mb-4 md:text-xl">
            *Please be aware that children aged 16 or under must be accompanied
            by an adult.
          </p>
          <p class="mb-4 md:text-xl">
            **Maximum of 2 adults per family ticket.
          </p>

          <p class="mb-8 md:text-xl">
            ***Please be aware that Tesco Clubcard Partner codes cannot be used
            for the purchase of joint museum tickets including the Pastport.
            Booking using the Clubcard Partner codes can be booked online using
            the ‘Tesco Clubcard Reward Partner’ ticket on our website or via
            phone on 01904 896473.
          </p>

          <p class="md:text-xl">
            <em>Prices valid as of 02/01/2023</em>
          </p>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Visit;
