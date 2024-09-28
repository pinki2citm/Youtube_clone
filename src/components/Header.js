import React from "react";

function Header() {
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1 p-2 m-1 ">
        <img
          className="w-20 p-2  "
          src="https://static.vecteezy.com/system/resources/thumbnails/046/417/943/small/side-menu-icon-symbol-design-illustration-vector.jpg"
        />
        <img
          className="w-40 p-2"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        />
      </div>
      <div className="col-span-10 py-10">
        <input
          className="border border-color-black-600 w-1/2 p-5 rounded-l-full"
          placeholder="Search anything here"
        />
        <button className="border border-color-black-600 p-5 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="w-20 p-2 col-span-1 text-right"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
}

export default Header;
