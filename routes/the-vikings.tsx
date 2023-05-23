import Footer from "../components/Footer.tsx";
import VideoVikings from "../components/VideoVikings.tsx";

const Vikings = () => {
  return (
    <>
      <div className="h-screen">
        <VideoVikings />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
          <img
            className="my-0 mx-auto 
            animate__animated animate__fadeIn animate__delay-2s"
            src="/transition.svg"
            alt="Something"
          />

          <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-4
           animate__animated animate__fadeIn animate__delay-1s">
            The Vikings
          </h1>
        </div>
      </div>

      <div className="bg-gray-200 pt-32 relative w-full lg:py-12 lg:px-40 2xl:pt-28">
        <div class="flex flex-col md:flex-row">
          <h2 class="text-red-800 text-3xl text-center sm:hidden md:block md:w-1/4 md:mt-28 lg:text-4xl md:ml-32">
            Who where the Vikings?
          </h2>
          <div class=" px-4 pb-8 text-justify mt-8 md:max-w-3xl">
            <div class="mb-4 md:text-lg md:text-2xl">
              <p class="mb-4">
                <span class="font-bold text-xl md:text-3xl">O</span>
                ften the name viking conjures images of Brutes and Barbarians,
                but the truth is a little different. Vikings were warriors. More
                precisely ‘Viking’ is the name by which the Scandinavian
                sea-borne raiders of the early medieval period are now commonly
                known.
              </p>
              <p class="mb-4">
                Even before the earliest Viking raids on the monasteries, the
                Anglo-Saxons used an Old English word ‘wicing‘. But this was not
                a word that they used often or exclusively for the Scandinavian
                raiders; instead it was used for all-comers and meant ‘pirate’
                or ‘piracy’.
              </p>
              <p>
                It was only in the late tenth or early eleventh century, in
                Anglo-Saxon poems such as The Battle of Maldon that wicing came
                to mean ‘a Scandinavian sea-raider’. Vikings were not
                professional privateers or full-time soldiers – or, at least,
                not at first.
              </p>
              <p>
                Originally they were full-time fishermen and farmers who spent
                much of the year at home. Only in the summer would they have
                rallied to the call of a local leader and ventured across the
                sea to raid, trade or seek out new lands to settle.
              </p>
              <a
                href="/book-your-visit"
                class="text-red-700 flex justify-center mt-10 md:mt-20 md:text-2xl md:hover:underline"
              >
                Meet the Vikings at JORVIK Viking Centre
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 relative w-full lg:py-4 lg:px-20">
        <div class="flex flex-col pb-10">
          <h2 class="text-red-800 text-2xl text-center sm:hidden md:block md:w-1/4 md:mt-10 lg:text-3xl md:ml-52">
            The Old Norse language
          </h2>
          <div class=" px-4 pb-8 text-justify mt-8 md:max-w-4xl">
            <div class="mb-4 md:text-lg md:text-2xl">
              <p class="mb-4">
                <span class="font-bold text-xl md:text-3xl">S</span>
                poken in Scandinavia used the word ‘vikingr’ in its vocabulary,
                but its origins are uncertain. The explanation currently
                favoured is that it originally meant ‘a seaman who came from the
                Vik district of Oslo fjord’ and then came to mean sea-borne
                warrior, firstly from that area and later from all over
                Scandinavia.
              </p>
              <p>
                The word "Vik" also means a "bay", where the ships leaved the
                shore or arrived after a commercial or war expedition. The
                meaning of the old word "Vikíngr" is thus disputed and
                unfortunately, we cannot bring the deads back to life to make
                them speak. But note that the closesed living language to the
                old Norse one is Icelandic. Due to the isolation of the island
                the Icelandic language didn't really evolved much and a modern
                Icelandic speaker can understand the old "Sagas" writen in old
                Norse without problem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex bg-gray-200 relative w-full pb-10 justify-center">
        <button
          type="button"
          class="px-4 py-2 rounded-xl bg-yellow-700 hover:bg-gray-300 shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <a
            href="/book-your-visit"
            class="text-xl md:text-2xl text-gray-100 hover:text-black"
          >
            Book your tickets now
          </a>
        </button>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Vikings;
