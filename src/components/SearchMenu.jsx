import axios from "axios";
import React from "react";

const SearchMenu = ({ search, setSearch, setListSearch }) => {
  const getSearch = async (e) => {
    e.preventDefault();

    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );

    // console.log(res.data.meals);
    // setSearch(res.data.meals);
    setListSearch(res.data.meals);
  };

  return (
    <div>
      <h2 className="text-center font-bold text-2xl uppercase">
        halaman Search
      </h2>

      <div className="flex justify-center my-8">
        <form onSubmit={getSearch}>
          <input
            type="text"
            placeholder="Silahkan Isi Nama Menu"
            className="border-2 border-black p-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-slate-600 text-white p-2 ml-2 border-2 border-black"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchMenu;
