import ButtonClickHere from "../components/ButtonClickHere.tsx";

const Newsletter = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center items-center px-10 md:px-52 h-screen bg-gray-500">
        <h1 className="text-gray-300 text-2xl md:text-4xl">
          Welcome to our newsletter.
        </h1>
        <p className="text-yellow-500 text-lg sm:text-2xl mt-10">
          By subscribing to our newsletter, you will get our monthly articles
          about what happened at the museum, what new archeological founds where
          made, and you may also get a discount if you answer some questions
          that you may recieve per e-mail at your demand.
        </p>
        <p className="text-yellow-500 text-md sm:text-2xl mt-10">
          So first, thanks for subscribing to our newsletter, you will get all
          the informations about the newsletter in an upcoming e-mail.
        </p>

        <ButtonClickHere href="/" text="Back Home" />
      </div>
    </>
  );
};

export default Newsletter;
