import { useEffect } from "preact/hooks";
import ReactGA from "npm:react-ga";

const Google = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return null;
};

export default Google;
