


import { useEffect, useState } from "react";
import DonatedCard from "../../Components/DonationCard/DonationCard";



const Donation = () => {
    const [donation, setDonation] = useState([])
    const [noDataFound, setNoDataFound] = useState(false)
    const [seeMore, setSeeMore] = useState(false)
    
    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donatedCards'))

        if(donationItem){
            setDonation(donationItem)
        }
        else{
        
            setNoDataFound('NO Donation Yet')
        }
    },[])

    console.log(donation);
    
    const handleRemove = ()=>{
        localStorage.clear()
        setDonation([])
        setNoDataFound('NO Donation Yet')
    }

    return (
        <div>
             {noDataFound? <p className=" flex justify-center items-center">{noDataFound}</p>: 
             <div>
                {donation.length > 0 && (
                <button 
                onClick={handleRemove}
                className="mx-auto text-lg bg-green-500 text-white rounded-sm  block px-2 py-2 mb-10 ">Delete All card</button>
                )}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                seeMore?donation.map(card=>(
                <DonatedCard key={card.id} card={card}></DonatedCard>
                    ))
                    :
                    donation.slice(0, 4).map(card=>(
                        <DonatedCard key={card.id} card={card}></DonatedCard>
                        ))

                }
               </div>

             {donation.length > 4 &&   <button 
                onClick={()=>setSeeMore(!seeMore)}
                className="mx-auto text-lg mt-10 bg-green-500  block px-3 rounded-sm py-2 mb-10 text-white ">{seeMore? "See Less" :"See More"}</button>}
             </div>
             }
        </div>
    );
};

export default Donation;