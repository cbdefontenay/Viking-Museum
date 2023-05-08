import VideoAbout from "../components/VideoAbout.tsx";

const About = () => {
  return (
    <>
      <div>
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

          <h2 className="text-gray-200 text-2xl sm:text-4xl mt-4">
            The world famous JORVIK Viking Centre is a ‘must-see’ for visitors
            to the city of York
            <p>
              and is one of the most popular visitor attractions in the UK.
            </p>
          </h2>
        </div>
      </div>
    </>
  );
};

export default About;
