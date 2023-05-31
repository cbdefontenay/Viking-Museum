import Footer from "../../../components/Footer.tsx";

const ReturnOfTheVikings = () => {
  return (
    <>
      <div className="h-screen">
        <img
          src="/viking-with-arrow.webp"
          alt="a viking warrior"
          className="bg-opacity-50 absolute inset-0 z-[-1] w-screen h-screen object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
          <img
            className="my-0 mx-auto 
            animate__animated animate__fadeIn animate__delay-2s"
            src="/transition.svg"
            alt="Something"
          />

          <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-4 
          animate__animated animate__fadeIn animate__delay-1s">
            2017: Return of the Vikings
          </h1>
          <h2 className="text-white text-xl sm:text-2xl mt-10 
          animate__animated animate__fadeIn animate__delay-2s">
            The newly re-imagined JORVIK Viking Centre reopened on Saturday 8th
            April 2017 after a multi-million pound investment.
          </h2>
        </div>
      </div>

      <div className="flex justify-center bg-gray-200 pt-8 relative w-full lg:py-2">
        <div class="flex flex-col">
          <h2 class="text-center text-red-800 text-2xl text-center md:block md:mt-10 lg:text-5xl">
            Re-imagined JORVIK Viking Centre
          </h2>
          <div class=" px-4 pb-8 text-justify mt-8 md:max-w-3xl">
            <div class="mb-4 md:text-lg md:text-2xl">
              <p class="mb-4">
                <span class="font-bold text-lg md:text-xxl">F</span>
                ollowing the catastrophic floods in December 2015, the JORVIK
                team worked rapidly to rebuild the Viking Centre. In April 2017,
                JORVIK reopened with an updated ride experience and state-of-the
                art galleries showcasing our unique collection of 1,000 year old
                artefacts.
              </p>
            </div>
            <img
              src="/discover-vikings.jpg"
              alt="inside the museum"
              class="rounded-lg md:ml-20 mt-20"
            />
            <h1 class="text-2xl md:text-4xl text-red-800 mt-10 ">
              Discover Coppergate
            </h1>
            <p class="mt-8 pb-8 text-lg md:text-xl">
              At JORVIK Viking Centre you are standing on the site which
              revealed some of the most famous and astounding discoveries in
              modern archaeology, so, it is fitting that your first experience
              at JORVIK is an exploration of the Coppergate dig, with a fully
              immersive display taking you back to the 1970s. Here you will hear
              the stories of the archaeologists who were involved in this
              revolutionary excavation and helped piece together the story of
              the Vikings of Jorvik, where they came from, how they lived, died
              and where they travelled to.
            </p>
          </div>
        </div>
      </div>

      <div className="h-full">
        <Footer />
      </div>
    </>
  );
};

export default ReturnOfTheVikings;
