import React from "react";

const PhotoGallary = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
      <div className="opacity: 1; transform translateY(0px) rotate(3deg) translateZ(0px);">
        <img
          src="/myImages/image1.jpg"
          alt="about"
          loading="lazy"
          width="200"
          height="400"
          decoding="async"
          data-nimg="1"
          className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        />
      </div>
      <div className="opacity: 1; transform: translateY(0px) rotate(-3deg) translateZ(0px);">
        <img
          src="/myImages/image2.jpg"
          alt="about"
          loading="lazy"
          width="200"
          height="400"
          decoding="async"
          data-nimg="1"
          className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        />
      </div>
      <div className="opacity: 1; transform: translateY(0px) rotate(3deg) translateZ(0px);">
        <img
          src="/myImages/image3.jpg"
          alt="about"
          loading="lazy"
          width="200"
          height="400"
          decoding="async"
          data-nimg="1"
          className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        />
      </div>
      <div className="opacity: 1; transform: translateY(0px) rotate(-3deg) translateZ(0px);">
        <img
          src="/myImages/image1.jpg"
          alt="about"
          loading="lazy"
          width="200"
          height="400"
          decoding="async"
          data-nimg="1"
          className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        />
      </div>
    </div>
  );
};

export default PhotoGallary;
