import React from "react";

const NewPhotoForm: React.FC = () => {
  return (
    <article className="bg-white rounded-xl">
      <div className="flex flex-col gap-y-4">
        <h4 className="text-2xl text-primary-gray-7">Add a new photo</h4>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="title" className="text-primary-gray-6 text-sm">
            Label
          </label>
          <input
            id="title"
            placeholder="Random label as example"
            className="py-4 px-4 text-sm text-primary-gray-5 border border-primary-gray-6 rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="url" className="text-primary-gray-6 text-sm">
            Photo URL
          </label>
          <input
            id="title"
            placeholder="https://www.random-photo.com/sknfikwdlwd44dw4d6wd6wfd"
            className="py-4 px-4 text-sm text-primary-gray-5 border border-primary-gray-6 rounded-xl"
          />
        </div>
        <div>
          <button className="py-4 px-8 rounded-xl text-primary-gray-5">
            Cancel
          </button>
          <button className="py-4 px-8 rounded-xl text-white font-bold bg-primary-green">
            Submit
          </button>
        </div>
      </div>
    </article>
  );
};

export default NewPhotoForm;
