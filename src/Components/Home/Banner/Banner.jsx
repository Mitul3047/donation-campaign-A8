// import { useState } from 'react';

// const Banner = ({ categories, setFilteredCategories }) => {
//   const [searchQuery, setSearchQuery] = useState(''); // Added state for search query

//   // Function to handle changes in the input field
//   const handleInputChange = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     // Filter categories based on the query and setFilteredCategories
//     const filteredCategories = categories.filter((category) =>
//       category.title.toLowerCase().includes(query)
//     );
//     setFilteredCategories(filteredCategories);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-72 md:h-[81vh] bg-red-400">
//       <h2 className="text-5xl font-bold mb-10">
//         I Grow By Helping People In Need
//       </h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Type here"
//           className="py-3 px-7 rounded-l-lg md:w-80"
//           value={searchQuery} // Controlled input value
//           onChange={handleInputChange} // Handle input change
//         />
//         <button className="border-l-0 px-7 py-3 rounded-r-xl bg-[#FF444A] text-white">
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;



const Banner = ({ inputValue, onInputChange, onSearch }) => {
  return (
    <div className="flex flex-col justify-center items-center h-72 md:h-[81vh] bg-red-400 ">
      <h2 className="text-5xl font-bold mb-10">I Grow By Helping People In Need</h2>
      <div>
        <input
          type="text"
          placeholder="Search Category Name Here...."
          className="py-3 px-7 rounded-l-lg md:w-80"
          value={inputValue}
          onChange={onInputChange}
        />
        <button
          className="border-l-0 px-7 py-3 rounded-r-xl bg-[#FF444A] text-white"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;

