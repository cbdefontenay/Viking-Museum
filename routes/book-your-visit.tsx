import Footer from "../components/Footer.tsx";
import ImagesLayers from "../components/book-your-visit/ImagesLayers.tsx";

const BookingPage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="bg-opacity-50">
          <img
            src="/viking-warrior.webp"
            alt="a viking warrior"
            className="absolute inset-0 z-[-1] w-screen h-screen object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
            <img
              className="my-0 mx-auto 
              animate__animated animate__fadeIn animate__delay-2s "
              src="/transition.svg"
              alt="Something"
            />

            <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-4
             animate__animated animate__fadeIn animate__delay-1s">
              Book your Visit
            </h1>
            <h2 className="text-white text-xl sm:text-2xl mt-10
             animate__animated animate__fadeIn animate__delay-2s">
              Booking your visit to JORVIK Viking Centre and our sister
              attractions couldn't be easier!
            </h2>
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-black pt-8 flex flex-col items-center mb-24 justify-center md:pt-20">
        <div class="flex flex-col items-center justify-center">
          <h1 className="text-red-700 mb-8 text-xl md:text-2xl lg:text-4xl">
            Select from the options below
          </h1>
          <p class="mx-10 text-justify text-white lg:mx-52 lg:px-32 md:text-xl md:text-center">
            Simply follow the links below to pre-book a selected time-slot.

            Don't forget to order a guidebook and souvenir coin - pre-book now
            and we'll have them ready when you visit.
          </p>
        </div>
        <ImagesLayers />
      </div>

      <div className="h-full">
        <Footer />
      </div>
    </>
  );
};

export default BookingPage;
