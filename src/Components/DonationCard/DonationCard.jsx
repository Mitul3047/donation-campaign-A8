

const DonatedCard = ({ card }) => {
  return (
    <div className="flex gap-6 bg-white shadow-lg rounded-lg  mb-4">

      <img src={card.picture} alt={card.title || "N/A"} />
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-xl font-semibold mb-2">{card.category || "N/A"}</h2>
        <p className="text-gray-600 mb-4">{card.title || "N/A"}</p>
        <p className="text-green-600 font-semibold ">{card.price || "N/A"}</p>
        <button className="btn">Show Details</button>

      </div>

    </div>
  );
};

export default DonatedCard;
