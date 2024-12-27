// import React, { useState } from "react";
// import Carousel from "./components/Carousel";
// import Details from "./components/Details";
// import "./components/App.scss";

// const App = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleSave = () => {
//     setShowPopup(true);
//     setTimeout(() => {
//       setShowPopup(false);
//     }, 2000); // Popup disappears after 2 seconds
//   };

//   return (
//     <div className="app">
//       <header>
//         <img src="https://images.seeklogo.com/logo-png/55/3/apple-logo-png_seeklogo-555377.png?v=1958512679675584976" alt="Apple Logo" style={{width:"70px",height:"60px"}}/>
//         <p className="collections-title">Collections</p>
//         <button className="save-btn" onClick={handleSave}>
//           Save
//         </button>
//       </header>
//       <main>
//         <Carousel />
//         {/* <Details /> */}
//       </main>
//       {showPopup && (
//         <div className="popup">
//           Successfully saved!
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// // <img src="https://www.carlington.in/cdn/shop/files/Carliongton_premium_black_analog_mens_s_watch_6020.jpg?v=1712818158&width=2048" alt="Analog Watch 1" />
// // <img src="https://shop.timexindia.com/cdn/shop/files/TWEG23602_1.jpg?v=1703338738" alt="Analog Watch 2" />
// // <img src="https://justintime.in/cdn/shop/files/1002B-M0203.jpg?v=1687872073" alt="Analog Watch 3" />
// // </div>

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Carousel from "./components/Carousel";
import "./components/App.scss";

const Nav = ({ handleSave, handleCollectionSelect, selectedCollection }) => (
  <nav>
    <img
      src="https://images.seeklogo.com/logo-png/55/3/apple-logo-png_seeklogo-555377.png?v=1958512679675584976"
      alt="Apple Logo"
      style={{ width: "70px", height: "60px" }}
    />
    <div className="collections-dropdown">
      <label htmlFor="collections-select" className="collections-title">
        Collections:
      </label>
      <select
        id="collections-select"
        value={selectedCollection}
        onChange={(e) => handleCollectionSelect(e.target.value)}
        className="collections-select"
      >
        <option value="watches">Watches</option>
        <option value="bands">Bands</option>
        <option value="accessories">Accessories</option>
      </select>
    </div>
    <button className="save-btn" onClick={handleSave}>
      Save
    </button>
  </nav>
);

const HomePage = ({ selectedCollection }) => {
  const navigate = useNavigate();

  const images = {
    watches: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
    bands: "https://shop.timexindia.com/cdn/shop/files/TWEG23602_1.jpg?v=1703338738",
    accessories: "https://buy.budli.in/cdn/shop/files/Applewatchseries51.jpg?v=1711625489",
  };

  const imageUrl = images[selectedCollection] || images.watches;

  return (
    <div className="homepage">
      <main className="main-section">
        <h1 className="main-title">Apple Watch Studio</h1>
        <p className="main-description">Choose a case. Pick a band. Create your own style.</p>
        <img src={imageUrl} className="bg-img" alt={selectedCollection} />
        <button className="get-started-btn" onClick={() => navigate("/carousel")}>
          Get started
        </button>
      </main>
    </div>
  );
};

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState("watches");

  const handleSave = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Popup disappears after 2 seconds
  };

  const handleCollectionSelect = (collection) => {
    setSelectedCollection(collection);
  };

  return (
    <Router>
      <div className="app">
        <Nav
          handleSave={handleSave}
          handleCollectionSelect={handleCollectionSelect}
          selectedCollection={selectedCollection}
        />
        <Routes>
          <Route path="/" element={<HomePage selectedCollection={selectedCollection} />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
        {showPopup && <div className="popup">Successfully saved!</div>}
      </div>
    </Router>
  );
};

export default App;
