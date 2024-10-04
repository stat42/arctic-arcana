import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

// Component for displaying troop images
const TroopImage = ({ type }) => (
  <img
    src={`${process.env.PUBLIC_URL}/images/${type.toLowerCase()}.png`}
    alt={type}
    className="w-8 h-8 object-contain"
  />
);

// Hero data
const heroData = [
  { id: 1, name: "Jeronimo", emoji: "🦸‍♂️", type: "Infantry" },
  { id: 2, name: "Molly", emoji: "🧙‍♀️", type: "Lancer" },
  { id: 3, name: "Babiti", emoji: "🏹", type: "Marksman" },
  { id: 4, name: "Hero 4", emoji: "🧝‍♂️", type: "Infantry" },
  { id: 5, name: "Hero 5", emoji: "🧛‍♀️", type: "Lancer" },
  { id: 6, name: "Hero 6", emoji: "🧟‍♂️", type: "Marksman" },
];

// Event data
const eventData = [
  { id: 1, name: "Horde Invasion", icon: "🧟", requiresRally: true },
  { id: 2, name: "Boss Battle", icon: "👹", requiresRally: true },
];

// Rally setup data
const rallySetupData = {
  1: { // Horde Invasion
    joining: {
      leftHero: [1, 4, 2, 5, 3, 6],
      middleHero: [3, 6, 2, 5, 1, 4],
      rightHero: [2, 5, 1, 4, 3, 6]
    },
    leading: {
      leftHero: [1, 4, 2, 5, 3, 6],
      middleHero: [2, 5, 3, 6, 1, 4],
      rightHero: [3, 6, 1, 4, 2, 5],
      idealTroopFormation: { infantry: 30, lancer: 30, marksman: 40 }
    }
  },
  2: { // Boss Battle
    joining: {
      leftHero: [3, 6, 1, 4, 2, 5],
      middleHero: [1, 4, 2, 5, 3, 6],
      rightHero: [2, 5, 3, 6, 1, 4]
    },
    leading: {
      leftHero: [3, 6, 2, 5, 1, 4],
      middleHero: [1, 4, 3, 6, 2, 5],
      rightHero: [2, 5, 1, 4, 3, 6],
      idealTroopFormation: { infantry: 40, lancer: 20, marksman: 40 }
    }
  }
};

// Updated HeroSelection component
const HeroSelection = ({ selectedHeroes, setSelectedHeroes }) => {
  const toggleHero = (heroId) => {
    setSelectedHeroes((prevSelected) =>
      prevSelected.includes(heroId)
        ? prevSelected.filter((id) => id !== heroId)
        : [...prevSelected, heroId]
    );
  };

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Click on the heroes you don't own:</p>
      <div className="grid grid-cols-3 gap-2">
        {heroData.map((hero) => (
          <motion.div
            key={hero.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className={`cursor-pointer transition-all duration-200 ${
                selectedHeroes.includes(hero.id) 
                  ? 'bg-gray-400 text-white' 
                  : 'hover:bg-gray-100 text-gray-800'
              }`}
              onClick={() => toggleHero(hero.id)}
            >
              <CardContent className="p-2 text-center">
                <div className="text-2xl mb-1">{hero.emoji}</div>
                <div className="text-xs font-bold truncate">{hero.name}</div>
                {selectedHeroes.includes(hero.id) && (
                  <div className="text-xs mt-1 font-bold">Excluded</div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <p className="text-sm font-medium">
        Selected (excluded) heroes: {selectedHeroes.length}
      </p>
    </div>
  );
};

const EventSelection = ({ selectedEvent, setSelectedEvent }) => {
  return (
    <div>
      <p className="mb-4 text-lg font-semibold">Select the event type:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {eventData.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className={`cursor-pointer transition-all duration-200 ${
                selectedEvent === event.id 
                  ? 'bg-green-500 text-white' 
                  : 'hover:bg-gray-100 text-gray-800'
              }`}
              onClick={() => setSelectedEvent(event.id)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">{event.icon}</div>
                <div className="text-sm font-bold">{event.name}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedEvent && (
        <p className="mt-4 text-lg font-semibold">
          Selected event: {eventData.find(e => e.id === selectedEvent).name}
        </p>
      )}
    </div>
  );
};

const RallyPreference = ({ rallyPreference, setRallyPreference, selectedEvent, selectedHeroes }) => {
  const availableHeroes = heroData.filter(hero => !selectedHeroes.includes(hero.id));
  
  const renderTroopFormation = () => {
    if (rallyPreference === 'leading') {
      const formation = rallySetupData[selectedEvent].leading.idealTroopFormation;
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-100 p-2 rounded mt-2"
        >
          <h4 className="font-bold mb-1 text-sm">Ideal Troop Formation Ratio:</h4>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(formation).map(([troopType, percentage]) => (
              <div key={troopType} className="text-center">
                <div className="text-xl mb-1">
                  {troopType === 'infantry' ? '🛡️' : troopType === 'lancer' ? '🐎' : '🏹'}
                </div>
                <div className="font-bold text-xs">{troopType}</div>
                <div className="text-xs">{percentage}%</div>
              </div>
            ))}
          </div>
        </motion.div>
      );
    }
    return null;
  };

  const renderRallySetup = () => {
    const takenHeroes = [];
    const positions = ['leftHero', 'middleHero', 'rightHero'];

    return (
      <div className="flex space-x-1 mb-2">
        {positions.map((position, index) => {
          const preferenceOrder = rallySetupData[selectedEvent][rallyPreference][position];
          const hero = availableHeroes.find(h => preferenceOrder.includes(h.id) && !takenHeroes.includes(h.id));
          
          if (hero) {
            takenHeroes.push(hero.id);
          }

          return (
            <motion.div
              key={position}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-1/3"
            >
              <Card>
                <CardContent className="p-2 text-center">
                  <div className="text-2xl mb-1">{hero ? hero.emoji : '❓'}</div>
                  <div className="text-xs font-bold">{hero ? hero.name : 'N/A'}</div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">Choose your rally preference:</p>
      <div className="flex justify-center space-x-2 mb-2">
        {['joining', 'leading'].map((preference) => (
          <motion.div
            key={preference}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className={`cursor-pointer transition-all duration-200 w-24 ${
                rallyPreference === preference ? 'bg-green-500 text-white' : 'hover:bg-gray-100 text-gray-800'
              }`}
              onClick={() => setRallyPreference(preference)}
            >
              <CardContent className="p-2 text-center">
                <div className="text-2xl mb-1">{preference === 'joining' ? '🤝' : '🚩'}</div>
                <div className="text-xs font-bold">{preference === 'joining' ? 'Join Rally' : 'Lead Rally'}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {rallyPreference && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-2"
        >
          <h3 className="text-sm font-bold mb-1">
            {rallyPreference === 'joining' ? 'Joining' : 'Leading'} Rally Setup
          </h3>
          {renderRallySetup()}
          {renderTroopFormation()}
        </motion.div>
      )}
    </div>
  );
};

const StrategyDisplay = () => <div>Strategy Display Component</div>;

const RallyHelper = () => {
  const [step, setStep] = useState(0);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rallyPreference, setRallyPreference] = useState(null);

  const steps = [
    { title: 'Select Unowned Heroes', component: HeroSelection },
    { title: 'Choose Event Type', component: EventSelection },
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

  return (
    <div className="h-full flex flex-col">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2">
        <CardTitle className="text-lg font-bold">Whiteout Survival Helper</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto p-4">
        <h2 className="text-lg font-bold mb-3 text-gray-800">{steps[step].title}</h2>
        <CurrentStepComponent
          selectedHeroes={selectedHeroes}
          setSelectedHeroes={setSelectedHeroes}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          rallyPreference={rallyPreference}
          setRallyPreference={setRallyPreference}
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
      </CardContent>
    </div>
  );
};

export default RallyHelper;