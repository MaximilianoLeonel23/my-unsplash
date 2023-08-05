import React from "react";
import { UnsplashLogo } from "./../assets/images/images";

const Header: React.FC = () => {
  return (
    <header className="container py-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <UnsplashLogo />
          <input
            type="text"
            placeholder="Search by name"
            className="text-sm text-primary-gray-5 py-4 px-8 rounded-xl border border-primary-gray-5 outline-none"
          />
        </div>
        <button className="bg-primary-green py-3 px-4 text-white rounded-xl text-base font-bold">
          Add a photo
        </button>
      </div>
    </header>
  );
};

export default Header;