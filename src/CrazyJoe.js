import React, { useState } from 'react';

// Define hero gradients and troop images
const heroTypeGradient = {
  Patrick: 'from-purple-600 to-purple-400',
};

const HeroImage = ({ name }) => (
  <div className="relative w-[90px] h-[140px] bg-white border border-gray-200 shadow-lg rounded-lg overflow-visible">
    <img
      src={`${process.env.PUBLIC_URL}/images/${name.toLowerCase()}.png`}
      alt={name}
      className="w-full h-full object-cover"
      style={{ objectPosition: 'center center' }}
    />
    <div className={`absolute bottom-0 left-0 w-full text-center py-1 text-white font-semibold bg-gradient-to-t ${heroTypeGradient[name]}`}>
      <span className="text-xs">{name}</span>
    </div>
  </div>
);

const TroopImage = ({ type }) => (
  <img
    src={`${process.env.PUBLIC_URL}/images/${type.toLowerCase()}.png`}
    alt={type}
    className="w-8 h-8 object-contain"
  />
);

const CrazyJoe = () => {
  const [activeTab, setActiveTab] = useState('gainingPoints'); // Default to 'Gaining Points' tab

  return (
    <div className="p-4 bg-white rounded-lg shadow relative">
      {/* Tabs for Switching between sections */}
      <div className="flex mb-4 space-x-2">
        <button
          onClick={() => setActiveTab('gainingPoints')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'gainingPoints' ? 'bg-blue-200' : 'bg-gray-200'}`}
        >
          Gaining Points
        </button>
        <button
          onClick={() => setActiveTab('troopExchange')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'troopExchange' ? 'bg-blue-200' : 'bg-gray-200'}`}
        >
          Troop Exchange
        </button>
        <button
          onClick={() => setActiveTab('specialWaves')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'specialWaves' ? 'bg-blue-200' : 'bg-gray-200'}`}
        >
          Special Waves
        </button>
      </div>

      {/* Content based on selected tab */}
      {activeTab === 'gainingPoints' && (
        <section className="mb-6 bg-yellow-50 p-3 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Gaining Points</h3>
          <p className="mb-2">
            <strong>City Defense Points:</strong> These points are only for the owner of the attacked city. They are double the points that can be achieved by killing troops.
          </p>
          <p className="mb-2">
            <strong>Kill Points:</strong> You get points for killing Crazy Joe's troops in every attack wave. The maximum City Defense Points is double the maximum Kill Points you can achieve per wave.
          </p>
          <div className="mt-4 bg-white p-3 rounded shadow-inner" style={{ maxWidth: '88%' }}>
            <p className="text-sm">
              On wave 7, 14, and 17, only online members will be attacked. On wave 10 & 20, the bandit will target the Alliance HQ. Make the strongest player the rally leader!
              When defending, killing &gt;50% of enemy troops is a successful defense. Be sure to check who Joe's troops are targeting.
            </p>
          </div>
        </section>
      )}

      {activeTab === 'troopExchange' && (
        <section className="mb-6 bg-red-50 p-3 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Troop Exchange</h3>
          <p className="mb-2">
            To maximize the points you get, use the "Zero Defense" strategy. This doesn't mean you aren't defending against Crazy Joe, but that you aren't defending your own city. Your city is fully defended by your alliance members. Your goal is:
          </p>
          <ul className="list-disc pl-5">
            <li>Send out all your troops to other players!</li>
            <li>Reinforce players with little reinforcements to make the most kills!</li>
            <li>Don't send out your strongest heroes—they need to stay on the wall of your city!</li>
          </ul>
          <div className="bg-gray-200 rounded-lg p-4 text-sm text-gray-700 mt-4" style={{ maxWidth: '88%' }}>
            Strategy:
            <ul className="list-disc pl-5">
              <li>Keep Strongest Heroes on your wall.</li>
              <li>Reinforce the strongest players or those close to losing.</li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === 'specialWaves' && (
        <section className="mb-6 bg-purple-50 p-3 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Special Waves</h3>
          <div className="flex items-center bg-blue-200 p-4 rounded-lg mt-4 border border-gray-300">
  <div className="flex-shrink-0">
    <HeroImage name="Patrick" />
  </div>
  
  <div className="ml-4">
    
    <span>When sending troops to the Alliance HQ, Use Patrick as the leading hero!</span>
  </div>
</div>
          <p className="mb-2">
            In waves 10 and 20, Crazy Joe will attack the Tundra Alliance Headquarters. During these waves, send troops to the headquarters to score points. Highest level troops should be sent by those with the most powerful troops to give the best chance at defending.
          </p>

          <div className="flex justify-around items-center bg-gray-200 p-4 rounded-lg mt-4 border border-gray-300" style={{ maxWidth: '88%' }}>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold mb-1">Infantry</span>
              <TroopImage type="Infantry" />
              <span className="mt-1 font-semibold">60%</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold mb-1">Lancer</span>
              <TroopImage type="Lancer" />
              <span className="mt-1 font-semibold">20%</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold mb-1">Marksman</span>
              <TroopImage type="Marksman" />
              <span className="mt-1 font-semibold">20%</span>
            </div>
          </div>
          
          <div className="bg-blue-200 rounded-lg p-4 text-sm text-blue-900 mt-4" style={{ maxWidth: '88%' }}>
          Send more infantry than lancers or marksmen to score more points. Heal your troops after each wave. If you lose the event after two defeats, reinforce your allies!
          </div>
        </section>
      )}
    </div>
  );
};

export default CrazyJoe;
