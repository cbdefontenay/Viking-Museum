import { AppProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Navigation from "../islands/Navigation.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <div className="font-philosopher">
        <Component />
        <Navigation />
        <Footer />
      </div>
    </>
  );
}
