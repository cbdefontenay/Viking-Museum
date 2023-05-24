const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <img
          src="/merchant.webp"
          alt="a viking warrior"
          className="bg-opacity-50 absolute inset-0 z-[-1] w-screen h-screen object-cover"
        />

        <form
          className="w-full mx-2 bg-black bg-opacity-50 text-white rounded-lg px-4 lg:px-20 lg:py-10 mb-20 sm:w-1/2 mt-20 sm:mt-52 animate__animated animate__fadeIn animate__delay-2s"
          action="https://formsubmit.co/cbdefontenay@gmail.com"
          method="POST"
        >
          <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-yellow-600 text-md md:text-2xl font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-yellow-600 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-yellow-600 text-md md:text-2xl font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-yellow-600 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-yellow-600 text-md md:text-2xl font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-yellow-600 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows={4}
                placeholder="Write your message"
                required
              >
              </textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
