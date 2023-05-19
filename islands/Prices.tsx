import { useState } from "preact/hooks";

const Prices = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);

  const incrementAdultCount = (e: MouseEvent) => {
    e.preventDefault();
    setAdultCount(adultCount + 1);
  };

  const decrementAdultCount = (e: MouseEvent) => {
    e.preventDefault();
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };

  const incrementChildCount = (e: MouseEvent) => {
    e.preventDefault();
    setChildCount(childCount + 1);
  };

  const decrementChildCount = (e: MouseEvent) => {
    e.preventDefault();
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };

  const incrementstudentCount = (e: MouseEvent) => {
    e.preventDefault();
    setStudentCount(studentCount + 1);
  };

  const decrementstudentCount = (e: MouseEvent) => {
    e.preventDefault();
    if (studentCount > 0) {
      setStudentCount(studentCount - 1);
    }
  };

  const incrementseniorCount = (e: MouseEvent) => {
    e.preventDefault();
    setSeniorCount(seniorCount + 1);
  };

  const decrementseniorCount = (e: MouseEvent) => {
    e.preventDefault();
    if (seniorCount > 0) {
      setSeniorCount(seniorCount - 1);
    }
  };

  const calculateTotalPrice = () => {
    const adultPrice = adultCount * 15;
    const childPrice = childCount * 10.5;
    const studentPrice = studentCount * 12.5;
    const seniorprice = seniorCount * 12.5;

    return (adultPrice + childPrice + studentPrice + seniorprice).toFixed(2);
  };

  return (
    <div className="h-screen pt-56 md:pt-72 bg-gray-500 overflow-x-hidden">
      <div className="grid grid-cols justify-center items-center w-full">
        <h1 className="flex items-center justify-center bg-gray-800 text-gray-200 px-10 py-4 rounded-lg">
          *Tickets Options:
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-yellow-500">Adult</h2>
            <div className="flex items-center mt-2">
              <button
                className="bg-transparent text-3xl md:text-4xl px-2 py-1 rounded-l"
                onClick={decrementAdultCount}
              >
                -
              </button>
              <span className="px-2">{adultCount}</span>
              <button
                className="bg-transparent text-3xl md:text-4xl px-2 py-1 rounded-r"
                onClick={incrementAdultCount}
              >
                +
              </button>
            </div>
            <p>Price: £15</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-xl text-yellow-500">Child</h2>
            <p class="text-xs md:text-sm">Aged 5-16, accompanied by an adult</p>
            <div className="flex items-center mt-2">
              <button
                className="bg-transparent text-3xl md:text-4xl px-2 py-1 rounded-l"
                onClick={decrementChildCount}
              >
                -
              </button>
              <span className="px-2">{childCount}</span>
              <button
                className="bg-transparent text-3xl md:text-4xl px-2 py-1 rounded-r"
                onClick={incrementChildCount}
              >
                +
              </button>
            </div>
            <p>Price: £10.50</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-xl text-yellow-500">JORVIK Student</h2>
            <p class="text-xs md:text-sm">With valid Student ID</p>
            <div className="flex items-center mt-2">
              <button
                className="bg-transparent text-3xl md:text-4xl px-2 py-1 rounded-l"
                onClick={decrementstudentCount}
              >
                -
              </button>
              <span className="px-2">{studentCount}</span>
              <button
                className="bg-transparent text-3xl md:text-4xl px-2 py-1 rounded-r"
                onClick={incrementstudentCount}
              >
                +
              </button>
            </div>
            <p>Price: £12.50</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-xl text-yellow-500">JORVIK Senior</h2>
            <p class="text-xs md:text-sm">Aged 60+</p>
            <div className="flex items-center mt-2">
              <button
                className="bg-transparent text-3xl md:text-4xl px-2 py-1 rounded-l"
                onClick={decrementseniorCount}
              >
                -
              </button>
              <span className="px-2">{seniorCount}</span>
              <button
                className="bg-transparent text-3xl md:text-4xl px-2 py-1 rounded-r"
                onClick={incrementseniorCount}
              >
                +
              </button>
            </div>
            <p>Price: £12.50</p>
          </div>
        </div>

        <div className="mt-4">
          <button className="bg-yellow-600 text-black mt-8 ml-10 px-4 py-2 rounded-lg">
            Calculate Total: £{calculateTotalPrice()}
          </button>

          <button
            type="button"
            class="ml-4 md:ml-12 border text-white border-yellow-600 px-4 py-2 rounded-xl md:hover:bg-yellow-600 md:hover:text-black"
          >
            Pay now
          </button>
        </div>
        <p class="my-10 px-4 text-center">
          *Note that if you quit the page, your datas will be automaticly
          erased.
        </p>
      </div>
    </div>
  );
};

export default Prices;
