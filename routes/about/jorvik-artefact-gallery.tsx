import ButtonWithMenu from "../../islands/ButtonWithMenu.tsx";

const ArtefactGallery = () => {
  return (
    <>
      <div className="h-screen">
        <div className="relative">
          <img
            src="/arrow-arc-viking.webp"
            alt="an old bracelet"
            className="absolute inset-0 z-[-1] w-screen h-screen object-cover"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
          <img
            className="my-0 mx-auto 
          animate__animated animate__fadeIn animate__delay-2s"
            src="/transition.svg"
            alt="Something"
          />

          <h1 className="text-3xl lg:text-6xl text-white leading-tight mt-8 
          animate__animated animate__fadeIn animate__delay-1s">
            JORVIK Artefact Gallery
          </h1>

          <ButtonWithMenu />
        </div>
      </div>

      <div className="flex justify-center bg-gray-200 pt-8 relative w-full lg:py-2">
        <div class="flex flex-col">
          <h2 class="text-center text-red-800 text-2xl text-center md:block md:mt-10 lg:text-5xl">
            Artefact Gallery
          </h2>
          <div class=" px-4 pb-8 text-justify mt-8 md:max-w-3xl">
            <div class="mb-4 md:text-lg md:text-2xl">
              <p class="mb-4">
                <span class="font-bold text-xl md:text-3xl">T</span>
                Artefact Gallery Before ‘The Viking Dig’, clues about what it
                was like to live in JORVIK were few and far between. Most came
                from objects found by chance when workmen were laying
                foundations or digging drains. Only a handful of small-scale
                excavations had encountered Viking-Age remains. The excavation
                at Coppergate produced 40,000 different archaeological layers or
                contexts and led to the discovery of over 250,000 pieces of
                pottery, 5 tonnes of animal bone and 40,000 individually
                interesting objects. All of this evidence has been identified,
                preserved and researched by York Archaeological Trust.
              </p>
              <p class="mb-4">
                This is a selection of the most typical, the rarest, the most
                beautiful and the most intriguing of these artefacts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtefactGallery;
