
import PropTypes from 'prop-types';
const Category = ({category}) => {
    const{title} = category
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};
Category.propTypes ={
    category: PropTypes.object
}
export default Category;