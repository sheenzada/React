const Card = () => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden mt-11 ml-12 flex">
     

      <div className="p-5 ">
         <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Card"
        className="w-full h-48 object-cover "
      />
        <h2 className="text-xl font-bold text-gray-800">
          Tailwind Card
        </h2>

        <p className="text-gray-600 mt-2">
          This card is now Card ..
        </p>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Read More
        </button>
      </div>
     

      <div className="p-5">
         <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Card"
        className="w-full h-48 object-cover"
      />
        <h2 className="text-xl font-bold text-gray-800">
          Tailwind Card
        </h2>

        <p className="text-gray-600 mt-2">
          This card is now Card ..
        </p>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Read More
        </button>
      </div>
      </div>
  );
};

export default Card;







// const Card = () => {
//   return (
//     <div className="flex flex-wrap gap-6 mt-11 ml-12">
      
//       {[1, 2].map((item) => (
//         <div
//           key={item}
//           className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
//             alt="Card"
//             className="w-full h-48 object-cover"
//           />

//           <div className="p-5">
//             <h2 className="text-xl font-bold text-gray-800">
//               Tailwind Card
//             </h2>

//             <p className="text-gray-600 mt-2">
//               This card is now using flex layout.
//             </p>

//             <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//               Read More
//             </button>
//           </div>
//         </div>
//       ))}

//     </div>
//   );
// };

// export default Card;
