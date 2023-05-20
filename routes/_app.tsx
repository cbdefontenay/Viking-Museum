import { AppProps } from "$fresh/server.ts";
import { Head } from "https://deno.land/x/fresh@1.1.5/runtime.ts";
import Navigation from "../islands/Navigation.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <div className="font-philosopher min-h-screen">
        <Head>
          <title>Jorvik Viking Museum</title>
          <link rel="stylesheet" href="/styles/global.css" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Navigation />
        <Component />
      </div>
    </>
  );
}
