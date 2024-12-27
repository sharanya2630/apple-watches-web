// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Carousel.scss";

// // Watch data with categories, brand, and price
// const watchData = [
//   { img: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg", category: "Aluminum", name: "Watch A", price: "$250", brand: "Brand X" },
//   { img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-s10-202409_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1724168058633", category: "Titanium", name: "Watch B", price: "$500", brand: "Brand Y" },
//   { img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra2-202409_GEO_IN_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1725113864345", category: "Aluminum", name: "Watch C", price: "$300", brand: "Brand Z" },
//   { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzSgb3kRDtieSsswULtQw_-XfqdTNY0Enhe5WyZYpY33bn4mxcynMrnJ64U0TYkPIMGU&usqp=CAU", category: "Titanium", name: "Watch D", price: "$700", brand: "Brand Y" },
//   { img: "https://image.made-in-china.com/2f0j00kZRGQrdUItoz/for-Apple-Smart-Watches-Fashionable-Metal-Men-s-and-Women-s-Straps.webp", category: "Aluminum", name: "Watch E", price: "$280", brand: "Brand X" },
//   { img: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg", category: "Titanium", name: "Watch F", price: "$550", brand: "Brand Z" },
// ];

// const Carousel = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedWatch, setSelectedWatch] = useState(null);

//   // Filter watches based on selected category
//   const filteredWatches = selectedCategory === "All"
//     ? watchData
//     : watchData.filter((watch) => watch.category === selectedCategory);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <button className="next-btn" style={{backgroundColor:"black"}}>→</button>,
//     prevArrow: <button className="prev-btn">←</button>,
//   };

//   return (
//     <div className="carousel-container">
//       {/* Category Buttons */}
//       <div className="category-buttons">
//         <button
//           className={`filter-btn ${selectedCategory === "All" ? "active" : ""}`}
//           onClick={() => setSelectedCategory("All")}
//         >
//           All
//         </button>
//         <button
//           className={`filter-btn ${selectedCategory === "Aluminum" ? "active" : ""}`}
//           onClick={() => setSelectedCategory("Aluminum")}
//         >
//           Aluminum
//         </button>
//         <button
//           className={`filter-btn ${selectedCategory === "Titanium" ? "active" : ""}`}
//           onClick={() => setSelectedCategory("Titanium")}
//         >
//           Titanium
//         </button>
//       </div>

//       {/* Carousel */}
//       <Slider {...settings}>
//         {filteredWatches.map((watch, index) => (
//           <div
//             key={index}
//             className="carousel-item"
//             onClick={() => setSelectedWatch(watch)} // Set selected watch on click
//           >
//             <img src={watch.img} alt={`Watch ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>

//       {/* Display Selected Watch Details */}
//       {selectedWatch && (
//         <div className="watch-details">
//           <h3>{selectedWatch.name}</h3>
//           <p>Price: {selectedWatch.price}</p>
//           <p>Brand: {selectedWatch.brand}</p>
//           <p>Category: {selectedWatch.category}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Carousel;


import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing arrow icons
import "./Carousel.scss";

// Watch data with categories, brand, and price
const watchData = [
  { img: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg", category: "Aluminum", name: "Watch A", price: "$250", brand: "Brand X" },
  { img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-s10-202409_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1724168058633", category: "Titanium", name: "Watch B", price: "$500", brand: "Brand Y" },
  { img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra2-202409_GEO_IN_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1725113864345", category: "Aluminum", name: "Watch C", price: "$300", brand: "Brand Z" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzSgb3kRDtieSsswULtQw_-XfqdTNY0Enhe5WyZYpY33bn4mxcynMrnJ64U0TYkPIMGU&usqp=CAU", category: "Titanium", name: "Watch D", price: "$700", brand: "Brand Y" },
  { img: "https://image.made-in-china.com/2f0j00kZRGQrdUItoz/for-Apple-Smart-Watches-Fashionable-Metal-Men-s-and-Women-s-Straps.webp", category: "Aluminum", name: "Watch E", price: "$280", brand: "Brand X" },
  { img: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg", category: "Titanium", name: "Watch F", price: "$550", brand: "Brand Z" },
];

const Carousel = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWatch, setSelectedWatch] = useState(null);

  // Filter watches based on selected category
  const filteredWatches = selectedCategory === "All"
    ? watchData
    : watchData.filter((watch) => watch.category === selectedCategory);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow className="next-btn" direction="next" />,
    prevArrow: <CustomArrow className="prev-btn" direction="prev" />,
  };

  return (
    <div className="carousel-container">
      {/* Category Buttons */}
    
      {/* Carousel */}
      <Slider {...settings}>
        {filteredWatches.map((watch, index) => (
          <div
            key={index}
            className="carousel-item"
            onClick={() => setSelectedWatch(watch)} // Set selected watch on click
          >
            <img src={watch.img} alt={`Watch ${index + 1}`} />
          </div>
        ))}
      </Slider>

      {selectedWatch && (
        <div className="watch-details">
          <h3>{selectedWatch.name}</h3>
          <p>Price: {selectedWatch.price}</p>
          <p>Brand: {selectedWatch.brand}</p>
          <p>Category: {selectedWatch.category}</p>
        </div>
      )}

<div className="category-buttons">
        <button
          className={`filter-btn ${selectedCategory === "All" ? "active" : ""}`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`filter-btn ${selectedCategory === "Aluminum" ? "active" : ""}`}
          onClick={() => setSelectedCategory("Aluminum")}
        >
          Aluminum
        </button>
        <button
          className={`filter-btn ${selectedCategory === "Titanium" ? "active" : ""}`}
          onClick={() => setSelectedCategory("Titanium")}
        >
          Titanium
        </button>
      </div>

    </div>
  );
};

const CustomArrow = ({ className, onClick, direction }) => {
  return (
    <button
      className={`custom-arrow ${direction} ${className}`}
      onClick={onClick}
    >
      {direction === "next" ? <FaArrowRight /> : <FaArrowLeft />} {/* Render icons */}
    </button>
  );
};

export default Carousel;


