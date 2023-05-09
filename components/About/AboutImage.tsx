const AboutImage = () => {
  return (
    <div
      className="h-screen bg-gray-200 pt-10 bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url('/achterbahn.webp')` }}
    >
      <div className="flex flex-col justify-center items-center h-72 w-11/12 sm:w-2/4 px-4 md:px-8 lg:px-10">
        <div className="bg-red-800 p-4 w-full md:w-6/12 rounded-md h-auto md:h-4/6 text-center md:text-left md:p-8 lg:p-10 mb-4 md:mb-0">
          <h1 className="text-yellow-600 text-2xl font-bold mb-2 md:text-3xl">
            Discover Viking York
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-xl">
            Explore what was found at the astonishing Coppergate dig
          </p>
        </div>

        <div class="ml-4 md:ml-8 bg-gray-800 bg-opacity-50 w-full">
          <p class="mt-4 sm:mt-8 md:mt-12 text-justify px-4 sm:px-8 py-4 sm:py-8 text-white text-sm sm:text-xl lg:text-2xl">
            &nbsp;With an updated ride experience and state-of-the art galleries
            showcasing our unique collection of Viking artefacts visit the
            re-imagined JORVIK Viking Centre and discover York’s fascinating
            Viking legacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
