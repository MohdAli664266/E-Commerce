import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Build responsive, high-performing websites tailored to your needs.",
      icon: "fas fa-code",
    },
    {
      title: "Mobile App Development",
      description: "Create sleek and intuitive mobile applications for Android and iOS.",
      icon: "fas fa-mobile-alt",
    },
    {
      title: "UI/UX Design",
      description: "Design user-friendly interfaces that enhance user experience.",
      icon: "fas fa-paint-brush",
    },
    {
      title: "SEO Optimization",
      description: "Optimize your website to rank higher in search engine results.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Cloud Services",
      description: "Leverage cloud computing to scale your business efficiently.",
      icon: "fas fa-cloud",
    },
    {
      title: "E-Commerce Solutions",
      description: "Develop robust online stores to boost your sales.",
      icon: "fas fa-shopping-cart",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 min-h-screen py-16">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Explore the wide range of services we offer to help your business thrive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-100 text-indigo-500 rounded-full mx-auto">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Services;
