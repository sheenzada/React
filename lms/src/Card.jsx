const Card = () => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Card"
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">
          Tailwind Card
        </h2>

        <p className="text-gray-600 mt-2">
          This card is now visible and fully responsive.
        </p>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
