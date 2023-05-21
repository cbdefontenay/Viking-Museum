const PricesTable = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold my-20 text-yellow-700">
        Prices
      </h1>
      <div className="text-black w-full mb-10 sm:w-6/12 p-6 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-yellow-500 px-4 py-2">Category</th>
                <th className="text-yellow-500 px-4 py-2">JORVIK</th>
                <th className="text-yellow-500 px-4 py-2">
                  JORVIK &amp; DIG***
                </th>
                <th className="text-yellow-500 px-4 py-2">
                  JORVIK &amp; Barley Hall***
                </th>
                <th className="text-yellow-500 px-4 py-2">
                  Pastport (JORVIK, DIG, Barley Hall and City Walls
                  Experience)***
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black font-bold px-4 py-2 border-b border-gray-300">
                  Adult
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £15.00
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £16.00
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £15.75
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300 flex justify-center">
                  £21.75
                </td>
              </tr>
              <tr>
                <td className="text-black font-bold px-4 py-2 border-b border-gray-300">
                  *Child (5-16)
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £10.50
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £12.75
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £11.00
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300 flex justify-center">
                  £16.50
                </td>
              </tr>
              <tr>
                <td className="text-black font-bold px-4 py-2 border-b border-gray-300">
                  Concession
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £12.50
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £16.00
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £13.00
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300 flex justify-center">
                  £18.75
                </td>
              </tr>
              <tr>
                <td className="text-black font-bold px-4 py-2 border-b border-gray-300">
                  **Family 4
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £43.00
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £48.75
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300">
                  £45.00
                </td>
                <td className="text-black px-4 py-2 border-b border-gray-300 flex justify-center">
                  £65.00
                </td>
              </tr>
              <tr>
                <td className="text-black font-bold px-4 py-2">**Family 5</td>
                <td className="text-black px-4 py-2">£49.50</td>
                <td className="text-black px-4 py-2">£56.00</td>
                <td className="text-black px-4 py-2">£52.50</td>
                <td className="text-black px-4 py-2 flex justify-center">
                  £75.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricesTable;
