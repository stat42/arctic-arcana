import React, { useState } from 'react';

// Component for displaying troop images
const TroopImage = ({ type }) => (
  <img
    src={`${process.env.PUBLIC_URL}/images/${type.toLowerCase()}.png`}
    alt={type}
    className="w-8 h-8 object-contain"
  />
);

const FrostfireMine = () => {
  const [activeTab, setActiveTab] = useState('introduction'); // Default to 'Introduction' tab

  return (
    <div className="p-4 bg-white rounded-lg shadow relative">
      {/* Tabs for Switching between sections */}
      <div className="flex mb-4 space-x-2">
        <button
          onClick={() => setActiveTab('introduction')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'introduction' ? 'bg-blue-200' : 'bg-gray-200'}`}
        >
          Introduction
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'skills' ? 'bg-blue-200' : 'bg-gray-200'}`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveTab('strategy')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'strategy' ? 'bg-blue-200' : 'bg-gray-200'}`}
        >
          Strategy
        </button>
      </div>

      {/* Content based on selected tab */}
      {activeTab === 'introduction' && (
        <section className="mb-6 bg-blue-50 p-3 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Introduction</h3>
          <p className="mb-2">
            In the Frostfire Mine event, the goal is to gather the highest amount of orichalcum. Focus on strategic gameplay to maximize your points.
          </p>
          <p className="mb-2">
            There are two main ways to gather orichalcum: by gathering veins in level 1-3 areas and by occupying the smelter. This guide will show how to maximize your points beyond gathering.
          </p>
          <div className="mb-6 bg-green-50 p-3 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Important Tips</h3>
            <ul className="list-disc pl-5">
              <li>Stay on the outskirts of the battlefield to find more patrol guards and avoid crowded areas.</li>
              <li>Use free advanced teleport to reposition strategically.</li>
              <li>Watch for veins occupied by other players to loot them when possible.</li>
              <li>During vein outbursts, allocate all your marches to veins and stop attacking guards.</li>
              <li>Continue killing patrol guards but reserve one march to occupy and recall from veins every minute.</li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === 'skills' && (
        <section className="mb-6 bg-yellow-50 p-3 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Skills to Unlock</h3>
          <p className="mb-2">
            Unlocking the right skills will be key to dominating Frostfire Mine.
          </p>

          {/* Skill Tree Image */}
          <div className="my-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/skillTree.png`}
            alt="Skill Tree"
            className="w-full rounded-lg shadow-lg"  
          />
            {/* <img src="/skillTree.png" alt="Skill Tree" className="w-full rounded-lg shadow-lg" /> */}
          </div>

          {/* Skill Descriptions with Highlights */}
          <div className="bg-white p-4 rounded shadow-inner mt-4">
            <h4 className="font-semibold mb-2">1st Skill - Right Branch</h4>
            <p>Unlock this skill to get 1500 orichalcum for each patrol guard defeated.</p>

            <h4 className="font-semibold mt-4 mb-2">2nd Skill - Right Branch</h4>
            <p>This skill increases your march speed by 25%. Keep defeating patrol guards!</p>

            <h4 className="font-semibold mt-4 mb-2">3rd Skill - Left Branch</h4>
            <p>Once unlocked, you can gather 5000 orichalcum for each vein occupied. Use it once per minute.</p>

            <h4 className="font-semibold mt-4 mb-2">4th Skill - Left Branch</h4>
            <p>This skill provides a 15% boost to gathering speed. Keep defeating patrol guards and use one march every minute to gather/recall in a vein.</p>

            <h4 className="font-semibold mt-4 mb-2">5th Skill - Right Branch</h4>
            <p>Use this skill during vein outbursts to get a 66% gathering speed boost. Activate before sending troops and do not recall until the 5-minute timer is up.</p>
          </div>
        </section>
      )}

      {activeTab === 'strategy' && (
        <section className="mb-6 bg-red-50 p-3 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Strategy</h3>
          <p className="mb-2">
            Start by staying in the outskirts of the battlefield where fewer players are found. Focus on patrol guards as your main target early on and do not gather veins until you unlock the third skill.
          </p>
          <p className="mb-2">
            Once you've unlocked the 3rd skill, occupy veins every minute, recall your march, and continue defeating patrol guards. Use the event timer to track when the third skill becomes available.
          </p>
          <p className="mb-2">
            During vein outbursts, use the 5th skill and switch all your marches to veins for 5 minutes to maximize orichalcum gathering.
          </p>

          <div className="bg-gray-100 p-4 rounded shadow-inner mt-4">
            <h4 className="font-semibold mb-2">Final Strategy Tips</h4>
            <ul className="list-disc pl-5">
              <li>Use teleportation to move between less crowded areas and kill more patrol guards.</li>
              <li>Activate the 3rd skill every minute by recalling your troops from veins.</li>
              <li>Use the 5th skill during vein outbursts and gather without recalling for 5 minutes.</li>
              <li>Keep an eye on occupied veins to loot from other players when possible.</li>
            </ul>
          </div>

          {/* Troop Formation */}
          <div className="flex justify-around items-center bg-gray-200 p-4 rounded-lg mt-4 border border-gray-300" style={{ maxWidth: '88%' }}>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold mb-1">Infantry</span>
               <TroopImage type="Infantry" />
              <span className="mt-1 font-semibold">33%</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold mb-1">Lancer</span>
              <TroopImage type="Lancer" />
              <span className="mt-1 font-semibold">33%</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold mb-1">Marksman</span>
              <TroopImage type="Marksman" />
              <span className="mt-1 font-semibold">33%</span>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-blue-50 p-4 rounded shadow-inner mt-4">
            <h4 className="font-semibold mb-2">Success Stories</h4>
            <p><strong>My furnace was level 24,</strong> but I ranked 1 in this event, beating level 30 players using this strategy.</p>
            <p><strong>Another level 28 player</strong> used this same strategy and outranked crystal furnace players!</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default FrostfireMine;
