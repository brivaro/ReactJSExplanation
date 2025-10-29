import React, { useState, useCallback, useEffect } from 'react';
import { SLIDES_DATA } from './constants';
import Slide from './components/Slide';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-fade-in-right');

  const totalSlides = SLIDES_DATA.length;

  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setAnimationClass('animate-fade-out-left');
      setTimeout(() => {
        setCurrentSlideIndex(prev => prev + 1);
        setAnimationClass('animate-fade-in-right');
      }, 300);
    }
  }, [currentSlideIndex, totalSlides]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setAnimationClass('animate-fade-out-right');
      setTimeout(() => {
        setCurrentSlideIndex(prev => prev - 1);
        setAnimationClass('animate-fade-in-left');
      }, 300);
    }
  }, [currentSlideIndex]);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);


  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === totalSlides - 1;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-900 font-sans">
      <style>{`
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeOutLeft { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(-20px); } }
        @keyframes fadeOutRight { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(20px); } }
        .animate-fade-in-right { animation: fadeInRight 0.3s ease-out forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.3s ease-out forwards; }
        .animate-fade-out-left { animation: fadeOutLeft 0.3s ease-in forwards; }
        .animate-fade-out-right { animation: fadeOutRight 0.3s ease-in forwards; }
      `}</style>
      
      <header className="w-full max-w-6xl mx-auto mb-6 text-center">
        <h1 className="text-2xl font-bold text-white">Nuestra Arquitectura "Mágica"</h1>
        <p className="text-md text-gray-400">Una explicación interactiva</p>
      </header>

      <main className={`w-full max-w-6xl h-[70vh] min-h-[500px] flex items-center ${animationClass}`}>
        <Slide 
          data={SLIDES_DATA[currentSlideIndex]} 
          slideNumber={currentSlideIndex + 1}
          totalSlides={totalSlides}
        />
      </main>

      <footer className="w-full max-w-6xl mx-auto mt-6 flex justify-between items-center">
        <button 
          onClick={goToPrevSlide} 
          disabled={isFirstSlide}
          className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700 flex items-center gap-2"
        >
          <i className="fas fa-arrow-left"></i>
          Anterior
        </button>
        <div className="flex items-center space-x-2">
            {SLIDES_DATA.map((_, index) => (
                <button
                    key={index}
                    onClick={() => {
                      if (index > currentSlideIndex) {
                        setAnimationClass('animate-fade-out-left');
                      } else if (index < currentSlideIndex) {
                        setAnimationClass('animate-fade-out-right');
                      }
                      setTimeout(() => {
                        setCurrentSlideIndex(index);
                        if (index > currentSlideIndex) {
                          setAnimationClass('animate-fade-in-right');
                        } else if (index < currentSlideIndex) {
                          setAnimationClass('animate-fade-in-left');
                        }
                      }, 300);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlideIndex === index ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'}`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
        <button 
          onClick={goToNextSlide} 
          disabled={isLastSlide}
          className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700 flex items-center gap-2"
        >
          Siguiente
          <i className="fas fa-arrow-right"></i>
        </button>
      </footer>
    </div>
  );
};

export default App;
