import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Home/Banner/Banner";
import Categories from "../../Components/Home/Categories/Categories";


const Home = () => {
  const categories =useLoaderData()
  console.log(categories);

    return (
        <div>
            <Banner ></Banner>
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;