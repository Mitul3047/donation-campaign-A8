import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ShowDetails = () => {
    const [category , setCategory] = useState([])
    const params = useParams()
    // console.log(params);
    const {id}  = params
    const IntId = parseInt(id)
    console.log(typeof(id));

    const categories = useLoaderData()
    useEffect(()=>{
        const findCategory = categories.find(category => category.id === IntId)
        setCategory(findCategory)
    },[IntId,categories])
    // console.log(category);

    
    return (
        <div className="h-screen flex flex-col justify-center w-11/12 mx-auto ">
            <button className=" btn w-44">Donate: {category.price}</button>
            <img src={category.image} alt={category.title} />
            <h2 className="text-4xl font-bold mb-6 mt-12 ">{category.title}</h2>
            <p>{category.description}</p>

            
        </div>
    );
};

export default ShowDetails;