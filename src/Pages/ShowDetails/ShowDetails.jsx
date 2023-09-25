
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ShowDetails = () => {
  const [category, setCategory] = useState([]);
  const params = useParams();
  const { id } = params;
  const IntId = parseInt(id);

  const categories = useLoaderData();

  useEffect(() => {
    const findCategory = categories.find((category) => category.id === IntId);
    setCategory(findCategory);
  }, [IntId, categories]);

  const handleDonateClick = () => {
    // Retrieve the previously donated cards from local storage
    const donatedCards = JSON.parse(localStorage.getItem("donatedCards")) || [];

    // Check if the current category already exists in the donated cards
    const isDuplicate = donatedCards.find((card) => card.id === category.id);

    if (isDuplicate) {
      alert("This card has already been donated.");
    } else {
      // Add the current category to the array
      donatedCards.push(category);

      // Save the updated array back to local storage
      localStorage.setItem("donatedCards", JSON.stringify(donatedCards));

      alert("Card added to donations successfully!");
    }
  };

  return (
    <div className="flex flex-col justify-center w-11/12 mx-auto">
      <div className="relative">
        <img src={category.cover_picture} alt={category.title} className="w-full h-[700px] mt-20" />
        <div className="p-9 absolute bottom-0 bg-black bg-opacity-50 w-full">
          <button className="btn w-44 text-white border-0" onClick={handleDonateClick} style={{background: category.text_color}}>
            Donate: {category.price}
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-6 mt-12">{category.title}</h2>
      <p className="mb-28">{category.description}</p>
    </div>
  );
};

export default ShowDetails;
