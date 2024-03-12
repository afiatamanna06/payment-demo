import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Home() {
  const isSuccess = true;
  return (
    <main className="flex min-h-screen bg-white flex-col items-center p-24">
      {isSuccess ? (
        <FaCheckCircle color="green" size={50} />
      ) : (
        <FaTimesCircle color="red" size={50} />
      )}
      <div className="text-5xl font-bold mt-12">
        {isSuccess ? "Thank you!" : "Payment unsuccessful!"}
      </div>
      <div className="text-xl mt-6">
        {isSuccess
          ? "Your have successfully completed your payment. You can find more information on our website or social pages."
          : "Your payment is unsuccessful for some issue. Please check and try again."}
      </div>
    </main>
  );
}
