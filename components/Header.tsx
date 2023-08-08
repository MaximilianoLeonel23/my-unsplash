"use client";
import React, { useState, useEffect } from "react";
import { UnsplashLogo } from "./../assets/images/images";
import { usePhotoContext } from "@/context/Photo.context";
import { SearchIcon } from "@/assets/icons/icons";
const Header: React.FC = () => {
  const [searchedPhoto, setSearchedPhoto] = useState("");
  const { openForm, photos, setFilteredPhotos } = usePhotoContext();

  useEffect(() => {
    const searchedPhotos = photos.filter((photo) =>
      photo.title.toLowerCase().includes(searchedPhoto.toLowerCase())
    );
    console.log(searchedPhotos);
    setFilteredPhotos(searchedPhotos);
  }, [searchedPhoto]);

  return (
    <header className="container py-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <UnsplashLogo />
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search by name"
              className="text-sm text-primary-gray-5 py-4 px-16 rounded-xl border border-primary-gray-5 outline-none"
              onChange={(e) => setSearchedPhoto(e.target.value)}
            />
            <div className="absolute left-4">
              <SearchIcon />
            </div>
          </div>
        </div>
        <button
          className="py-4 px-6 rounded-xl text-white font-bold bg-primary-green"
          onClick={openForm}
        >
          Add a photo
        </button>
      </div>
    </header>
  );
};

export default Header;
