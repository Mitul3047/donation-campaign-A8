
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
    const { id, title, picture, category: categoryName, category_bg, card_bg, text_color } = category
    // console.log(card_bg);
    return (
        <Link to={`/category/${id}`}>
            <div>
                <div className="flex  flex-col rounded-xl bg-clip-border shadow-md" style={{background : card_bg}}>
                    <div className=" m-0  rounded-none bg-transparent bg-clip-border  shadow-none">
                        <img
                            src={picture}
                            alt={title}
                            className='w-full   '
                        />
                    </div>
                    <div className="p-6 flex flex-col">
                        <h4 className=" rounded font-semibold text-sm antialiased w-20 text-center px-2 py-1" style={{background: category_bg,color: text_color}}>
                            {categoryName}
                        </h4>
                        <p className="mt-3 font-bold  text-xl" style={{color: text_color}}>
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