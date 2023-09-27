import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';


const DonatedCard = ({ card }) => {
  return (
    <div className="flex md:flex-row flex-col gap-6 bg-white shadow-lg rounded-lg  mb-4" style={{background: card.card_bg}}>

      <img src={card.picture} alt={card.title || "N/A"} />
      <div className="flex ml-4 md:ml-0 flex-col justify-center items-start">
        <h2 className="text-xl px-3 rounded font-semibold mb-2" style={{color:card.text_color,
        background:card.category_bg}}>{card.category || "N/A"}</h2>
        <p  style={{color:card.text_color}} className=" font-semibold ">{card.title || "N/A"}</p>
        <p style={{color:card.text_color}}  className=" font-semibold mb-4 ">${card.price || "N/A"}</p>
        <Link to={`/category/${card.id}`}>
        <button className="btn border-0  mb-4 md:mb-0 " style={{background: card.button_background, color: "white"}}>Show Details</button>
        </Link>
      </div>

    </div>
  );
};

DonatedCard.propTypes ={
 card : PropTypes.object
}
export default DonatedCard;
