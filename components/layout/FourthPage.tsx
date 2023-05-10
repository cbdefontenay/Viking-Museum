const FourthPage = () => {
  return (
    <div className="relative text-white flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 relative z-10">
        <img
          src="/carta.webp"
          alt="carta marina"
          className="w-full"
        />
        <div className="absolute top-0 left-0 h-full flex flex-col items-center justify-center px-6">
          <img src="/arrowUp.svg" alt="an arrow" className="mb-4" />
          <p className="text-center font-bold mb-6 md:text-5xl">Your Visit</p>
          <p className="text-center mx-10 md:text-2xl">
            JORVIK Viking Centre is a must-see for visitors to the city of York
            and is one of the most popular visitor attractions in the UK.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative z-10">
        <img
          src="/vikings-actors.webp"
          alt="vikings actors"
          className="w-full h-full"
        />
        <div className="absolute top-0 left-0 h-full ml-32 font-bold tracking-wider flex flex-col items-center justify-center px-6 sm:ml-60 md:ml-32 lg:ml-96">
          <p className="text-center md:text-2xl lg:text-6xl">
            About JORVIK
          </p>
          <p className="text-center md:text-2xl lg:text-6xl">Viking Centre</p>

          <button
            type="button"
            class="bg-yellow-700 px-4 py-2 md:bg-transparent md:border md:border-yellow-500 mt-8 md:hover:bg-yellow-700 md:px-6 md:px-10 sm:py-3 md:py-4 
            flex justify-center items-center text-white md:uppercase rounded-3xl mx-auto"
          >
            <a href="/about">Click here</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
