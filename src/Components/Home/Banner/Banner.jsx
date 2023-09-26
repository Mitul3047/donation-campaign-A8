

const Banner = ({ inputValue, onInputChange, onSearch }) => {
  const containerStyle = {
    backgroundImage: 'url(../../../images/Rectangle-4281.png)',
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',
  };

  return (
    <div className="hero h-[160px] md:h-[480px] relative" style={containerStyle}>
      <div className="absolute inset-0 bg-opacity-90 bg-gray-100"></div>
      <div className="hero-content text-center text-neutral-content relative">
        <div className="max-w-m ">
          <input

            type="text"
            placeholder="Search Category Name Here...."
            className="py-3 px-7 text-black rounded-l-lg md:w-80"
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
    </div>
  );
};

export default Banner;
