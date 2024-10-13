import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CardHeader, CardTitle } from './components/ui/card';

// Hero data with rarity information
const heroData = [
  { id: 1, name: "Smith", type: "Infantry", rarity: "rare", season: 1 },
  { id: 2, name: "Eugene", type: "Lancer", rarity: "rare", season: 1 },
  { id: 3, name: "Charlie", type: "Marksman", rarity: "rare", season: 1 },
  { id: 4, name: "Cloris", type: "Infantry", rarity: "rare", season: 1 },
  { id: 5, name: "Sergey", type: "Lancer", rarity: "epic", season: 1 },
  { id: 6, name: "Jessie", type: "Marksman", rarity: "epic", season: 1 },
  { id: 7, name: "Patrick", type: "Infantry", rarity: "epic", season: 1 },
  { id: 8, name: "Walis Bokan", type: "Lancer", rarity: "epic", season: 1 },
  { id: 9, name: "Ling Shuang", type: "Marksman", rarity: "epic", season: 1 },
  { id: 10, name: "Gina", type: "Lancer", rarity: "epic", season: 1 },
  { id: 11, name: "Bahiti", type: "Marksman", rarity: "epic", season: 1 },
  { id: 12, name: "Jasser", type: "Lancer", rarity: "epic", season: 1 },
  { id: 13, name: "Seo-yoon", type: "Infantry", rarity: "epic", season: 1 },
  { id: 14, name: "Natalia", type: "Lancer", rarity: "legendary", season: 1 },
  { id: 15, name: "Zinman", type: "Marksman", rarity: "legendary", season: 1 },
  { id: 16, name: "Flint", type: "Infantry", rarity: "legendary", season: 2 },
  { id: 17, name: "Philly", type: "Lancer", rarity: "legendary", season: 2 },
  { id: 18, name: "Alonso", type: "Marksman", rarity: "legendary", season: 2 },
  { id: 19, name: "Logan", type: "Infantry", rarity: "legendary", season: 3 },
  { id: 20, name: "Mia", type: "Lancer", rarity: "legendary", season: 3 },
  { id: 21, name: "Greg", type: "Marksman", rarity: "legendary", season: 3 },
  { id: 22, name: "Ahmose", type: "Infantry", rarity: "legendary", season: 4 },
  { id: 23, name: "Reina", type: "Lancer", rarity: "legendary", season: 4 },
  { id: 24, name: "Lynn", type: "Marksman", rarity: "legendary", season: 4 },
  { id: 25, name: "Hector", type: "Infantry", rarity: "legendary", season: 5 },
  { id: 26, name: "Norah", type: "Lancer", rarity: "legendary", season: 5 },
  { id: 27, name: "Gwen", type: "Marksman", rarity: "legendary", season: 5 },
  { id: 28, name: "Wu Ming", type: "Infantry", rarity: "legendary", season: 6 },
  { id: 29, name: "Renee", type: "Lancer", rarity: "legendary", season: 6 },
  { id: 30, name: "Wayne", type: "Marksman", rarity: "legendary", season: 6 },
  { id: 31, name: "Edith", type: "Infantry", rarity: "legendary", season: 7 },
  { id: 32, name: "Gordon", type: "Lancer", rarity: "legendary", season: 7 },
  { id: 33, name: "Bradley", type: "Marksman", rarity: "legendary", season: 7 },
  { id: 34, name: "Gatot", type: "Infantry", rarity: "legendary", season: 8 },
  { id: 35, name: "Sonya", type: "Lancer", rarity: "legendary", season: 8 },
  { id: 36, name: "Hendrik", type: "Marksman", rarity: "legendary", season: 8 },
  { id: 37, name: "Magnus", type: "Infantry", rarity: "legendary", season: 9 },
  { id: 38, name: "Fred", type: "Lancer", rarity: "legendary", season: 9 },
  { id: 39, name: "Xura", type: "Marksman", rarity: "legendary", season: 9 },
  { id: 40, name: "Jeronimo", type: "Infantry", rarity: "legendary", season: 1 }
];
// Map rarity to gradient colors
const rarityGradient = {
  rare: 'from-blue-600 to-blue-400',
  epic: 'from-purple-600 to-purple-400',
  legendary: 'from-orange-600 to-orange-400'
};

const HeroImage = ({ hero, isExcluded, onToggle, isSelectable = true, size = 'normal' }) => {
  const handleClick = (e) => {
    if (isSelectable && onToggle) {
      e.stopPropagation();
      onToggle(hero.id);
    }
  };

  const sizeClasses = {
    normal: 'w-16 h-24',
    large: 'w-full h-full'
  };

  const textSizeClasses = {
    normal: 'text-[8px]',
    large: 'text-sm'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${sizeClasses[size]} relative`}
    >
      <div
        className={`w-full h-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden ${
          isSelectable ? 'cursor-pointer' : ''
        }`}
        onClick={handleClick}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/${hero.name.toLowerCase().replace(/ /g, '-')}.png`}
          alt={hero.name}
          className={`w-full h-full object-cover ${isExcluded && isSelectable ? 'opacity-60' : ''}`}
          style={{ objectPosition: 'center center' }}
        />
        
        <div className={`absolute bottom-0 left-0 w-full flex justify-center items-center py-1 bg-gradient-to-t ${
          rarityGradient[hero.rarity]
        }`}>
          <span className={`${textSizeClasses[size]} text-white font-semibold px-1`}>
            {hero.name}
          </span>
        </div>
        
        {isSelectable && (
          <span
            className="absolute -top-1 -right-1 z-10 rounded-full w-4 h-4 flex items-center justify-center shadow-lg cursor-pointer"
            style={{
              background: isExcluded ? 'linear-gradient(145deg, #3b82f6, #1d4ed8)' : 'linear-gradient(145deg, #ff751a, #ff3a3a)',
              border: '1px solid white',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}
            onClick={handleClick}
          >
            {isExcluded ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <span className="bg-white w-1.5 h-0.5 rounded-full" style={{ display: 'block' }} />
            )}
          </span>
        )}
      </div>
    </motion.div>
  );
};
const TroopImage = ({ type }) => (
  <img
    src={`${process.env.PUBLIC_URL}/images/${type.toLowerCase()}.png`}
    alt={type}
    className="w-8 h-8 object-contain"
  />
);

const Formation = ({ infantry, lancers, marksmen }) => (
  <div className="mt-4 relative">
    <p className="text-sm font-semibold mb-1 text-center">Ideal Troop Formation Ratio:</p>
    <div className="flex justify-around items-center bg-gray-300 p-4 rounded-lg border border-gray-400 custom-inner-shadow">
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold mb-1 text-gray-700">Infantry</span>
        <TroopImage type="Infantry" />
        <span className="mt-1 font-semibold">{infantry}%</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold mb-1 text-gray-700">Lancer</span>
        <TroopImage type="Lancer" />
        <span className="mt-1 font-semibold">{lancers}%</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold mb-1 text-gray-700">Marksman</span>
        <TroopImage type="Marksman" />
        <span className="mt-1 font-semibold">{marksmen}%</span>
      </div>
    </div>
  </div>
);

// Updated HeroSelection component
const HeroSelection = ({ selectedHeroes, setSelectedHeroes, selectedSeason, setSelectedSeason }) => {
  const toggleHero = (heroId) => {
    setSelectedHeroes((prevSelected) =>
      prevSelected.includes(heroId)
        ? prevSelected.filter((id) => id !== heroId)
        : [...prevSelected, heroId]
    );
  };

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    const heroesToSelect = heroData.filter(hero => hero.season <= season).map(hero => hero.id);
    setSelectedHeroes((prevSelected) =>
      prevSelected.filter((id) => heroesToSelect.includes(id))
    );
  };

  const filteredHeroes = heroData.filter(hero => hero.season <= selectedSeason);

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Hereo's you select here will not be included in the Rally Helper wizard. Click on heroes to remove them (exclude). </p>

      <div className="flex">
        {/* Vertical Season Selection Buttons */}
        <div className="flex flex-col space-y-2 mr-4">
          {[...Array(9).keys()].map(season => (
            <button
              key={season + 1}
              className={`w-8 h-8 rounded-full font-semibold ${
                selectedSeason >= season + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => handleSeasonSelect(season + 1)}
            >
              <span className="text-xs">S{season + 1}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2 flex-grow items-start justify-items-center sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {filteredHeroes.map((hero) => {
            const isExcluded = selectedHeroes.includes(hero.id);
            return (
              <HeroImage
                key={hero.id}
                hero={hero}
                isExcluded={isExcluded}
                onToggle={toggleHero}
                isSelectable={true}
              />
            );
          })}
        </div>
      </div>
      <p className="text-sm font-medium">
        Excluded heroes: {selectedHeroes.length}
      </p>
    </div>
  );
};
// EventSelection component
const EventSelection = ({ selectedEvent, setSelectedEvent }) => {
  const handleEventSelect = (eventId) => {
    setSelectedEvent(eventId);
    setTimeout(() => setSelectedEvent(eventId), 300); // Automatically move to the next step after selection
  };

  const eventData = [
    // { id: 1, name: "Sunfire Castle", icon: "sunfirecastle.png", requiresRally: true },
    { id: 2, name: "Bear Hunt", icon: "bearhunt.png", requiresRally: true }
    // { id: 3, name: "Crazy Joe", icon: "crazyjoe.png", requiresRally: true }
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {eventData.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleEventSelect(event.id)}
          >
            <div
              className={`cursor-pointer transition-all duration-200 rounded-lg overflow-hidden shadow-md ${
                selectedEvent === event.id ? 'ring-4 ring-blue-500' : ''
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/${event.icon}`}
                alt={event.name}
                className="w-full h-[120px] md:h-[150px] object-cover"
              />
              <div className="text-center mt-2 font-semibold text-gray-800">{event.name}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const RallyPreference = ({ rallyPreference, setRallyPreference, selectedEvent, selectedHeroes, selectedSeason }) => {
  // Filter available heroes based on selected season and not excluded
  const availableHeroes = heroData.filter(hero =>
    hero.season <= selectedSeason && !selectedHeroes.includes(hero.id)
  );

  const eventRallySetup = {
    1: { // Sunfire Castle
      joining: {
        leftHero: [1, 4, 2, 5, 3, 6], // Smith (1), Cloris (4), Eugene (2), Sergey (5), Charlie (3), Jessie (6)
        middleHero: [3, 6, 2, 5, 1, 4], // Charlie (3), Jessie (6), Eugene (2), Sergey (5), Smith (1), Cloris (4)
        rightHero: [2, 5, 1, 4, 3, 6] // Eugene (2), Sergey (5), Smith (1), Cloris (4), Charlie (3), Jessie (6)
      },
      leading: {
        leftHero: [1, 4, 2, 5, 3, 6], // Smith (1), Cloris (4), Eugene (2), Sergey (5), Charlie (3), Jessie (6)
        middleHero: [],
        rightHero: []
      },
      troopFormation: { infantry: 30, lancers: 30, marksmen: 40 },
      description: "Sunfire Castle requires a balanced approach. Focus on a mix of all troop types."
    },
    2: { // Bear Hunt
      joining: {
        leftHero: [6, 12, 13, 40, 23, 27, 33, 35, 37, 17, 26, 31, 20, 24, 29, 30, 32, 16, 19, 21], // Jessie (6), Jasser (12), Seo-yoon (13), Jeronimo (40), Reina (23), Gwen (27), Bradley (33), Sonya (35), Magnus (37), Philly (17), Norah (26), Edith (31), Mia (20), Lynn (24), Renee (29), Wayne (30), Gordon (32), Flint (16), Logan (19), Greg (21)
        middleHero: [], // Same as left, since only first hero matters
        rightHero: [] // Same as left, since only first hero matters
      },
      leading: {
        leftHero: [16, 19, 22, 25, 28, 31, 34, 37], // Flint (16), Logan (19), Ahmose (22), Hector (25), Wu Ming (28), Edith (31), Gatot (34), Magnus (37)
        middleHero: [14, 17, 20, 23, 26, 29, 32, 35, 38], // Natalia (14), Philly (17), Mia (20), Reina (23), Norah (26), Renee (29), Gordon (32), Sonya (35), Fred (38)
        rightHero: [15, 18, 21, 24, 27, 30, 33, 36, 39] // Zinman (15), Alonso (18), Greg (21), Lynn (24), Gwen (27), Wayne (30), Bradley (33), Hendrik (36), Xura (39)
      },
      troopFormation: { infantry: 33, lancers: 33, marksmen: 34 },
      description: rallyPreference === 'leading' ? "For Bear Hunt, focus on heroes with direct damage or attack increase skills when joining. As a leader, use your strongest legendary heroes. If a card is empty, any appropriate hero can be used in that position." : "For Bear Hunt, focus on heroes with direct damage or attack increase skills when joining. The heroes listed below are the preferred leftmost heroes in preferential order (top to bottom). If a card is empty, any hero can be used in that position, but the leftmost hero of each rally configuration must start with the indicated hero on the left."
    },
    3: { // Crazy Joe
      joining: {
        leftHero: [3, 6, 1, 4, 2, 5], // Charlie (3), Jessie (6), Smith (1), Cloris (4), Eugene (2), Sergey (5)
        middleHero: [2, 5, 1, 4, 3, 6], // Eugene (2), Sergey (5), Smith (1), Cloris (4), Charlie (3), Jessie (6)
        rightHero: [1, 4, 3, 6, 2, 5] // Smith (1), Cloris (4), Charlie (3), Jessie (6), Eugene (2), Sergey (5)
      },
      leading: {
        leftHero: [2, 5, 1, 4, 3, 6], // Eugene (2), Sergey (5), Smith (1), Cloris (4), Charlie (3), Jessie (6)
        middleHero: [3, 6, 2, 5, 1, 4], // Charlie (3), Jessie (6), Eugene (2), Sergey (5), Smith (1), Cloris (4)
        rightHero: [1, 4, 2, 5, 3, 6] // Smith (1), Cloris (4), Eugene (2), Sergey (5), Charlie (3), Jessie (6)
      },
      troopFormation: { infantry: 20, lancers: 50, marksmen: 30 },
      description: rallyPreference === 'leading' ? "Crazy Joe is vulnerable to Lancers. Bring a high proportion of Lancers for maximum effect. As a leader, use your strongest legendary heroes. The heroes listed below are the preferred leftmost heroes in preferential order (top to bottom). If a card is empty, any hero can be used in that position, but the leftmost hero of each rally configuration must start with the indicated hero on the left." : "Crazy Joe is vulnerable to Lancers. Bring a high proportion of Lancers for maximum effect. The heroes listed below are the preferred leftmost heroes in preferential order (top to bottom). If a card is empty, any hero can be used in that position, but the leftmost hero of each rally configuration must start with the indicated hero on the left."
    }
  };

  const renderRallySetup = (type) => {
    const troopFormation = eventRallySetup[selectedEvent].troopFormation;
    const description = eventRallySetup[selectedEvent].description;
    const formationDescription = (
      <div className="bg-blue-200 rounded-lg p-4 text-sm text-blue-900 mb-4">
        {description}
      </div>
    );
    const maxSetups = 6;
    const formations = [];
    const usedHeroes = new Set();
  
    const setupData = eventRallySetup[selectedEvent][type];
    const positions = ['leftHero', 'middleHero', 'rightHero'];
  
    for (let i = 0; i < maxSetups; i++) {
      let formationHeroes = [];
      
      positions.forEach((position) => {
        const preferenceOrder = setupData[position];
        let hero = null;
  
        for (let j = 0; j < preferenceOrder.length; j++) {
          const potentialHero = availableHeroes.find(
            (h) => h.id === preferenceOrder[j] && !usedHeroes.has(h.id)
          );
          if (potentialHero) {
            hero = potentialHero;
            usedHeroes.add(hero.id);
            break;
          }
        }
  
        if (hero) {
          formationHeroes.push(
            <div key={hero.id} className="w-24 h-36 rounded-lg overflow-hidden">
              <HeroImage hero={hero} isSelectable={false} size="large" />
            </div>
          );
        } else {
          formationHeroes.push(
            <div key={position} className="w-24 h-36 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-4xl font-bold">+</span>
            </div>
          );
        }
      });
  
      if (formationHeroes.some((hero) => hero.props.children?.props?.hero)) {
        formations.push(
          <div key={i} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Rally Configuration {i + 1}</h3>
            <div className="flex items-center mb-2 justify-start space-x-4">{formationHeroes}</div>
          </div>
        );
      } else {
        break;
      }
    }
  
    return (
      <section className="mb-6 bg-green-50 p-4 rounded-lg shadow">
        <div className="flex items-center space-x-2 mb-4 relative">
          <div className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow-md relative inline-block">
            <span className="text-lg" style={{ textShadow: '1px 1px 2px black' }}>
              {type === 'joining' ? 'Joining a Rally (preferential order)' : 'Rally Captain Setup'}
            </span>
            <img
              src={`${process.env.PUBLIC_URL}/images/rallyflag.png`}
              alt="Rally Flag"
              className="absolute -top-8 -left-8 w-16 h-16"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        {formationDescription}
        <Formation
          infantry={troopFormation.infantry}
          lancers={troopFormation.lancers}
          marksmen={troopFormation.marksmen}
        />
        {formations}
      </section>
    );
  };
  

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Choose your rally preference:</p>
      <div className="flex justify-center space-x-2 mb-2">
        {['joining', 'leading'].map((preference) => (
          <motion.div
            key={preference}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`cursor-pointer transition-all duration-200 w-24 rounded-md overflow-hidden ${
                rallyPreference === preference ? 'bg-green-500 text-white' : 'hover:bg-gray-100 text-gray-800'
              }`}
              onClick={() => setRallyPreference(preference)}
            >
              <div className="p-2 text-center">
                <div className="text-2xl mb-1">{preference === 'joining' ? '🤝' : '🚩'}</div>
                <div className="text-xs font-bold">{preference === 'joining' ? 'Join Rally' : 'Lead Rally'}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {rallyPreference && renderRallySetup(rallyPreference)}
    </div>
  );
};

// StrategyDisplay component
const StrategyDisplay = () => <div>Strategy Display Component</div>;

const RallyHelper = () => {
  const [step, setStep] = useState(0);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rallyPreference, setRallyPreference] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(2); // Add this line

  const steps = [
    { title: 'Exclude Heroes', component: HeroSelection },
    { title: 'Choose An Event', component: EventSelection },
    { title: 'Rally Preference', component: RallyPreference },
    { title: 'Strategy', component: StrategyDisplay },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const CurrentStepComponent = steps[step].component;

  useEffect(() => {
    if (selectedEvent) {
      handleNext();
    }
  }, [selectedEvent]);

  // Add this useEffect for debugging
  useEffect(() => {
    console.log('Selected Heroes:', selectedHeroes);
    console.log('Selected Season:', selectedSeason);
    console.log('Selected Event:', selectedEvent);
    console.log('Rally Preference:', rallyPreference);
  }, [selectedHeroes, selectedSeason, selectedEvent, rallyPreference]);

  return (
    <div className="h-full flex flex-col">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2">
        <CardTitle className="text-lg font-bold">Rally Helper</CardTitle>
      </CardHeader>
      <div className="flex-grow overflow-y-auto p-4">
        <h2 className="text-lg font-bold mb-3 text-gray-800">{steps[step].title}</h2>
        <CurrentStepComponent
          selectedHeroes={selectedHeroes}
          setSelectedHeroes={setSelectedHeroes}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          rallyPreference={rallyPreference}
          setRallyPreference={setRallyPreference}
          selectedSeason={selectedSeason}
          setSelectedSeason={setSelectedSeason}
        />
        <div className="mt-4 flex justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBack}
            disabled={step === 0}
            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={step === steps.length - 1}
            className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default RallyHelper;
