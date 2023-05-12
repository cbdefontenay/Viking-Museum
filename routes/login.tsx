import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    return await ctx.render();
  },
  async POST(req: Request, ctx: HandlerContext) {
    const form = await req.formData();
    const email = form.get("email")?.toString();
    const headers = new Headers();
    console.log(email);

    // Add email to list.
    if (email) {
      headers.set("Location", "/newsletter");
      return new Response(null, {
        status: 303,
        headers,
      });
    } else {
      // Return an error response indicating unauthorized access
      return new Response(
        "Something went wrong, please try again or write us an email.",
        { status: 401 },
      );
    }
  },
};

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        className="absolute inset-0 z-[-1] w-screen h-screen object-cover"
        src="/viking-ax.webp"
        alt="Something"
      />

      <form
        className="w-full mx-2 bg-black bg-opacity-50 text-white rounded-lg py-16 pl-10 pr-10 sm:w-1/2 mt-4 sm:mt-10"
        method="post"
      >
        <label
          htmlFor="email"
          className="flex flex-col text-center md:text-xl lg:text-2xl"
        >
          <span>
            To subscribe to our monthly newsletter, please enter your email:
          </span>
          <input
            className="bg-transparent rounded-lg border-b border-yellow-600 my-8 active:bg-transparent text-center py-2 sm:py-4 px-2 sm:px-4"
            type="email"
            name="email"
            id="email"
            value=""
            placeholder="Enter your email address"
            required
          />

          <button
            type="submit"
            className="text-yellow-600 uppercase text-bold hover:animate-pulse"
          >
            Submit
          </button>
        </label>
      </form>
    </div>
  );
};

export default Login;
