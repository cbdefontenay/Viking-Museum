import Footer from "../../components/Footer.tsx";
import ButtonWithMenu from "../../islands/ButtonWithMenu.tsx";

const Yat = () => {
  return (
    <>
      <div className="h-screen">
        <div className="relative">
          <img
            src="/archeology.webp"
            alt="archeology in motion"
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
            York Archaeological Trust
          </h1>
          <p class="mt-4 mx-4 text-justify md:text-center text-lg md:text-2xl text-gray-100 animate__animated animate__fadeIn animate__delay-2s">
            Through donations and visiting our attractions and events, you help
            York Archaeological Trust to continue to explore our rich and varied
            heritage.
          </p>

          <ButtonWithMenu />
        </div>
      </div>

      <div className="flex justify-center bg-gray-200 pt-8 relative w-full lg:py-2">
        <div class="flex flex-col">
          <h2 class="text-center text-red-800 text-2xl text-center md:block md:mt-10 lg:text-5xl">
            About York Archaeological Trust
          </h2>
          <div class=" px-4 pb-8 text-justify mt-8 md:max-w-3xl">
            <div class="mb-4 md:text-lg md:text-2xl">
              <p class="mb-4">
                <span class="font-bold text-xl md:text-3xl">Y</span>
                ork Archaeological Trust (YAT) is a self-funded educational
                charity and a leading professional archaeological organisation
                with an international reputation for research, development and
                maximising the public, educational and commercial benefits of
                archaeology from its offices in York, Nottingham, Sheffield and
                Glasgow.
              </p>
              <p class="mb-4">
                Founded in 1972 it delivers a wide range of urban and rural
                archaeological consultancies, surveys, evaluations, assessments
                and excavations for commercial, academic and charitable clients,
                providing professional advice and fieldwork to ensure a high
                quality, cost effective archaeological and heritage service.
              </p>
              <p class="mb-4">
                YAT’s Conservation Department is one of the country’s leading
                labs for conservation of artefacts and structures from a marine
                environment and offers unrivalled facilities and valuable
                knowledge on the conservation of waterlogged organic finds.
              </p>
              <p class="mb-4">
                YAT is known for its unique model of combining archaeological
                discovery with high levels of collections care, academic
                research and inspiring popular presentation. This is embodied in
                our flagship museum JORVIK Viking Centre, which has welcomed
                over 20 million visitors since opening in 1984 along with four
                further York-based visitor attractions, touring exhibitions to
                partner venues across the UK and one of the biggest Viking
                Festivals in Europe.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-gray-200 pt-8 relative w-full lg:py-2">
        <div class="flex flex-col">
          <h2 class="text-center text-red-800 text-2xl text-center md:block md:mt-10 lg:text-5xl">
            Moving Forward
          </h2>
          <div class=" px-4 pb-8 text-justify mt-8 md:max-w-3xl">
            <div class="mb-4 md:text-lg md:text-2xl">
              <p class="mb-4">
                <span class="font-bold text-xl md:text-3xl">W</span>
                ith extensive public, community and educational audiences, YAT’s
                work is made accessible through digital, interactive,
                experiential and discovery based learning opportunities. Through
                these channels we engage with over 1.2 million people across the
                world, helping communities of all ages, demographics, and
                interests to enjoy learning about their past.
              </p>
              <p class="mb-4">
                For further information on York Archaeological Trust visit their
                website
                <a
                  href="www.yorkarchaeologicaltrust.co.uk"
                  class="text-red-800 mx-2 font-bold"
                >
                  www.yorkarchaeologicaltrust.co.uk
                </a>
                or email <em class="mx-2 font-bold">example@yorkat.com.</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative text-white flex flex-col md:flex-row overflow-x-hidden">
        <div className="w-full md:w-1/2 relative z-10">
          <img
            src="/viking-warrior.webp"
            alt="a viking warrior"
            className="w-full h-full"
          />
          <div className="absolute top-0 left-0 h-full flex flex-col items-center justify-center px-6">
            <p className="text-center font-bold mb-2 mx-32 xl:ml-20 2xl:ml-52 lg:text-5xl">
              JORVIK Story
            </p>

            <button
              type="button"
              class="bg-yellow-700 px-4 py-2 lg:bg-transparent lg:border lg:border-yellow-500 mt-8 lg:hover:bg-yellow-700 lg:px-6 lg:px-10 sm:py-3 lg:py-4 
            flex justify-center items-center text-white lg:uppercase rounded-3xl mx-auto"
            >
              <a href="/about/jorvik-story">Click here</a>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative z-10">
          <img
            src="/family-support.webp"
            alt="viking family"
            className="w-full h-full"
          />
          <div className="absolute top-0 left-0 h-full ml-32 font-bold tracking-wider flex flex-col items-center justify-center px-6 sm:ml-60 md:ml-32 lg:ml-56">
            <p className="text-center md:text-2xl lg:text-5xl xl:mx-20">
              Support Us
            </p>

            <button
              type="button"
              class="bg-yellow-700 px-4 py-2 lg:bg-transparent lg:border lg:border-yellow-500 mt-8 lg:hover:bg-yellow-700 lg:px-6 lg:px-10 sm:py-3 lg:py-4 
            flex justify-center items-center text-white lg:uppercase rounded-3xl mx-auto"
            >
              <a href="/about/fundraising">Click here</a>
            </button>
          </div>
        </div>
      </div>

      <div className="h-full">
        <Footer />
      </div>
    </>
  );
};

export default Yat;
