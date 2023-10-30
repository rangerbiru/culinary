import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ListCategory from "../components/ListCategory";
import SearchMenu from "../components/SearchMenu";
import { RotatingSquare } from "react-loader-spinner";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Props Search Component
  const [search, setSearch] = useState("");
  const [listSearch, setListSearch] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}search.php?s=`
    );

    console.log(res.data.meals);
    setData(res.data.meals);
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center h-screen items-center flex-col">
          <RotatingSquare
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <h2>Loading Data...</h2>
        </div>
      ) : (
        <>
          <Header />
          <br />
          <h2 className="text-xl text-center font-bold mb-5">Menu Makanan</h2>

          <div className="flex flex-wrap gap-5 justify-center">
            {data.map((d, index) => (
              <div key={index.idMeal} className=" w-44 border rounded-lg">
                <img
                  src={d.strMealThumb}
                  alt={d.strMeal}
                  className="object-cover"
                />
                <p className="text-center mt-2">{d.strMeal}</p>

                {/* Tombol untuk menuju ke Details */}
                <div className="flex justify-center">
                  <Link
                    to={`/detail/${d.idMeal}`}
                    className="bg-red-500 p-2 text-white transition duration-500 rounded-sm hover:bg-blue-200 hover:text-black"
                  >
                    Klik Disini
                  </Link>
                </div>

                {/* <a
                  href={d.strYoutube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-100 flex justify-center mt-2 p-3 bg-purple-700 text-white m-2 rounded-3xl transition hover:bg-purple-900"
                >
                  Link Tutorial
                </a> */}
              </div>
            ))}
          </div>

          <section id="category-food">
            <ListCategory />
          </section>

          <section id="search-food" className="py-10">
            <SearchMenu
              search={search}
              setSearch={setSearch}
              listSearch={listSearch}
              setListSearch={setListSearch}
            />

            <div className="list-search">
              {!listSearch ? (
                <h2 className="text-center text-3xl font-bold text-red-700">
                  Makanan tidak ditemukan
                </h2>
              ) : (
                <>
                  {listSearch.map((menu) => (
                    <div key={menu.idMeal} className="flex">
                      <div className="w-1/2 flex justify-center">
                        <img
                          src={menu.strMealThumb}
                          alt={menu.strMeal}
                          width={200}
                        />
                      </div>
                      <div className="w-1/2">
                        <h2>Nama Makanan : {menu.strMeal}</h2>
                        <h2>Category : {menu.strCategory}</h2>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default HomePage;
