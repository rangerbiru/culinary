import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsFood = () => {
  const { id } = useParams();

  const [makanan, setMakanan] = useState([]);

  const getMakananById = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    // console.log(res.data.meals);
    setMakanan(res.data.meals);
  };

  useEffect(() => {
    getMakananById();
  }, []);

  return (
    <>
      <div className="container">
        {makanan.map((makan, index) => (
          <div key={index.idMeal}>
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-4xl mb-2">{makan.strMeal}</h2>
              <img
                src={makan.strMealThumb}
                alt="makanan"
                width={200}
                className="rounded-xl"
              />
            </div>

            <div className="tes">
              <pre className="whitespace-pre-wrap leading-normal">
                {makan.strInstructions}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailsFood;
