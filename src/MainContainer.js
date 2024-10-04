import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import Arcana from './Arcana';
import BearHunt from './BearHunt';
import CrazyJoe from './CrazyJoe';
import FrostfireMine from './FrostfireMine';
import RallyHelper from './RallyHelper';

const MainContainer = () => {
  const [activeTab, setActiveTab] = useState('arcana');
  const [currentCatIndex, setCurrentCatIndex] = useState(0);
  const [catAnimationClass, setCatAnimationClass] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const catImages = useMemo(() => [
    `${process.env.PUBLIC_URL}/images/catspellbinder-0.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-1.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-2.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-3.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-4.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-5.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-6.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-7.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-8.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-9.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-10.png`
  ], []);

const tabs = [
    { id: 'arcana', name: 'Arcana', icon: 'styletext.png', component: Arcana },
    { id: 'rallyHelper', name: 'Rally Helper', icon: 'bearhunt.png', component: RallyHelper },
    { id: 'bearHunt', name: 'Bear Hunt', icon: 'bearhunt.png', component: BearHunt },
    { id: 'crazyJoe', name: 'Crazy Joe', icon: 'crazyjoe.png', component: CrazyJoe },
    { id: 'frostfireMine', name: 'Frostfire Mine', icon: 'frostfiremine.png', component: FrostfireMine },
  ];

  const preloadImages = useCallback(() => {
    catImages.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, [catImages]);

  useEffect(() => {
    preloadImages();
    setCurrentCatIndex(Math.floor(Math.random() * catImages.length));
  }, [catImages, preloadImages]);

  const getRandomCatIndex = useCallback((currentIndex) => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * catImages.length);
    } while (newIndex === currentIndex);
    return newIndex;
  }, [catImages.length]);

  const handleTabChange = useCallback((tab) => {
    if (tab === activeTab) return;

    setIsAnimating(true);
    setCatAnimationClass('fade-out');
    
    setTimeout(() => {
      setActiveTab(tab);
      const newIndex = getRandomCatIndex(currentCatIndex);
      setCurrentCatIndex(newIndex);
      setCatAnimationClass('fade-in');
      
      setTimeout(() => {
        setCatAnimationClass('');
        setIsAnimating(false);
      }, 500);
    }, 250);
  }, [activeTab, currentCatIndex, getRandomCatIndex]);

  const handleCatClick = useCallback(() => {
    if (isAnimating) return;
  
    setIsAnimating(true);
    setCatAnimationClass('fade-out');
  
    setTimeout(() => {
      const newIndex = getRandomCatIndex(currentCatIndex);
      setCurrentCatIndex(newIndex);
      setCatAnimationClass('fade-in');
  
      setTimeout(() => {
        setCatAnimationClass('');
        setIsAnimating(false);
      }, 500);
    }, 250);
  }, [isAnimating, currentCatIndex, getRandomCatIndex]);

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-fixed flex" 
         style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/a9e2fc4d-73e5-434e-bc50-686c838ffce2.png)` }}>
      {/* Sidebar with tabs */}
      <div className="w-20 bg-white bg-opacity-80 flex flex-col items-center py-4">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange(tab.id)}
            className={`cursor-pointer mb-4 p-2 rounded-full w-16 h-16 flex flex-col items-center justify-center ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            <img src={`${process.env.PUBLIC_URL}/images/${tab.icon}`} alt={tab.name} className="w-8 h-8 object-contain" />
            <span className="text-xs mt-1 text-center">{tab.name.split(' ')[0]}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Main content area */}
      <div className="flex-grow p-4 overflow-hidden">
        <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg relative h-[calc(100vh-2rem)]">
          <img src={`${process.env.PUBLIC_URL}/images/freePiksnowcap.png`}
               alt="Snow"
               className="absolute -top-7 -right-5 w-16 h-16 sm:w-24 sm:h-24 object-contain" />
          
          {/* Render active component */}
          <div className="overflow-y-auto h-[calc(100vh-220px)] pr-2">
            {React.createElement(tabs.find(tab => tab.id === activeTab)?.component)}
          </div>

          {/* Cat Image */}
          <img 
            src={catImages[currentCatIndex]}
            alt="Cat" 
            className={`absolute bottom-0 right-0 w-40 h-60 sm:w-50 sm:h-80 object-contain ${catAnimationClass}`} 
            onClick={handleCatClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;