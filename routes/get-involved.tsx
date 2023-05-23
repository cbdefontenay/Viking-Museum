const GetInvolved = () => {
  return (
    <>
      <div className="relative">
        <img
          src="/merchant.webp"
          alt="an old bracelet"
          className="absolute inset-0 z-[-1] w-screen h-screen object-cover"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
        <img
          className="my-0 mx-auto"
          src="/transition.svg"
          alt="Something"
        />

        <h1 className="text-3xl lg:text-6xl text-white leading-tight mt-8">
          Get Involved
        </h1>
        <p className="text-white text-lg mt-8 lg:text-xl">
          There are so many ways to get involved in sharing the unique heritage
          of the Vikings in York; from volunteer and placement opportunities to
          the chance to be part of engaging community projects and jobs &
          careers at JORVIK itself.
        </p>
      </div>
    </>
  );
};

export default GetInvolved;
