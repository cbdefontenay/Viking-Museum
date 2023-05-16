import ButtonClickHere from "../../components/ButtonClickHere.tsx";
import Footer from "../../components/Footer.tsx";

const JorvikStory = () => {
  return (
    <>
      <div className="h-screen">
        <img
          src="/viking-warrior.webp"
          alt="a viking warrior"
          className="bg-opacity-50 absolute inset-0 z-[-1] w-screen h-screen object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
          <img
            className="my-0 mx-auto"
            src="/transition.svg"
            alt="Something"
          />

          <h1 className="text-4xl sm:text-6xl text-white leading-tight mt-4">
            Jorvik Story
          </h1>
          <h2 className="text-white text-xl sm:text-2xl mt-10">
            Over the past 35 years JORVIK has revolutionised the heritage
            attraction experience, bringing the past to life like never before.
          </h2>
        </div>
      </div>

      <div className="h-full bg-gray-400 mt-auto pl-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="">
          <img
            src="/runen/runen.png"
            alt="a rune"
            className="justify-center pl-14"
          />
          <h1 className="text-xl text-center mr-8 text-red-800">
            2017: Return of the Vikings
          </h1>
          <img
            src="/cross.svg"
            alt="a cross"
            className="ml-32 my-8 pl-8 animate-pulse"
          />
          <p className="text-center mr-8 mb-8">
            JORVIK Viking Centre has been completely re-imagined, with a new
            experiences and stories to be told.
          </p>
          <ButtonClickHere href="/" text="Click Here" />
        </div>

        <div className="">
          <img
            src="/runen/runen2.png"
            alt="a rune"
            className="justify-center pl-14"
          />
          <h1 className="text-xl text-center mr-8 text-red-800">
            2001: Time Machine Travels
          </h1>
          <img
            src="/cross.svg"
            alt="a cross"
            className="ml-32 my-8 pl-8 animate-pulse "
          />
          <p className="text-center mr-8 mb-8">
            A new experience was installed at the start of the new millennium
            that took our visitors, quite literally, back in time to explore
            Viking-Age York.
          </p>
          <ButtonClickHere href="/" text="Click Here" />
        </div>

        <div className="">
          <img
            src="/runen/runen3.png"
            alt="a rune"
            className="justify-center pl-14"
          />
          <h1 className="text-xl text-center mr-8 text-red-800">
            2015: The JORVIK Flood
          </h1>
          <img
            src="/cross.svg"
            alt="a cross"
            className="ml-32 my-8 pl-8 animate-pulse"
          />
          <p className="text-center mr-8 mb-8">
            The severe flooding in York at Christmas 2015 caused major damage at
            JORVIK Viking Centre but also brought about the re-imagining.
          </p>
          <ButtonClickHere href="/" text="Click Here" />
        </div>

        <div className="">
          <img
            src="/runen/runen4.png"
            alt="a rune"
            className="justify-center pl-14"
          />
          <h1 className="text-xl text-center mr-8 text-red-800">
            2010: New Norse
          </h1>
          <img
            src="/cross.svg"
            alt="a cross"
            className="ml-32 my-8 pl-8 animate-pulse"
          />
          <p className="text-center mr-8 mb-8">
            JORVIK went back to its archaeological roots in this update,
            showcasing the Coppergate dig prominently in a new glass-floored
            gallery.
          </p>

          <ButtonClickHere href="/" text="Click Here" />
        </div>
      </div>
      <div className="h-full">
        <Footer />
      </div>
    </>
  );
};

export default JorvikStory;
