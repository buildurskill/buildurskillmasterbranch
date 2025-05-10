import Success from "../assets/success.png";

const SuccessPage = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-2xl shadow-lg p-6 w-11/12 max-w-md text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 text-xl font-bold hover:text-red-500"
          aria-label="Close"
        >
          ×
        </button>

        <div className="flex justify-center mb-4">
          <img
            src={Success}
            alt="Success"
            className="w-16 h-16"
          />
        </div>

        <div className="text-lg font-semibold text-green-700">Success!</div>
        <div className="mt-2 text-gray-700 text-sm">
          Your Consultation request has been submitted
        </div>
        <span className="block mt-4 text-gray-600 text-xs">
          Our Admission team will contact you soon
        </span>
      </div>
    </div>
  );
};

export default SuccessPage;
