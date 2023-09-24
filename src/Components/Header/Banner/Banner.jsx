

const Banner = () => {
    return (
        <div className="flex justify-center items-center h-72 md:h-[81vh] bg-red-400 ">
            <input type="text" placeholder="Type here" className="py-3 px-7 rounded-l-lg  md:w-80" />
            <button className="  border-l-0 px-7 py-3 rounded-r-xl bg-[#FF444A] text-white">Search</button>
        </div>
    );
};

export default Banner;