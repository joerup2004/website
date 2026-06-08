import React from 'react';
import Image from 'next/image';
import Socials from './socials';

export default function About() {
  return (
    <div className="overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 py-4 md:py-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-[90%] md:w-[80%] mx-auto">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/about/aboutpic.JPG"
                alt="A portrait of me"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 px-4 md:px-0">
            <div className="space-y-2">
              <h1 className="text-xl md:text-3xl font-semibold font-literata text-gray-900 dark:text-white">
                Hello 👋
              </h1>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  I grew up in South Jersey in the Philly area
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  I love running and exploring new places
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  I also like photography and making videos
                </p>
              </div>
            </div>
            <div className="pt-5 md:pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                <i>Currently in Princeton, NJ 🐯</i>
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-3">
                <b>Let's connect ⬇️</b>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 max-w-2xl mx-auto">
          <div className="pt-5 md:pt-4">
            <Socials size="large" branded />
          </div>
        </div>
      </div>
    </div>
  );
}