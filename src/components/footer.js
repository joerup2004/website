import Link from 'next/link';
import Socials from './socials';

export default function Footer({ apps, app }) {
  return (
    <div className="relative">
      <footer className="relative flex flex-col lg:flex-row items-center px-4 py-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Profile Image and Socials */}
            <div className="flex flex-col lg:flex-row items-center gap-4 z-10 mb-4 lg:mb-0">
              <div className="hidden md:block">
                <Link href={'/'}>
                  <img
                    className={`h-12 w-12 rounded-full border-4 border-gray-600`}
                    src="/images/Profile.png"
                    alt="Profile Image"
                  />
                </Link>
              </div>
              <div className="hidden md:block lg:pl-4">
                {!app && (
                  <Socials size="small" />
                )}
              </div>
            </div>

            {/* Centered Text */}
            <div className="relative lg:absolute inset-x-0 text-center z-0">
              <div className="inline-block pb-8 md:pb-0">
                <p className={`text-[10px] md:text-sm text-gray-400`}>
                  Copyright © 2026 Joseph Rupertus
                </p>
                {app && (
                  <Link href={`/${app.string}/privacy`}>
                    <p className={`text-[10px] md:text-sm text-gray-400`}>
                      <u>Privacy Policy</u>
                    </p>
                  </Link>
                )}
              </div>
            </div>

            {/* App Icons */}
            <div className="hidden md:flex space-x-3 mt-4 lg:mt-0 lg:ml-auto z-10">
              {apps.map((app) => (
                <Link key={app.string} href={`/${app.string}/`}>
                  <img
                    className="h-10 w-10 rounded-lg"
                    src={`/images/${app.string}/icon.png`}
                    alt={`${app.name} Icon`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
