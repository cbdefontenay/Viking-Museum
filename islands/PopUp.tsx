import { FunctionalComponent } from "preact";
import PaymentForm from "./PaymentForm.tsx";

interface PopUp {
  title: string;
  text: string;
  onClose: (event: MouseEvent) => void;
  TotalPrice: number;
}

const Popup: FunctionalComponent<PopUp> = (
  { title, text, onClose, TotalPrice },
) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg sm:w-full md:w-1/2 lg:w-1/3">
        <h2 className="flex justify-center text-xl font-bold mb-4">{title}</h2>
        <p className=" flex justify-center text-gray-700 my-8">{text}</p>
        <PaymentForm TotalPrice={TotalPrice} />
        <div className="flex justify-end mt-6">
          <button
            className="focus:outline-none px-4 py-2 bg-black text-white rounded-xl hover:bg-yellow-600 hover:text-black mr-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
