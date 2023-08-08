"use client";
import { usePhotoContext } from "@/context/Photo.context";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";

const NewPhotoForm: React.FC = () => {
  const { isOpen, closeForm, getPhotos } = usePhotoContext();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const photoCollectionRef = collection(db, "photos");

  const addNewPhoto = async () => {
    try {
      if (!title || !url) return;

      await addDoc(photoCollectionRef, {
        title: title,
        url: url,
      });

      getPhotos();
      closeForm();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } bg-black opacity-25 fixed top-0 left-0 w-full h-screen`}
      ></div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } grid place-items-center absolute top-0 left-0 w-full h-screen`}
      >
        <article className={` bg-white rounded-xl p-8 w-2/5`}>
          <div className="flex flex-col gap-y-4">
            <h4 className="text-2xl text-primary-gray-7">Add a new photo</h4>
            <div className="flex flex-col gap-y-4">
              <label htmlFor="title" className="text-primary-gray-6 text-sm">
                Label
              </label>
              <input
                id="title"
                placeholder="Random label as example"
                className="py-4 px-4 text-sm text-primary-gray-5 border border-primary-gray-6 rounded-xl outline-none"
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={title}
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <label htmlFor="url" className="text-primary-gray-6 text-sm">
                Photo URL
              </label>
              <input
                id="title"
                placeholder="https://www.random-photo.com/sknfikwdlwd44dw4d6wd6wfd"
                className="py-4 px-4 text-sm text-primary-gray-5 border border-primary-gray-6 rounded-xl outline-none"
                onChange={(e) => setUrl(e.target.value)}
                defaultValue={url}
              />
            </div>
            <div className="flex justify-end items-center">
              <button
                className="py-4 px-8 rounded-xl text-primary-gray-5"
                onClick={closeForm}
              >
                Cancel
              </button>
              <button
                className="py-4 px-8 rounded-xl text-white font-bold bg-primary-green"
                onClick={addNewPhoto}
              >
                Submit
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default NewPhotoForm;
