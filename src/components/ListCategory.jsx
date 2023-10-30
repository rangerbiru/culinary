import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListCategory = () => {
  const [getCategory, setCategory] = useState([]);

  const getListCategory = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    setCategory(res.data.categories);
  };

  useEffect(() => {
    getListCategory();
  }, []);

  return (
    <>
      <div className="text-center mt-32 mb-10">
        <h2 className="font-bold text-2xl">List Category</h2>
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {getCategory.map((i) => (
          <div key={i.idCategory} className="border-2 border-black p-3">
            <img src={i.strCategoryThumb} alt="..." />
            <h2 className="text-center">{i.strCategory}</h2>

            <div className="flex justify-center">
              <Link
                to={`/category/${i.strCategory}`}
                className="bg-slate-800 text-white p-2"
              >
                Klik Category
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListCategory;
