import Head from 'next/head';
import Layout from '../components/layout-home';
import { getSortedAppsData } from '/lib/apps';
import VersionCard from '../components/versioncard';
import { useState } from 'react';
import Image from 'next/image';

export default function Updates({ apps }) {
  const [selectedApps, setSelectedApps] = useState([]);
  const [collapsedYears, setCollapsedYears] = useState({});

  // Flatten and sort all versions
  const allVersions = apps
    .reduce((versions, app) => {
      const appVersions = app.versions?.map(version => ({
        ...version,
        app: app
      })) || [];
      return [...versions, ...appVersions];
    }, [])
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filter versions based on selected app
  const filteredVersions = selectedApps.length === 0
    ? allVersions 
    : allVersions.filter(version => selectedApps.includes(version.app.id));

  // Group versions by year
  const versionsByYear = filteredVersions.reduce((groups, version) => {
    // Create date object and adjust to local timezone
    const date = new Date(version.date + 'T00:00:00');
    const year = date.getFullYear();
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(version);
    return groups;
  }, {});

  const handleAppClick = (appId) => {
    setSelectedApps(prev => {
      if (prev.includes(appId)) {
        return prev.filter(id => id !== appId);
      }
      return [...prev, appId];
    });
  };

  const toggleYear = (year) => {
    setCollapsedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  return (
    <Layout apps={apps}>
      <Head>
        <title>App Updates - Joe Rupertus</title>
      </Head>

      <section className="px-4 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-literata font-bold text-gray-900 dark:text-white mb-8 md:mt-16">
            App Updates
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-12">
            {apps.map(app => (
              <button
                key={app.id}
                onClick={() => handleAppClick(app.id)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors font-semibold ${
                  selectedApps.includes(app.id)
                    ? 'bg-gray-300 dark:bg-gray-500 text-gray-800 dark:text-gray-200'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="relative w-5 h-5 flex-shrink-0">
                  <Image
                    src={`/images/${app.string}/icon.png`}
                    alt={`${app.name} icon`}
                    width={24}
                    height={24}
                    className="rounded"
                  />
                </div>
                {app.name}
              </button>
            ))}
          </div>
          
          <div className="space-y-12 mx-auto">
            {Object.entries(versionsByYear)
              .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
              .map(([year, versions]) => (
              <div key={year} className="space-y-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {year}
                  </h2>
                  <button
                    onClick={() => toggleYear(year)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  >
                    {collapsedYears[year] ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                </div>
                {!collapsedYears[year] && (
                  <div className="space-y-4">
                    {versions.map((version, index) => (
                      <VersionCard 
                        key={`${version.app.id}-${index}`}
                        app={version.app}
                        version={version}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const apps = getSortedAppsData();
  return {
    props: {
      apps,
    },
  };
} 