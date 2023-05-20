import { useState } from "preact/hooks";
import TotalPaymentButton, { Payment } from "./TotalPaymentButton.tsx";
import { FunctionComponent } from "preact";

const PaymentForm: FunctionComponent<Payment> = ({ TotalPrice }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState("");

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
    setError("");
  };

  const handlePayment = (e: MouseEvent) => {
    e.preventDefault();

    if (cardNumber && cardName && expiryDate && cvv) {
      setIsLoading(true);

      // Simulating a payment request with a delay
      setTimeout(() => {
        setIsLoading(false);
        setPaymentSuccess(true);
      }, 2000);
    } else {
      setError("You have to enter your card credentials");
    }
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
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Pay Now"}
        </button>

        <TotalPaymentButton TotalPrice={TotalPrice} />
      </div>
      {error !== "" && <p class="text-red-500 mt-2">{error}</p>}

      {paymentSuccess && (
        <>
          <p class="text-blue-600 mt-2">The payment was successful!</p>
          <button
            type="button"
            class="border border-yellow-600 mt-2 bg-transparent md:hover:bg-yellow-600
            rounded-xl py-2 px-4"
          >
            <a
              href="/"
              class="text-yellow-500 mt-2 focus:outline-none md:hover:text-black"
            >
              Back Home
            </a>
          </button>
        </>
      )}
    </form>
  );
};

export default PaymentForm;
