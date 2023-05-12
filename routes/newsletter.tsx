import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<string> = {
  // async GET(_, ctx) {
  //   const email: Response = await fetch("/login");
  //   console.log(email);

  // if (email === null) {
  //   return new Response("404");
  // } else {
  //   return ctx.render(email);
  // }
  // },
};

const Newsletter = (props: PageProps) => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-500">
        <h1 className="text-white">Newsletter</h1>
        <p className="text-white">{props.data}</p>
      </div>
    </>
  );
};

export default Newsletter;
