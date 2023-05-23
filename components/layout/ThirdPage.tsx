const ThirdPage = () => {
  return (
    <div className="mx-auto text-yellow-600 md:mr-auto md:w-9/12">
      <div className="flex flex-col items-center md:flex-row md:items-center">
        <p className="text-3xl pt-8 md:pt-14 pr-6 md:ml-10 md:mr-auto 2xl:ml-56">
          What's on?
        </p>
        <div className="flex justify-center items-center pt-8 md:pt-14 2xl:mr-72">
          <img
            className="w-1/5 md:w-3/5 mx-2 text-yellow-500"
            src="/rune.svg"
            alt="rune"
          />

          <img
            className="w-1/5 md:w-3/5 mx-2"
            src="/rune.svg"
            alt="rune"
          />

          <button
            type="button"
            className="border border-yellow-600 py-2 text-black bg-yellow-600 px-8 ml-8 rounded-2xl w-full"
          >
            <a href="/whats-on" className="">Events</a>
          </button>
        </div>
      </div>

      <img
        className="transition-opacity rounded-lg mt-24 mb-10 z-3 border-0 block md:h-1/2 md:mt-6 2xl:ml-56"
        src="/bracelet.jpg"
        alt="a bracelet"
      />
    </div>
  );
};

export default ThirdPage;
