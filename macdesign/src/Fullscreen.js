// import React, { useState } from "react";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

// const images = [
//   "//placekitten.com/1500/500",
//   "//placekitten.com/4000/3000",
//   "//placekitten.com/800/1200",
//   "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81"
// ];

// const Gallery = ({ onImageClick }) => {
//   return (
//     <div style={{ display: "flex" }}>
//       {images.map((image, index) => (
//         <div key={index} onClick={() => onImageClick && onImageClick(index)}>
//           <img src={image} style={{ width: "100px" }} alt="notfound"/>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default function MyComponent() {
//   const [photoIndex, setphotoIndex] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const onClickHandler = () => {
//     setIsOpen(true);
//   };
//   const onClickHandlerClose = () => {
//     setIsOpen(false);
//   };

//   const onClickOnMovePrevRequest = () => {
//     setphotoIndex((photoIndex + images.length - 1) % images.length);
//   };

//   const onClickOnMoveNextRequest = () => {
//     setphotoIndex((photoIndex + 1) % images.length);
//   };

//   const onImageClickk = (index) => {
//     setphotoIndex(index);
//     setIsOpen(true);
//   };

//   return (
//     <div>
//       <button type="button" onClick={onClickHandler}>
//         Open Lightbox
//       </button>
//       <Gallery onImageClick={onImageClickk} />

//       {isOpen && (
//         <Lightbox
//           mainSrc={images[photoIndex]}
//           nextSrc={images[(photoIndex + 1) % images.length]}
//           prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//           onCloseRequest={onClickHandlerClose}
//           onMovePrevRequest={onClickOnMovePrevRequest}
//           onMoveNextRequest={onClickOnMoveNextRequest}
//         />
//       )}
//     </div>
//   );
// }

import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ImageGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    
    const images = [
        'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81'
    ];

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <div>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`dummyimg`}
                    onClick={() => openLightbox(index)}
                    style={{ width: '200px', height: '200px', margin: '5px', cursor: 'pointer' }}
                />
            ))}
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </div>
    );
};

export default ImageGallery;
