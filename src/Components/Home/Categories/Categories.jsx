
import PropTypes from 'prop-types';
import Category from '../Category/Category';
const Categories = ({categories}) => {
    
    return (
        <div className='grid grid-cols-4 my-24 gap-6'>
          {
            categories.map(category => (
                <Category key={category.id} category={category}></Category>
            ))
          }
        </div>
    );
};
Categories.propTypes ={
    categories: PropTypes.array
}
export default Categories;