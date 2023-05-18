const PriceList = () => {
  return (
    <>
      <div className="h-screen pt-20 sm:pt-80 bg-gray-400 overflow-x-hidden">
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-lg mx-auto">
            <div className="flex flex-col justify-center items-center p-4 bg-gray-100 shadow-lg rounded-md">
              <h3 className="text-lg font-semibold">Adults</h3>
              <p className="text-gray-600">Ages 18 and above</p>
              <p className="text-2xl font-bold">$10</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 bg-gray-100 shadow-lg rounded-md">
              <h3 className="text-lg font-semibold">Children</h3>
              <p className="text-gray-600">Ages 5-17</p>
              <p className="text-2xl font-bold">$5</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 bg-gray-100 shadow-lg rounded-md">
              <h3 className="text-lg font-semibold">Seniors</h3>
              <p className="text-gray-600">Ages 65 and above</p>
              <p className="text-2xl font-bold">$8</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceList;
