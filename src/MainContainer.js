import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import Arcana from './Arcana';
import CrazyJoe from './CrazyJoe';
import FrostfireMine from './FrostFireMine';
import RallyHelper from './RallyHelper';

const CurvedText = ({ text, isActive }) => {
  const words = text.split(' ');
  const isOneWord = words.length === 1;
  const gradientId = "text-gradient";

  return (
    <svg width="110" height="60" viewBox="0 0 110 60">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#7b5eff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ff65bd', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {isOneWord ? (
        <>
          <path id="curve" fill="transparent" d="M0,30 Q55,80 110,30" />
          <text fill={`url(#${gradientId})`} stroke="black" strokeWidth="1" className={`${isActive ? 'font-bold drop-shadow-[0_0_15px_rgba(255,255,255,1)] animate-pulse' : 'font-normal drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]'} text-[16px]`}>
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              {text}
            </textPath>
          </text>
        </>
      ) : (
        <>
          <path id="curveTop" fill="transparent" d="M0,30 Q55,0 110,30" />
          <path id="curveBottom" fill="transparent" d="M0,30 Q55,80 110,30" />
          <text fill={`url(#${gradientId})`} stroke="black" strokeWidth="1" className={`${isActive ? 'font-bold drop-shadow-[0_0_15px_rgba(255,255,255,1)] animate-pulse' : 'font-normal drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]'} text-[16px]`}>
            <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
              {words[0]}
            </textPath>
          </text>
          <text fill={`url(#${gradientId})`} stroke="black" strokeWidth="1" className={`${isActive ? 'font-bold drop-shadow-[0_0_15px_rgba(255,255,255,1)] animate-pulse' : 'font-normal drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]'} text-[16px]`}>
            <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
              {words[1]}
            </textPath>
          </text>
        </>
      )}
    </svg>
  );
};


const MainContainer = () => {
  const [activeTab, setActiveTab] = useState('rallyHelper');
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
    { id: 'rallyHelper', name: 'RALLY HELPER', icon: 'rallyflag.png', component: RallyHelper },
    { id: 'crazyJoe', name: 'CRAZY JOE', icon: 'crazyjoe.png', component: CrazyJoe },
    { id: 'frostfireMine', name: 'FROSTFIRE MINE', icon: 'frostfiremine.png', component: FrostfireMine },
    { id: 'arcana', name: 'ARCANA', icon: 'styletext.png', component: Arcana },
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
    <div className="min-h-screen w-full bg-cover bg-center bg-fixed flex flex-col">
      {/* Compact Topbar with tabs */}
      <div className="w-full bg-white bg-opacity-80 flex flex-row items-center justify-center" style={{ height: '50px' }}>
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange(tab.id)}
            className="cursor-pointer mx-1 flex flex-col items-center justify-center relative h-full w-24"
          >
            <div className="relative flex flex-col items-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/${tab.icon}`}
                alt={tab.name}
                className={`${activeTab === tab.id ? 'w-20 h-20' : 'w-18 h-18'} object-contain z-0`}
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <CurvedText text={tab.name} isActive={activeTab === tab.id} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Main content area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg relative min-h-[calc(100vh-4.5rem)]">
          <img
            src={`${process.env.PUBLIC_URL}/images/freePiksnowcap.png`}
            alt="Snow"
            className="absolute -top-7 -right-5 w-16 h-16 sm:w-24 sm:h-24 object-contain"
          />
          
          {/* Render active component */}
          <div className="mb-20">
            {React.createElement(tabs.find(tab => tab.id === activeTab)?.component)}
          </div>

          {/* Cat Image */}
          {/* <img
            src={catImages[currentCatIndex]}
            alt="Cat"
            className={`fixed bottom-4 right-4 w-20 h-40 sm:w-24 sm:h-36 object-contain ${catAnimationClass}`}
            onClick={handleCatClick}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;