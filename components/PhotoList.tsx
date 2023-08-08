"use client";
import React from "react";
import { usePhotoContext } from "@/context/Photo.context";
import Photo from "./Photo";

const PhotoList: React.FC = () => {
  const { filteredPhotos } = usePhotoContext();

  return (
    <section className="columns-2 sm:columns-3 gap-4 sm:gap-12">
      {filteredPhotos &&
        filteredPhotos.map((photo, idx) => {
          return <Photo photo={photo} key={idx} />;
        })}
    </section>
  );
};

export default PhotoList;
