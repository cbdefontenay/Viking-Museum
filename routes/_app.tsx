import { AppProps } from "$fresh/server.ts";
import { Head } from "https://deno.land/x/fresh@1.1.5/runtime.ts";
import Navigation from "../islands/Navigation.tsx";
import ReactGA from "npm:react-ga";

export default function App({ Component }: AppProps) {
  const TRACKING_ID = "UA-256329277-3";
  ReactGA.initialize(TRACKING_ID);

  return (
    <>
      <div className="font-philosopher min-h-screen">
        <Head>
          <title>Jorvik Viking Museum</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <link rel="stylesheet" href="/styles/global.css" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Navigation />
        <Component />
      </div>
    </>
  );
}
