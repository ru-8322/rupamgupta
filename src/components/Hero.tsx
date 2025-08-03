import React from 'react';
import { FaCode, FaPaintBrush, FaServer, FaArrowRight, FaDatabase, FaMobile } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Hero() {
  const components = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React, Next.js, Angular and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      cta: 'View Projects',
      color: 'from-blue-500/10 to-blue-600/10'
    },
    {
      icon: <FaServer className="text-4xl" />,
      title: 'Backend Development',
      description: 'Creating secure and scalable backend services with Node.js, Express, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      cta: 'Learn More',
      color: 'from-purple-500/10 to-purple-600/10'
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: 'MERN/MEAN Stack',
      description: 'Full-stack development with MongoDB, Express, React, Angular and Node.js for complete web applications.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      cta: 'View Projects',
      color: 'from-amber-500/10 to-amber-600/10'
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: 'Flutter Mobile',
      description: 'Building cross-platform mobile applications with Flutter framework for iOS and Android.',
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      cta: 'See Apps',
      color: 'from-teal-500/10 to-teal-600/10'
    }
  ];

  return (
    <section id='home' className="relative pt-22 bg-gradient-to-br from-gray-50 to-gray-100 w-full overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Full-width carousel container */}
      <div className="relative w-full">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={6000}
          transitionTime={800}
          swipeable={true}
          emulateTouch={true}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <button
              onClick={clickHandler}
              disabled={!hasPrev}
              className="absolute left-4 md:left-8 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <button
              onClick={clickHandler}
              disabled={!hasNext}
              className="absolute right-4 md:right-8 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          className="w-full"
        >
          {components.map((comp, index) => (
            <div key={index} className="px-4 pb-12">
              <div className={`bg-gradient-to-br ${comp.color} rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl max-w-6xl mx-auto`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-96 overflow-hidden order-2 md:order-1">
                    <img 
                      src={comp.image} 
                      alt={comp.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-700" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:from-black/0 md:via-black/30 md:to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                    <div className="bg-white text-blue-600 p-4 rounded-lg shadow-lg w-fit mb-6">
                      {comp.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{comp.title}</h3>
                    <p className="text-gray-600 mb-8 text-lg">{comp.description}</p>
                    {/* <button className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium group transition-all w-fit">
                      {comp.cta}
                      <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}