import React, { useState } from 'react';

// Map hero types to their gradient colors
const heroTypeGradient = {
  Jeronimo: 'from-orange-600 to-orange-400',
  Molly: 'from-purple-600 to-purple-400',
  Bahiti: 'from-purple-600 to-purple-400',
  Natalia: 'from-orange-600 to-orange-400',
  Jessie: 'from-purple-600 to-purple-400',
  Jasser: 'from-purple-600 to-purple-400',
  'Seo-yoon': 'from-purple-600 to-purple-400',
  // Add other heroes and their types as needed
};

const HeroImage = ({ name }) => (
  <div className="relative w-[70px] h-[110px] bg-white border border-gray-200 shadow-lg rounded-lg overflow-visible">
    <img 
      src={`${process.env.PUBLIC_URL}/images/${name.toLowerCase()}.png`} 
      alt={name} 
      className="w-full h-full object-cover" 
      style={{ objectPosition: 'center center' }} 
    />

    <span 
      className="absolute -top-4 -right-4 z-10 rounded-full w-6 h-6 flex items-center justify-center shadow-lg"
      style={{ 
        background: 'linear-gradient(145deg, #ff751a, #ff3a3a)', 
        border: '2px solid white', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' 
      }}
    >
      <span className="bg-white w-3 h-1 rounded-full" style={{ display: 'block' }} />
    </span>
    
    <div className={`absolute bottom-0 left-0 w-full text-center py-1 text-white font-semibold bg-gradient-to-t ${heroTypeGradient[name]}`}>
      <span className="text-xs">{name}</span>
    </div>
  </div>
);

const CircleHeroImage = ({ name }) => (
  <div className="flex flex-col items-center">
    <div className={`w-[70px] h-[70px] border border-gray-300 shadow-lg rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br ${heroTypeGradient[name]}`}>
      <div className="w-[60px] h-[60px] bg-white border border-gray-200 shadow-md rounded-full overflow-hidden">
        <img 
          src={`${process.env.PUBLIC_URL}/images/${name.toLowerCase()}.png`} 
          alt={name} 
          className="w-full h-full object-cover" 
          style={{ objectPosition: 'center center' }} 
        />
      </div>
    </div>
    <span className="text-sm text-center mt-1 text-gray-700 font-semibold">{name}</span>
  </div>
);

const TroopImage = ({ type }) => (
  <img 
    src={`${process.env.PUBLIC_URL}/images/${type.toLowerCase()}.png`} 
    alt={type} 
    className="w-8 h-8 object-contain" 
  />
);

const Formation = ({ infantry, lancers, marksmen }) => (
  <div className="mt-2 relative">
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

const HeroList = ({ heroes }) => (
  <div className="flex space-x-1">
    {heroes.map(hero => <HeroImage key={hero.name} name={hero.name} />)}
  </div>
);

const CircleHeroList = ({ heroes }) => (
  <div className="grid grid-cols-2 gap-4">
    {heroes.map(hero => <CircleHeroImage key={hero.name} name={hero.name} />)}
  </div>
);

const BearHunt = () => {
  const [activeTab, setActiveTab] = useState('joining'); // State to handle active tab

  return (
    <div className="p-4 bg-white rounded-lg shadow relative">     
      {/* Tabs for Switching between Joining a Rally and Starting a Rally */}
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab('joining')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'joining' ? 'bg-blue-200' : 'bg-gray-200'}`}
        >
          Joining a Rally
        </button>
        <button
          onClick={() => setActiveTab('starting')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'starting' ? 'bg-blue-200' : 'bg-gray-200'}`}
        >
          Starting a Rally
        </button>
      </div>
  
      {/* Content based on selected tab */}
      {activeTab === 'joining' ? (
        <section className="mb-6 bg-blue-50 p-3 rounded-lg shadow">
          <div className="flex items-center space-x-2 bg-blue-200 p-4 rounded-lg shadow-inner">
            <div className="bg-blue-400 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-green-500 text-3xl font-bold">+</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-700">Joining A Rally: Hero Setup</h3>
          </div>
          <div className="bg-gray-100 p-1 rounded">
            <p className="mb-2">These heroes go on the left!</p>
            <CircleHeroList heroes={[
              { name: 'Jessie' },
              { name: 'Jasser' },
              { name: 'Jeronimo' },
              { name: 'Seo-yoon' }
            ]} />
            <div className="mt-4 bg-white p-3 rounded shadow-inner" style={{ maxWidth: '88%' }}>
              <p className="text-sm">
                These heroes greatly increase the damage done in the rally if joining with them positioned all the way on the left.
                Jessie, Jasser and Jeronimo are standards for every situation where you want to increase your Lethality, 
                which is the best source of damage for bear trap. Seo-yoon is boosting your Attack stat, 
                which is the second source of damage for bear trap.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="mb-6 bg-green-50 p-3 rounded-lg shadow">
          {/* Rally Captain Setup 1 */}
          <div className="flex items-center space-x-2 mb-2 relative">
            <div className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow-md relative inline-block">
              <span className="text-lg" style={{ textShadow: '1px 1px 2px black' }}>Rally Captain Setup 1</span>
              <img
                src={`${process.env.PUBLIC_URL}/images/rallyflag.png`}
                alt="Rally Flag"
                className="absolute -top-8 -left-8 w-20 h-20"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Hero portraits */}
          <div className="flex items-center mb-2">
            <HeroList heroes={[
              { name: 'Jeronimo' },
              { name: 'Molly' },
              { name: 'Bahiti' }
            ]} />
          </div>

          {/* Blue well with custom text */}
          <div className="bg-blue-200 rounded-lg p-4 text-sm text-blue-900 mb-4">
            In most cases, you will have the best stats on Infantry due to Jeronimo’s raw stats. Using equal formation with slightly more marksmen troops works the best.
          </div>

          {/* Troop formation section */}
          <Formation infantry={30} lancers={30} marksmen={40} />
  
          {/* Rally Captain Setup 2 */}
          <section className="mb-6 bg-blue-50 p-3 rounded-lg shadow">
            <div className="flex items-center space-x-2 mb-2 relative">
              <div className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow-md relative inline-block">
                <span className="text-lg" style={{ textShadow: '1px 1px 2px black' }}>Rally Captain Setup 2</span>
                <img
                  src={`${process.env.PUBLIC_URL}/images/rallyflag.png`}
                  alt="Rally Flag"
                  className="absolute -top-8 -left-8 w-20 h-20"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Hero portraits */}
            <div className="flex items-center mb-2">
              <HeroList heroes={[
                { name: 'Natalia' },
                { name: 'Molly' },
                { name: 'Bahiti' }
              ]} />
            </div>

            {/* Blue well with custom text for setup 2 */}
            <div className="bg-blue-200 rounded-lg p-4 text-sm text-blue-900 mb-4">
              This configuration is best for anyone that does not have Jeronimo, or for anyone who wants to use Jeronimo for joining rallies!
            </div>

            {/* Troop formation section */}
            <Formation infantry={20} lancers={40} marksmen={40} />
          </section>
        </section>
      )}
    </div>
  );
};

export default BearHunt;
