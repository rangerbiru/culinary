import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const CategoryPage = () => {
  const [list, setList] = useState([]);
  const { makanan } = useParams();
  const location = useLocation();

  const getList = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${makanan}`
    );

    setList(res.data.meals);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <h2 className="text-center text-2xl my-10 font-semibold uppercase">
        halaman category {location.pathname.split("/category/")}
      </h2>

      <div className="flex flex-wrap gap-5 justify-center">
        {list.map((li) => (
          <div key={li.idMeal} className="w-80">
            <img src={li.strMealThumb} alt="..." width={200} />
            <h2>{li.strMeal}</h2>

            <div className="flex justify-center">
              <Link
                to={`/detail/${li.idMeal}`}
                className="bg-slate-800 text-white p-2"
              >
                Klik Menu
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
