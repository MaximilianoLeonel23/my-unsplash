"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "@/config/firebase";

interface Photo {
  id: string;
  title: string;
  url: string;
}

const PhotoList: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const photoCollectionRef = collection(db, "photos");

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const data = await getDocs(photoCollectionRef);
        const filteredData = data.docs.map((doc) => {
          const { title, url } = doc.data(); // Desestructurar los datos del documento
          return {
            id: doc.id,
            title,
            url,
          };
        });
        console.log(filteredData);
        setPhotos(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getPhotos();
  }, []);

  return (
    <section className="grid grid-cols-3 grid-masonry gap-x-8">
      {photos &&
        photos.map((photo, idx) => {
          return <img src={photo.url} alt={photo.title} />;
        })}
    </section>
  );
};

export default PhotoList;
