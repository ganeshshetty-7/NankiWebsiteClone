import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./TopCategories.css";

const TopCategories = () => {
  const categories = [
    {
      image: "/src/assets/03ea175e-f877-4967-9428-c146c38c5bfe.webp",
      alt: "Shirt Kurti",
      title: "Shirt Kurti",
      link: "/shirts-kurtis-all", // Updated link for Shirt Kurti
    },
    {
      image: "/src/assets/25f9455b-0bbb-4f27-9594-e23d69d1a0ff.webp",
      alt: "Everyday Shirts",
      title: "Everyday Shirts",
      link: "/everyday-shirts-all",
    },
    {
      image: "/src/assets/1369555d-512a-416c-8b8a-7a8adbd61055.webp",
      alt: "Hearts & Hakoba Shirts",
      title: "Hearts & Hakoba Shirts",
      link: "hearts-hakoba-all",
    },
  ];

  return (
    <div className="top-categories">
      <h2>Top Categories</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.alt} />
            <div className="category-info">
              <p>{category.title}</p>
              <Link to={category.link}>&#8594;</Link> {/* Use Link component */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
