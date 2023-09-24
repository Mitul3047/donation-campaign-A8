
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
    const { id, title, picture, image, category: categoryName, category_bg, card_bg, text_color, button_background, description, price } = category
    // console.log(card_bg);
    return (
        <Link to={`/category/${id}`}>
            <div>
                <div className={`relative flex max-w-[24rem] flex-col rounded-xl bg-[${card_bg} bg-clip-border shadow-md`}>
                    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border  shadow-none">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
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