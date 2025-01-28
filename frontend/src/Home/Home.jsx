import React, { useState, useEffect } from "react";
import sasuke from '../assets/sasuke.jpeg';
import lion from '../assets/lion_logo.png';
import { useNavigate } from "react-router-dom";
import ProductPage from "../Product/FeatureProductCard";
import Products from "../Product/Products";

const Home = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Sale 20% Off",
            subtitle: "On Everything",
            description: "Sasuke's character arc is one of redemption and self-discovery. While he starts as a proud and ambitious ninja, his journey forces him to confront his own flaws, traumas, and choices. By the end of Naruto and into Boruto: Naruto Next Generations, Sasuke adopts a more introspective and altruistic role, dedicating himself to protecting the shinobi world from the shadows.",
            image: sasuke,
        },
        {
          title: "Sale 50% Off",
          subtitle: "On Everything",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem alias similique voluptatum, beatae suscipit! Ea, pariatur. Dolore, libero, voluptas nisi perferendis delectus corrupti aperiam deserunt doloremque tempora maxime maiores.",
          image: lion,
      },
        // Add more slides if needed
    ];

    function shopHandler() {
        navigate('/shop');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="bg-gray-200">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12">
                {/* Text Section */}
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-red-500">
                        {slides[currentSlide].title}
                    </h1>
                    <h2 className="text-4xl font-semibold text-gray-800 mt-2">
                        {slides[currentSlide].subtitle}
                    </h2>
                    <p className="text-gray-600 mt-4">
                        {slides[currentSlide].description}
                    </p>
                    <button
                        onClick={shopHandler}
                        className="mt-6 bg-red-500 text-white py-3 px-6 rounded-lg shadow hover:bg-red-600 transition-all">
                        Shop Now
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full h-[500px] max-w-xs object-contain">
                    <img
                        src={slides[currentSlide].image}
                        alt="Slide Image"
                        className="w-full h-full p-4 max-w-xs object-contain"
                    />
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 p-4">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`h-3 w-3 rounded-full transition-all ${
                            currentSlide === index ? "bg-red-500" : "bg-gray-400"
                        }`}
                    ></span>
                ))}
            </div>
            <div>
                <Products />
            </div>
            {/* <div>
                <ProductPage />
            </div> */}
        </div>
    );
};

export default Home;
