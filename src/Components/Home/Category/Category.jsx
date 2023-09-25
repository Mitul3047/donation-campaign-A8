
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
    const { id, title, picture, category: categoryName, category_bg, card_bg, text_color, button_background, description, price } = category
    // console.log(card_bg);
    return (
        <Link to={`/category/${id}`}>
            <div>
                <div className={`relative flex max-w-[24rem] flex-col rounded-xl bg-[${card_bg} bg-clip-border shadow-md`}>
                    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border  shadow-none">
                        <img
                            src={picture}
                            alt={title}
                        />
                    </div>
                    <div className="p-6 g">
                        <h4 className={`${text_color} block antialiased`}>
                            {categoryName}
                        </h4>
                        <p className="mt-3 ">
                            {title}
                        </p>
                    </div>

                </div>
            </div>
        </Link>
    );
};
Category.propTypes = {
    category: PropTypes.object
}
export default Category;