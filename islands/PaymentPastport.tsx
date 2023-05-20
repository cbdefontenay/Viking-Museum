import TotalPaymentButton from "../islands/TotalPaymentButton.tsx";
import Popup from "../islands/PopUp.tsx";
import { useState } from "preact/hooks";

const Pastport = () => {
  const [pastportAdultCount, setPastportAdultCount] = useState(0);
  const [pastportChildCount, setPastportChildCount] = useState(0);
  const [pastportConcessionCount, setPastportConcessionCount] = useState(0);
  const [familyFourCount, setFamilyFourCount] = useState(0);
  const [familyFiveCount, setFamilyFiveCount] = useState(0);
  const [showedPopup, setShowedPopup] = useState(false);

  const incrementPastportAdultCount = (e: Event) => {
    e.preventDefault();
    setPastportAdultCount(pastportAdultCount + 1);
  };

  const decrementPastportAdultCount = (e: Event) => {
    e.preventDefault();
    if (pastportAdultCount > 0) {
      setPastportAdultCount(pastportAdultCount - 1);
    }
  };

  const incrementPastportChildCount = (e: Event) => {
    e.preventDefault();
    setPastportChildCount(pastportChildCount + 1);
  };

  const decrementPastportChildCount = (e: Event) => {
    e.preventDefault();
    if (pastportChildCount > 0) {
      setPastportChildCount(pastportChildCount - 1);
    }
  };

  const incrementPastportConcessionCount = (e: Event) => {
    e.preventDefault();
    setPastportConcessionCount(pastportConcessionCount + 1);
  };

  const decrementPastportConcessionCount = (e: Event) => {
    e.preventDefault();
    if (pastportConcessionCount > 0) {
      setPastportConcessionCount(pastportConcessionCount - 1);
    }
  };

  const incrementPastportFamilyFourCount = (e: Event) => {
    e.preventDefault();
    setFamilyFourCount(familyFourCount + 1);
  };

  const decrementPastportFamilyFourCount = (e: Event) => {
    e.preventDefault();
    if (familyFourCount > 0) {
      setFamilyFourCount(familyFourCount - 1);
    }
  };

  const incrementPastportFamilyFiveCount = (e: Event) => {
    e.preventDefault();
    setFamilyFiveCount(familyFiveCount + 1);
  };

  const decrementPastportFamilyFiveCount = (e: Event) => {
    e.preventDefault();
    if (familyFiveCount > 0) {
      setFamilyFiveCount(familyFiveCount - 1);
    }
  };

  const calculatedTotalPrice = (): number => {
    const pastportAdultPrice = pastportAdultCount * 21.75;
    const pastportChildPrice = pastportChildCount * 16.50;
    const pastportConcessionPrice = pastportConcessionCount * 18.75;
    const pastportFamilyFourPrice = familyFourCount * 65.00;
    const pastportFamilyFivePrice = familyFiveCount * 75.00;

    return parseFloat(
      (pastportAdultPrice + pastportChildPrice + pastportConcessionPrice +
        pastportFamilyFourPrice +
        pastportFamilyFivePrice).toFixed(2),
    );
  };

  const openPopup = (e: MouseEvent) => {
    e.preventDefault();
    setShowedPopup(true);
  };

  const closePopup = (e: MouseEvent) => {
    e.preventDefault();
    setShowedPopup(false);
  };

  return (
    <div className="h-screen bg-gray-500 overflow-x-hidden">
      <div className="grid grid-cols justify-center items-center mt-52 md:mt-44 w-full">
        <h1 className="flex items-center justify-center bg-gray-800 text-gray-200 px-10 py-4 rounded-lg">
          *Tickets Options:
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-yellow-500">Pastport - Adult</h2>
            <div className="flex items-center mt-2">
              <button
                className="bg-transparent focus:outline-none text-3xl md:text-4xl px-2 py-1 rounded-l"
                onClick={decrementPastportAdultCount}
              >
                -
              </button>
              <span className="px-2 text-gray-200">{pastportAdultCount}</span>
              <button
                className="bg-transparent focus:outline-none text-3xl md:text-4xl px-2 py-1 rounded-r"
                onClick={incrementPastportAdultCount}
              >
                +
              </button>
            </div>
            <p>Price: £21.75</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-xl text-yellow-500">Pastport - Child</h2>
            <p class="text-xs italic">Aged 5-16, accompanied by an adult</p>
            <div className="flex items-center mt-2">
              <button
                className="bg-transparent focus:outline-none text-3xl md:text-4xl px-2 py-1 rounded-l"
                onClick={decrementPastportChildCount}
              >
                -
              </button>
              <span className="px-2 text-gray-200">{pastportChildCount}</span>
              <button
                className="bg-transparent focus:outline-none text-3xl md:text-4xl px-2 py-1 rounded-r"
                onClick={incrementPastportChildCount}
              >
                +
              </button>
            </div>
            <p>Price: £16.50</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-xl text-yellow-500">
              Pastport - Concession
            </h2>
            <p class="text-xs mx-20 text-center italic">
              Senior aged 60+ or student with valid ID. Proof of eligibility
              must be shown on arrival, or you will be asked to pay the full
              price of entry.
            </p>
            <div className="flex items-center mt-2">
              <button
                className="bg-transparent focus:outline-none text-3xl md:text-4xl px-2 py-1 rounded-l"
                onClick={decrementPastportConcessionCount}
              >
                -
              </button>
              <span className="px-2 text-gray-200">
                {pastportConcessionCount}
              </span>
              <button
                className="bg-transparent focus:outline-none text-3xl md:text-4xl px-2 py-1 rounded-r"
                onClick={incrementPastportConcessionCount}
              >
                +
              </button>
            </div>
            <p>Price: £18.75</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-xl text-yellow-500">
              Pastport - Family of 4
            </h2>
            <p class="text-xs italic">2 adults and 2 children aged 5-16</p>
            <div className="flex items-center mt-2">
              <button
                className="bg-transparent focus:outline-none text-3xl md:text-4xl px-2 py-1 rounded-l"
                onClick={decrementPastportFamilyFourCount}
              >
                -
              </button>
              <span className="px-2 text-gray-200">{familyFourCount}</span>
              <button
                className="bg-transparent focus:outline-none text-3xl md:text-4xl px-2 py-1 rounded-r"
                onClick={incrementPastportFamilyFourCount}
              >
                +
              </button>
            </div>
            <p>Price: £65.00</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-lg text-yellow-500">
              Pastport - Family of 5
            </h2>
            <p class="text-xs text-center mx-20 italic ">
              2 adults and 3 children aged 5-16
            </p>
            <div className="flex items-center mt-2">
              <button
                className="bg-transparent focus:outline-none text-3xl md:text-4xl px-2 py-1 rounded-l"
                onClick={decrementPastportFamilyFiveCount}
              >
                -
              </button>
              <span className="px-2 text-gray-200">{familyFiveCount}</span>
              <button
                className="bg-transparent focus:outline-none text-3xl md:text-4xl px-2 py-1 rounded-r"
                onClick={incrementPastportFamilyFiveCount}
              >
                +
              </button>
            </div>
            <p>Price: £75.00</p>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <TotalPaymentButton TotalPrice={calculatedTotalPrice()} />

          <button
            type="button"
            className="ml-10 pt-10 text-white md:hover:text-yellow-500 focus:outline-none"
            onClick={openPopup}
          >
            Pay now
          </button>

          {showedPopup && (
            <>
              <Popup
                title="Pay Here"
                text="Thank you for your trust"
                onClose={closePopup}
                TotalPrice={calculatedTotalPrice()}
              />
            </>
          )}
        </div>
        <p class="my-10 px-4 text-center">
          *Note that if you quit the page, your datas will be automaticly
          erased.
        </p>
      </div>
    </div>
  );
};

export default Pastport;
