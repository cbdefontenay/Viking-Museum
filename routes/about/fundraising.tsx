import Footer from "../../components/Footer.tsx";
import ButtonWithMenu from "../../islands/ButtonWithMenu.tsx";

const Fundraising = () => {
  return (
    <>
      <div className="h-screen">
        <div className="relative">
          <img
            src="/family-support-bigformat.webp"
            alt="a beautiful family"
            className="absolute inset-0 z-[-1] w-screen h-screen object-cover"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-2">
          <img
            className="my-0 mx-auto 
          animate__animated animate__fadeIn animate__delay-2s"
            src="/transition.svg"
            alt="Something"
          />

          <h1 className="text-3xl lg:text-6xl text-white leading-tight mt-8 
          animate__animated animate__fadeIn animate__delay-1s">
            Support Us
          </h1>
          <p class="mt-4 mx-4 text-justify md:text-center text-lg md:text-2xl text-gray-100 animate__animated animate__fadeIn animate__delay-2s">
            Can you help as we re-open the JORVIK Group of Attractions?
          </p>

          <ButtonWithMenu />
        </div>
      </div>

      <div className="flex justify-center bg-gray-200 pt-8 relative w-full lg:py-2s">
        <div class="flex flex-col">
          <h2 class="text-center text-red-800 text-2xl text-center md:block md:mt-10 lg:text-5xl">
            Can you help strengthen our long term future
            <h2 class="text-center text-red-800 text-2xl text-center md:block mt-4 md:mb-20 lg:text-5xl">
              and build better lives through heritage?
            </h2>
          </h2>

          <div class=" px-4 pb-8 text-justify mt-8 md:max-w-3xl">
            <div class="mb-4 md:text-lg md:text-2xl">
              <h3 class="mb-4 text-xl font-bold">
                As for many organisations, the coronavirus crisis is causing
                unpredictable and significant concerns for JORVIK Viking Centre
                and our sister attractions in York.
              </h3>
              <p class="mb-4">
                <span class="font-bold text-xl md:text-3xl">W</span>
                e have reacted to this challenge by developing a brand-new
                virtual engagement programme- ‘Virtual Vikings’, that will
                deliver similar on-line experiences to school classes, which we
                want to launch during the autumn term. This programme will
                enable our well-regarded learning team to deliver interactive
                sessions directly to classrooms across the UK, supporting
                teachers to provide history, literacy, science and other
                cross-curricular sessions.
              </p>
              <p>
                Owned and managed by York Archaeological Trust, we are part of a
                self-sustaining educational charity that generates income
                through the generosity of visitors, donors, volunteers and
                Friends. To help us create this valuable new offer for school
                children across the UK who cannot now visit our attractions, we
                need to purchase the technical equipment and learning resources
                to deliver it. We would be hugely grateful for your support
                helping us raise £120,000 to cover the costs of developing and
                running this exciting and beneficial new project.
              </p>

              <h1 className="text-3xl lg:text-6xl text-red-800 leading-tight mt-10 md:mt-20">
                How can you help?
              </h1>
              <p class="mb-4 mt-10">
                <span class="mr-2 font-bold text-red-800">Make a donation</span>
                – you can donate online or by phone.
              </p>
              <p class="mb-4">
                <span class="mr-2 font-bold text-red-800">
                  Buy tickets for a future visit
                </span>
                – you can book now for future visits to JORVIK Viking Centre and
                our other attractions, and we’ll guarantee a rebooking if we
                aren’t open on that date.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full">
        <Footer />
      </div>
    </>
  );
};

export default Fundraising;
