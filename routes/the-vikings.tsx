import Footer from "../components/Footer.tsx";
import VideoVikings from "../components/VideoVikings.tsx";

const Vikings = () => {
  return (
    <>
      <div className="h-screen">
        <VideoVikings />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
          <img
            className="my-0 mx-auto"
            src="/transition.svg"
            alt="Something"
          />

          <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-4">
            The Vikings
          </h1>
        </div>

        {
          /* <div className="bg-gray-200 pt-32 relative w-full lg:h-full lg:py-12 lg:px-40 2xl:pt-28">
          <div class="flex flex-col md:flex-row">
            <h2 class="text-red-800 text-3xl text-center sm:hidden md:block md:w-1/4 md:mt-28 lg:text-4xl md:ml-32">
              Who where the Vikings?
            </h2>
            <div class=" h-screen px-4 pb-8 text-justify mt-8 md:max-w-3xl">
              <div class="mb-4 md:text-lg md:text-3xl">
                <p class="mb-4">
                  Often the name viking conjures images of Brutes and
                  Barbarians, but the truth is a little different. Vikings were
                  warriors. More precisely ‘Viking’ is the name by which the
                  Scandinavian sea-borne raiders of the early medieval period
                  are now commonly known.
                </p>
                <p class="mb-4">
                  Even before the earliest Viking raids on the monasteries, the
                  Anglo-Saxons used an Old English word ‘wicing‘. But this was
                  not a word that they used often or exclusively for the
                  Scandinavian raiders; instead it was used for all-comers and
                  meant ‘pirate’ or ‘piracy’.
                </p>
              </div>
            </div>
          </div>
        </div> */
        }
      </div>
      <div className="h-full">
        <Footer />
      </div>
    </>
  );
};

export default Vikings;
