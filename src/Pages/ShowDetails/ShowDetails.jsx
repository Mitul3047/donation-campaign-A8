import Swal from 'sweetalert2'
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
    const donatedCards = JSON.parse(localStorage.getItem("donatedCards")) || [];
    const isDuplicate = donatedCards.find((card) => card.id === category.id);

    if (isDuplicate) {
      Swal.fire({
        title: 'Error!',
        text: 'This card has already been donated.',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      // alert("This card has already been donated.");
    } else {
      donatedCards.push(category);
      localStorage.setItem("donatedCards", JSON.stringify(donatedCards));

      // alert("Card added to donations successfully!");
      Swal.fire({
        title: 'Sucess!',
        text: 'Card added to donations successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
  };

  return (
    <div className="flex flex-col justify-center w-11/12 mx-auto">
      <div className="relative">
        <img src={category.cover_picture} alt={category.title} className="w-full  md:h-[700px] mt-20" />
        <div className="p-9 absolute bottom-0 bg-black bg-opacity-50 w-full">
          <button className="btn w-44 text-white border-0" onClick={handleDonateClick} style={{background: category.text_color}}>
            Donate: ${category.price}
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-6 mt-12">{category.title}</h2>
      <p className="mb-28">{category.description}</p>
    </div>
  );
};

export default ShowDetails;
