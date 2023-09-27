import { useState, useEffect } from "react";
import { PieChart, Pie, Legend } from "recharts";

const Statistics = () => {
  const [donatedCards, setDonatedCards] = useState([]);
  const [totalDonated, setTotalDonated] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [donatedPercentage, setDonatedPercentage] = useState(0);
  const [pieChartData, setPieChartData] = useState([
    { name: "Donated", value: donatedPercentage, fill: "green" },
    { name: "Remaining", value: 100 - donatedPercentage, fill: "red" },
  ]);

  useEffect(() => {
    const donatedCardsData = JSON.parse(localStorage.getItem("donatedCards")) || [];
    setDonatedCards(donatedCardsData);

    let totalDonated = 0;
    for (const card of donatedCards) {
      totalDonated += parseInt(card.price);
    }

    setTotalDonated(totalDonated);

    // Calculate the total price from the JSON data
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        let totalPrice = 0;
        for (const card of data) {
          totalPrice += parseFloat(card.price);
        }
        setTotalPrice(totalPrice);

        // Calculate the donated percentage
        const percentage = (totalDonated / totalPrice) * 100;
        setDonatedPercentage(percentage.toFixed(2)); // Round to 2 decimal places

        // Update the pie chart data
        setPieChartData([
          { name: "Donated", value: percentage, fill: "green" },
          { name: "Remaining", value: 100 - percentage, fill: "red" },
        ]);
      });
  }, [donatedCards]);

  return (
    <div>
      <h1 className="text-2xl  font-bold text-center mt-10">Donation Statistics</h1>
      {/* <ul>
        {donatedCards.map((card) => (
          <li key={card.id}>{card.price}</li>
        ))}
      </ul>
      <p>Total donated: ${totalDonated}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Percentage of Total donated: {donatedPercentage}%</p>
      <p>Percentage of Total price: {(100 - donatedPercentage).toFixed(2)}%</p> */}
      <div className="flex justify-center items-center h-[70vh]">
      <PieChart width={400} height={400}>
        <Pie
          data={pieChartData}
          cx={200}
          cy={160}
          innerRadius={0}
          outerRadius={130}
          paddingAngle={0}
        />
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{
            position: "absolute",
            bottom: 40,
            right: 10,
          }}
          data={[
            { name: "Donated", value: "green", type: "square" },
            { name: "Remaining", value: "red", type: "square" },
          ]}
        />
      </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
