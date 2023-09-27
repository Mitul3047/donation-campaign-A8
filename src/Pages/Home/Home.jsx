

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Home/Banner/Banner";
import Categories from "../../Components/Home/Categories/Categories";

const Home = () => {
  const categoriesData = useLoaderData();
  const [inputValue, setInputValue] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categoriesData);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    // Filter the categories based on the input value
    const filtered = categoriesData.filter((category) =>
      category.category.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  return (
    <div>
      <Banner onSearch={handleSearch} inputValue={inputValue} onInputChange={handleInputChange} />
      <Categories categories={filteredCategories} />
    </div>
  );
};

export default Home;

