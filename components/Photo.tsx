"use client";
import React from "react";
import { Photo, usePhotoContext } from "@/context/Photo.context";

interface Props {
  photo: Photo;
}

const Photo: React.FC<Props> = ({ photo }) => {
  const { deletePhoto } = usePhotoContext();

  return (
    <article className="relative cursor-pointer">
      <div className="relative group">
        <img
          src={photo.url}
          alt={photo.title}
          className="rounded-2xl mb-4 sm:mb-12 w-full"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-2xl "></div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <h4 className="absolute bottom-6 right-4 left-4 text-white font-bold text-lg">
            {photo.title}
          </h4>
          <button
            className="absolute top-4 right-4 px-4 py-1 bg-transparent border border-primary-red rounded-full text-xxs text-primary-red"
            onClick={() => deletePhoto(photo.id)}
          >
            delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default Photo;
