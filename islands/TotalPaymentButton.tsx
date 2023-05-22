import { FunctionComponent } from "preact";

export interface Payment {
  TotalPrice: number;
}

const TotalPaymentButton: FunctionComponent<Payment> = ({ TotalPrice }) => {
  const formattedTotalPrice = typeof TotalPrice === "number"
    ? TotalPrice.toFixed(2)
    : "0.00";

  return (
    <div class="mt-4 flex justify-center">
      <button class="bg-yellow-600 text-black mt-8 ml-10 px-4 py-2 rounded-lg focus:outline-none">
        Total: £{formattedTotalPrice}
      </button>
    </div>
  );
};

export default TotalPaymentButton;
