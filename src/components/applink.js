import React from 'react';
import Link from 'next/link';

export default function AppLink({ app }) {
  return (
    <Link href={`./${app.string}`}>
      <div
        className="group cursor-pointer rounded-none md:rounded-xl bg-white border-0 md:border-2"
        style={{
          background: `linear-gradient(to bottom right, #${app.color}33, #${app.color}22)`,
          borderColor: `#${app.color}22`
        }}
      >
        <div className="mx-auto flex flex-col py-5 md:py-6 px-4 md:px-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 mb-3.5 md:mb-4">
              <img
                className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl shadow-md"
                src={`/images/${app.string}/icon.png`}
                alt={`${app.name} Icon`}
              />
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-base md:text-lg lg:text-xl font-medium font-literata text-gray-900 dark:text-white mb-1 md:mb-1.5">
                  {app.name}
                </h2>
                <div className="flex gap-2 text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
                  <span>{app.platforms.join(', ')}</span>
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm lg:text-base font-literata text-gray-600 dark:text-gray-300 mb-3.5 md:mb-4">
              {app.desc}
            </p>
            <div className={`flex items-center w-full ${app.comingsoon ? 'justify-center' : 'justify-end'} text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400`}>
              {app.comingsoon ? (
                <span className="bg-red-400 text-white px-2 rounded-full">COMING SOON</span>
              ) : (
                <React.Fragment>
                  <span className="hidden md:inline group-hover:underline">Learn more</span>
                  <svg className="hidden md:inline w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
