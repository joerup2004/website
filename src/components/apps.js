import AppLink from './applink';
import Link from 'next/link';

export default function Apps({ apps }) {
  return (
    <div className="container mx-auto text-center pt-0 md:pt-8">
      <div className="max-w-2xl xl:max-w-5xl mx-auto px-0 md:px-4 lg:px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 xl:gap-8 space-y-0 md:space-y-0 pb-0 md:pb-4">
          {apps.map((app, idx) => {
            const isLastOdd = idx === apps.length - 1 && apps.length % 2 !== 0;
            const isLast = idx === apps.length - 1;
            return (
              <div
                key={app.id}
                className={`${isLastOdd ? 'xl:col-span-2' : ''}`}
              >
                <div className={`${isLastOdd ? 'mx-auto w-full xl:w-1/2' : 'w-full'} px-0 md:px-0`}>
                  <div className={`rounded-none md:rounded-xl ${isLast ? '' : 'border-b border-gray-200 dark:border-gray-700'} md:border-0`}>
                    <AppLink app={app} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
      <div className="block md:hidden border-b border-gray-200 dark:border-gray-700"></div>
    </div>
  );
} 