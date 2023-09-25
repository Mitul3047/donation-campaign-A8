
import  { useEffect, useState } from "react";
import DonatedCard from "../../Components/DonationCard/DonationCard";

const Donation = () => {
  const [donatedCards, setDonatedCards] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Retrieve the donated cards from local storage
    const storedCards = JSON.parse(localStorage.getItem("donatedCards")) || [];
    setDonatedCards(storedCards);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Donation Page</h1>
      <div>
        {donatedCards.length > 0 ? (
          <div className="grid grid-cols-2 gap-6">
            {showAll
              ? donatedCards.map((card, index) => (
                  <div key={index}>
                    <DonatedCard card={card}></DonatedCard>
                    {/* Add additional fields as needed */}
                  </div>
                ))
              : donatedCards.slice(0, 4).map((card, index) => (
                  <div key={index}>
                    <DonatedCard card={card}></DonatedCard>
                    {/* Add additional fields as needed */}
                  </div>
                ))}
          </div>
        ) : (
          <p className="text-red-600 font-semibold">No donated cards available.</p>
        )}

        {donatedCards.length > 4 && !showAll && (
          <div className="card-actions justify-center">
            <button className="btn" onClick={() => setShowAll(true)}>
              Show all
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
