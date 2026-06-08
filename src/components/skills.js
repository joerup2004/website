import React from 'react';
import skillsData from '../../data/skills.json';

export default function Skills() {
  const { skills } = skillsData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 px-0 md:px-4 lg:px-6 border-t border-b border-gray-200 dark:border-gray-700 md:border-0">
      {skills.map((skillGroup, index) => (
        <div
          key={index}
          className={`bg-white dark:bg-[#18202F] px-0 md:px-6 py-3 md:py-6 rounded-none md:rounded-2xl border-b border-gray-200 dark:border-gray-700 md:border ${index === skills.length - 1 ? 'border-b-0' : ''}`}
        >
          <div className="flex items-center gap-3 pt-2 sm:pt-0 mb-4 px-4 md:px-0">
            <h3 className="text-base md:text-xl font-semibold font-literata text-gray-900 dark:text-white">
              {skillGroup.category}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2 px-4 md:px-0 pb-2">
            {skillGroup.items.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="px-2 py-1 rounded-md text-xs md:text-sm font-medium bg-gradient-to-r from-sky-500/10 to-blue-600/10 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 hover:from-sky-500/20 hover:to-blue-600/20 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}