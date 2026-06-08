import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import rolesData from '../../data/roles.json'

export default function Experience() {
  return (
    <section>
      <div className="container mx-auto text-center max-w-2xl xl:max-w-4xl">
        <div className="p-0 md:p-4 px-0 md:px-4 lg:px-6">
          <ol className="space-y-0 md:space-y-4 border-t border-b border-gray-200 dark:border-gray-700 md:border-0">
            {rolesData.map((role, index) => (
              <li
                key={role.id}
                className="text-left"
              >
                <Link
                  href={`/experience/${role.id}`}
                  className={`block pt-4 pb-5 md:py-6 px-0 md:px-6 rounded-none md:rounded-xl shadow-none md:shadow-sm border-b border-zinc-200 dark:border-gray-600 md:border cursor-pointer bg-white dark:bg-[#18202F] ${index === rolesData.length - 1 ? 'border-b-0' : ''}`}
                >
                  <div className="flex items-start gap-4 px-4 md:px-0">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-14 md:h-14 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-md mt-1 md:mt-0">
                        <Image
                          src={`/images/experience/${role.icon}`}
                          alt={`${role.company} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col md:flex-row items-start justify-between gap-2 md:gap-4">
                      <div className="w-full md:w-auto">
                        <h5 className="text-base md:text-xl font-semibold font-literata text-gray-900 dark:text-white mb-0.5">
                          {role.position}
                        </h5>
                        <div className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                          {role.company}
                        </div>
                      </div>
                      <div className="w-full md:w-auto text-left md:text-right">
                        <div className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                          {role.startDate} - {role.endDate}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 -mb-1 md:mb-0">
                          {role.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
