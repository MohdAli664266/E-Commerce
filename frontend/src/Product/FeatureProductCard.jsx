import React from "react";
import sasuke from '../assets/sasuke.jpeg';
import iron from '../assets/iron.jpg';
const FeatureProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {product.onSale && (
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded top-2 left-2">Sale!</span>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        <div className="flex items-center space-x-2 mb-4">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className={`w-4 h-4 rounded-full`} 
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
        <div className="flex items-baseline space-x-2">
          {product.originalPrice && (
            <p className="text-gray-400 line-through">${product.originalPrice}</p>
          )}
          <p className="text-gray-800 font-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const products = [
    {
      name: "DNK Yellow Shoes",
      category: "Men",
      image: sasuke,
      price: 120.0,
      originalPrice: 150.0,
      onSale: true,
      colors: ["#FFC300", "#FF5733", "#C70039"],
    },
    {
      name: "DNK Blue Shoes",
      category: "Men",
      image: iron,
      price: 200.0,
      originalPrice: 240.0,
      onSale: false,
      colors: ["#0056A3", "#007BFF", "#6C757D"],
    },
    {
      name: "Dark Brown Jeans",
      category: "Men",
      image: "https://via.placeholder.com/300x300?text=Dark+Brown+Jeans",
      price: 150.0,
      onSale: false,
      colors: ["#6B4226"],
    },
    {
      name: "Blue Denim Jeans",
      category: "Women",
      image: "https://via.placeholder.com/300x300?text=Blue+Denim+Jeans",
      price: 150.0,
      onSale: false,
      colors: ["#336699"],
    },
    {
      name: "Basic Gray Jeans",
      category: "Women",
      image: "https://via.placeholder.com/300x300?text=Gray+Jeans",
      price: 150.0,
      onSale: false,
      colors: ["#B0B0B0"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Product Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <FeatureProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
