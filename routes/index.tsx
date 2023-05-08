import { asset, Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import Video from "../components/Video.tsx";
import Video2 from "../components/Video2.tsx";
import FourthPage from "../components/layout/FourthPage.tsx";
import SecondPage from "../components/layout/SecondPage.tsx";
import ThirdPage from "../components/layout/ThirdPage.tsx";
import Transition from "../components/layout/Transition.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>JORVIK Viking Museum</title>
        <link rel="stylesheet" href={asset("/styles/global.css")} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="h-screen">
        <Video />
        <Transition />
      </div>

      <div className="h-full">
        <SecondPage />
      </div>

      <div className="h-full">
        <Video2 />
        <ThirdPage />
      </div>

      <div className="h-full">
        <FourthPage />
      </div>
      <Footer />
    </>
  );
}
