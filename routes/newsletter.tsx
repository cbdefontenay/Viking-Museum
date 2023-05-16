import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<string> = {
  async GET(_, ctx) {
    return await ctx.render();
  },
};

const Newsletter = ({ data }: PageProps) => {
  console.log(data);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-500">
        <h1 className="text-white">Newsletter</h1>
        <p className="text-white">{data}</p>
      </div>
    </>
  );
};

export default Newsletter;
