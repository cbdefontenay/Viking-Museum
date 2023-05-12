import IconBrandFacebook from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-facebook.tsx";
import IconBrandYoutube from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-youtube.tsx";
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-instagram.tsx";

const Footer = () => {
  // const handleEmail = (e: any) => {
  //   e.preventDefault();
  //   window.location.href = "/newsletters";
  // };

  return (
    <div className="relative mt-auto min-w-full bg-black text-yellow-600">
      <img
        className="opacity-60 rounded-2xl h-60 sm:h-96 object-cover w-full z-0"
        src="/Village-masked.webp"
        alt="a viking village"
      />
      <div className="absolute top-0 left-0 z-10 w-full text-center text-xl sm:text-3xl mt-10 sm:mt-20 flex justify-center items-center flex-col">
        <h5 className="text-sm sm:text-base">
          Sign up to our newsletter for news updates &amp; events!
        </h5>
        <button type="submit" className="mt-8">
          <a href="/login">Subscribe to the Newsletter</a>
        </button>

        <div className="flex flex-row mt-4 sm:mt-8">
          <div className="flex items-center mr-2">
            <a href="https://www.facebook.com/JorvikYork">
              <IconBrandFacebook className=" ml-10 h-4 sm:h-6 mr-2" />
              <span className="text-xs sm:text-sm ml-6 mr-4 text-center">
                Facebook
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <a href="https://www.youtube.com/user/JORVIKyork">
              <IconBrandYoutube className=" ml-10 h-4 sm:h-6 mr-2" />
              <span className="text-xs sm:text-sm ml-6 mr-4 text-center">
                YouTube
              </span>
            </a>
          </div>

          <div className="flex items-center">
            <a href="https://www.instagram.com/jorvikviking/?hl=en">
              <IconBrandInstagram className=" ml-10 h-4 sm:h-6 mr-2" />
              <span className="text-xs sm:text-sm ml-6 mr-4 text-center">
                Instagram
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
