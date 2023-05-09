import AboutImage from "../components/About/AboutImage.tsx";
import VideoAbout from "../components/VideoAbout.tsx";
import ButtonWithMenu from "../islands/ButtonWithMenu.tsx";

const About = () => {
  return (
    <>
      <div className="h-screen">
        <VideoAbout />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
          <img
            className="my-0 mx-auto"
            src="/transition.svg"
            alt="Something"
          />

          <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-6">
            About
          </h1>

          <h2 className="text-gray-200 text-2xl sm:text-4xl mt-20">
            The world famous JORVIK Viking Centre is a ‘must-see’ for visitors
            to the city of York
            <p>
              and is one of the most popular visitor attractions in the UK.
            </p>
          </h2>

          <ButtonWithMenu />
        </div>
      </div>

      <div className="bg-gray-200 h-full pt-32 relative w-full lg:h-full lg:py-12 lg:px-40 2xl:pt-28">
        <div class="flex flex-col md:flex-row">
          <h2 class="text-red-800 text-3xl text-center md:w-1/4 md:mt-28 lg:text-4xl md:ml-32">
            JORVIK Viking Centre
          </h2>
          <div class=" h-screen px-4 pb-8 text-justify mt-8 md:max-w-3xl">
            <div class="mb-4 md:text-lg md:text-4xl">
              <p class="mb-4">
                At the world famous JORVIK Viking Centre you are standing on the
                site of one of the most famous and astounding discoveries of
                modern archaeology. Between the years 1976-81 archaeologists
                from York Archaeological Trust, an independent educational
                charity, revealed the houses, workshops and backyards of the
                Viking Age city of Jorvik as it stood nearly 1,000 years ago.
              </p>
              <p class="mb-4">
                These incredible discoveries enabled us to build JORVIK Viking
                Centre on the very site where the excavations had taken place,
                creating a groundbreaking visitor experience where you take a
                journey through the reconstruction of Viking Age streets and
                experience life as it would have been in 10th century York.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutImage />
    </>
  );
};

export default About;
