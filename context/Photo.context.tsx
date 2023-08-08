"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";

export const PhotoContext = createContext<PhotoContextProps | undefined>(
  undefined
);

export const usePhotoContext = () => {
  const context = useContext(PhotoContext);

  if (!context)
    throw new Error("usePhotoContext debe usarse dentro del provider");
  return context;
};

interface PhotoContextProps {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
  photos: Photo[];
  setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
  filteredPhotos: Photo[];
  setFilteredPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
  getPhotos: () => void;
  deletePhoto: (id: string) => void;
}

interface Props {
  children: React.ReactNode;
}

export interface Photo {
  id: string;
  title: string;
  url: string;
}

export const PhotoProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);

  const openForm = () => {
    setIsOpen(true);
    console.log(isOpen);
  };

  const closeForm = () => {
    setIsOpen(false);
    console.log(isOpen);
  };

  const photoCollectionRef = collection(db, "photos");

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

      setPhotos(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePhoto = async (id: string) => {
    try {
      const photoDoc = doc(db, "photos", id);
      await deleteDoc(photoDoc);

      await getPhotos();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  useEffect(() => {
    setFilteredPhotos(photos);
  }, [photos]);

  return (
    <PhotoContext.Provider
      value={{
        isOpen,
        openForm,
        closeForm,
        photos, 
        setPhotos,
        filteredPhotos,
        setFilteredPhotos,
        getPhotos,
        deletePhoto,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};
