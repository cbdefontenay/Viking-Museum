import { useState } from "preact/hooks";
import TotalPaymentButton, { Payment } from "./TotalPaymentButton.tsx";
import { FunctionComponent } from "preact";

const PaymentForm: FunctionComponent<Payment> = ({ TotalPrice }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleInputChange = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    switch (name) {
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cardName":
        setCardName(value);
        break;
      case "expiryDate":
        setExpiryDate(value);
        break;
      case "cvv":
        setCvv(value);
        break;
      default:
        break;
    }
  };

  const handlePayment = (e: MouseEvent) => {
    e.preventDefault();
    // You can perform the payment processing logic here
    console.log("Card details:", { cardNumber, cardName, expiryDate, cvv });
  };

  return (
    <form class="max-w-xs mx-auto">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="cardNumber"
        >
          Card Number
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cardNumber"
          type="text"
          name="cardNumber"
          value={cardNumber}
          onChange={handleInputChange}
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="cardName"
        >
          Card Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cardName"
          type="text"
          name="cardName"
          value={cardName}
          onChange={handleInputChange}
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="expiryDate"
        >
          Expiry Date
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="expiryDate"
          type="text"
          name="expiryDate"
          value={expiryDate}
          onChange={handleInputChange}
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="cvv">
          CVV
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cvv"
          type="text"
          name="cvv"
          value={cvv}
          onChange={handleInputChange}
        />
      </div>
      <div class="flex justify-center">
        <button
          class="mt-10 font-bold focus:outline-none focus:shadow-outline md:hover:text-blue-600"
          type="submit"
          onClick={handlePayment}
        >
          Pay Now
        </button>

        <TotalPaymentButton TotalPrice={TotalPrice} />
      </div>
    </form>
  );
};

export default PaymentForm;
