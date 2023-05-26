import { useEffect, useState } from "preact/hooks";
import IconPlayerTrackNextFilled from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/player-track-next-filled.tsx";
import IconPlayerTrackPrevFilled from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/player-track-prev-filled.tsx";

type Slide = string;
type DescriptiveText = string;

const Carousel: preact.FunctionComponent = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [autoSlide, setAutoSlide] = useState<boolean>(true);

  const slides: Slide[] = [
    "/slide/comb.jpg",
    "/slide/key.webp",
    "/slide/face.webp",
    "/slide/shoes.webp",
    "/slide/perles.webp",
    "/slide/weapons.webp",
    "/slide/amber.webp",
    "/slide/woodencup.webp",
    "/slide/coins.webp",
  ];

  const descriptiveTexts: DescriptiveText[] = [
    "This barrel padlock and key was found during the Coppergate dig amongst other types of iron keys of various shapes and sizes. Possession of padlocks and keys may have been a status symbol as whoever owned them was in charge of household locks and could therefore control access to domestic spaces and valuables.",
    "Many examples of antler combs were found during the Coppergate dig. Combs require the use of specialized tools, so showcase considerable workmanship. Each of the comb’s teeth was carefully cut by hand and was assembled in several different parts which must have been a laborious process. Many combs featured ring and dot designs and sometimes a combination of chevrons.",
    "23 pieces of silk were found at Coppergate and may have originated from Byzantium in the Middle East. Amongst them was this almost complete silk hooded-shaped cap made from a rectangle of silk fabric. It would have been fastened under the chin by linen straps, now lost.",
    "This pair of ice skates are one of 42 found at Coppergate; the majority are made from horse leg bones although cattle leg bones were also used. The bones were cut flat and polished on one side and drilled with a hole at one end. A leather thong, held in place by a wooden peg, was inserted into the hole to attach the skate to the wearer’s ankle.",
    "Around 300 glass beads were found at the Coppergate dig and most of them were probably strung on necklaces. Most of these were just one colour, often green, blue and yellow, however, two unusual orange beads had a gold foil covering. Just a few of the beads are multi-coloured which were made by adding designs and patterns to a single coloured bead.",
    "Swords were contained in leather sheaths, several of which were found at Coppergate. Made of calf leather, these sheaths are decorated with cross-hatched lines. Patterns of this sort were made by drawing a blunt tool across leather.",
    "Amber was imported into Jorvik in its raw state and ranges from transparent to opaque, and is soft enough to be carved and drilled, making it popular for use in jewellery. During the Copperagte dig an amber working site was discovered with beads, rings and pendants.",
    "These wooden cups and bowls are amongst numerous wooden items found at Coppergate. The name ‘Coppergate’ is thought to derive from an old Norse name meaning ‘Street of the Cupmakers’. Some of the bowls were clearly valued, as they were repaired rather than thrown away when they became damaged. One bowl made of birch was repaired with metal staples to stop the crack from widening.",
    "These coin dies were recovered from two post-and-wattle buildings at the Coppergate dig. Coin dies were used in pairs with a silver blank sandwiched between them. The upper die would then be hammered with sufficient force to leave an impression on each side of the coin.",
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    let interval: number;

    if (autoSlide) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000) as unknown as number;
    }

    return () => clearInterval(interval);
  }, [autoSlide]);

  const handleMouseEnter = (e: Event) => {
    e.preventDefault();
    setAutoSlide(false);
  };

  const handleMouseLeave = (e: Event) => {
    e.preventDefault();
    setAutoSlide(true);
  };

  return (
    <div
      class="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div class="overflow-hidden w-full h-1/2">
        <div
          class="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide * 100) / slides.length}%)`,
            width: `${slides.length * 50}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              class="relative w-96 h-80 mx-28 rounded-xl animate__animated animate__fadeInRight animate__delay-1s"
            >
              <div
                class="absolute text-gray-200 px-4 text-md inset-0 flex items-center justify-center font-bold opacity-0 transition-opacity duration-300 bg-opacity-50 hover:opacity-100"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                }}
              >
                {descriptiveTexts[index]}
              </div>
              <div
                class="w-full h-full"
                style={{
                  backgroundImage: `url(${slide})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        class="absolute top-1/2 left-2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <IconPlayerTrackPrevFilled class="w-6 h-6" />
      </button>
      <button
        class="absolute top-1/2 right-2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <IconPlayerTrackNextFilled class="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;
