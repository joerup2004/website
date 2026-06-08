import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout-home';
import { getSortedAppsData } from '/lib/apps';
import Socials from '../components/socials';
import Projects from '../components/projects';
import Research from '../components/research';
import Apps from '../components/apps';
import highlights from '../../data/highlights.json';
import { useEffect, useRef, useState } from 'react';
import { useActiveSection } from '../context/ActiveSectionContext';
import { ActiveSectionProvider } from '../context/ActiveSectionContext';
import Image from 'next/image';

export async function getStaticProps() {
  const apps = getSortedAppsData();
  const bioMarkdown = fs.readFileSync(path.join(process.cwd(), 'data', 'bio.md'), 'utf8');
  const aboutMarkdown = fs.readFileSync(path.join(process.cwd(), 'data', 'about.md'), 'utf8');
  const location = fs.readFileSync(path.join(process.cwd(), 'data', 'location.md'), 'utf8').trim();
  const bio = (await remark().use(html).process(bioMarkdown)).toString();
  const about = (await remark().use(html).process(aboutMarkdown)).toString();
  return {
    props: {
      apps,
      bio,
      about,
      location,
    },
  };
}

function HomeContent({ apps, bio, about, location }) {
  const sections = useRef([]);
  const { setActiveSection, activeSection } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections
      const sectionElements = sections.current.filter(Boolean);
      
      // Only proceed if we have sections
      if (sectionElements.length === 0) return;
      
      const viewportCenter = window.innerHeight / 2;
      
      // Find the section whose center is closest to the viewport center
      const mostCenteredSection = sectionElements.reduce((best, current) => {
        const rect = current.getBoundingClientRect();
        const currentCenter = rect.top + (rect.height / 2);
        const currentDistance = Math.abs(currentCenter - viewportCenter);
        
        const bestRect = best.getBoundingClientRect();
        const bestCenter = bestRect.top + (bestRect.height / 2);
        const bestDistance = Math.abs(bestCenter - viewportCenter);
        
        return currentDistance < bestDistance ? current : best;
      });

      // get the hero section's position
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroCenter = heroRect.top + (heroRect.height / 2);
        const heroDistance = Math.abs(heroCenter - viewportCenter);

        // If hero section is more centered than any other section, don't select any section
        if (heroDistance < Math.abs(mostCenteredSection.getBoundingClientRect().top + (mostCenteredSection.getBoundingClientRect().height / 2) - viewportCenter)) {
          setActiveSection(null);
          return;
        }
      }

      // Set the active section
      setActiveSection(mostCenteredSection.id);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const getUnderlineClasses = (sectionId) => {
    return "w-16 md:w-20 lg:w-24 h-0.5 md:h-1 mt-2 rounded-full transform scale-x-0 bg-emerald-600";
  };

  const getTitleClasses = (sectionId) => {
    return "text-base md:text-3xl lg:text-3xl font-bold text-center font-literata tracking-tight md:pt-12 text-gray-900 dark:text-white";
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 60; // Height of the header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout home apps={apps}>
      <Head>
        <title>{siteTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-b from-[#DBFFF7] to-white dark:bg-gradient-to-b dark:from-[#0A2F2D] dark:to-gray-900 pt-4 md:pt-16 lg:pt-24 pb-8 px-4 -mt-20 pt-20">
        <div className="container mx-auto text-center pt-16 md:pt-32">
          <div className="flex flex-col items-center space-y-4 lg:space-y-6">
            <img
              src="/images/Profile.png"
              alt="Profile"
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full shadow-2xl"
            />
            <h1 className="text-xl md:text-2xl lg:text-5xl font-literata font-bold text-gray-900 dark:text-white tracking-tight mb-2 md:mb-4">
              Joe Rupertus
            </h1>
            <div
              className="bio text-xs md:text-base lg:text-lg font-literata font-normal text-gray-600 dark:text-gray-300 max-w-2xl pt-3 md:pt-4 pb-6 md:pb-10"
              dangerouslySetInnerHTML={{ __html: bio }}
            />
            <style jsx global>{`
              .bio p + p {
                margin-top: 1em;
              }
              .bio a {
                color: #059669;
                text-decoration: underline;
              }
              .bio a:hover {
                color: #047857;
              }
            `}</style>
            <div className="pt-2 pb-8 md:pb-12">
              <Socials/>
            </div>
            <style jsx>{`
              @keyframes shimmer {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
            `}</style>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 pt-4 md:pt-8 pb-0 md:pb-8 w-full max-w-5xl md:px-8 lg:px-12">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#40E0D0]/5 to-[#20B2AA]/5 dark:from-[#40E0D0]/8 dark:to-[#20B2AA]/8 p-4 md:p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0]/3 to-[#20B2AA]/3 dark:from-[#40E0D0]/5 dark:to-[#20B2AA]/5 backdrop-blur-sm"></div>
                  <div className="relative">
                    <div className="flex flex-col items-center text-center mb-2 md:mb-4">
                      <h3 className="text-base md:text-xl font-semibold font-literata text-gray-900 dark:text-white">{highlight.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-800 dark:text-gray-100 font-medium leading-relaxed text-center">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Apps Portfolio Section */}
      <section
        id="apps"
        ref={el => sections.current[0] = el}
        className="border-t border-gray-200 dark:border-gray-700 md:border-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 md:bg-none md:bg-gray-50 dark:md:bg-gray-800 pt-12 md:pt-0 pb-0 md:pb-16"
      >
        <div className="container mx-auto">
          <div 
            className="flex flex-col items-center mb-3 md:mb-6 transition-all duration-300 cursor-pointer"
            onClick={() => scrollToSection('apps')}
          >
            <h2 className={getTitleClasses('apps')}>
              Apps
            </h2>
            <div className={getUnderlineClasses('apps')} />
          </div>
          <Apps apps={apps} />
        </div>
      </section>

      {/* Research Section */}
      <section
        id="research"
        ref={el => sections.current[1] = el}
        className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 md:bg-none md:bg-white dark:md:bg-gray-900 pt-12 md:pt-0 pb-0 md:pb-16"
      >
        <div className="container mx-auto">
          <div 
            className="flex flex-col items-center mb-3 md:mb-6 transition-all duration-300 cursor-pointer"
            onClick={() => scrollToSection('research')}
          >
            <h2 className={getTitleClasses('research')}>
              Research
            </h2>
            <div className={getUnderlineClasses('research')} />
          </div>
          <Research />
        </div>
      </section>

      {/* About Section */}
      <section
        ref={el => sections.current[2] = el}
        id="about"
        className="pt-12 md:pt-0 pb-0 md:pb-16 bg-gray-50 dark:bg-gray-800"
      >
        <div>
          <div
            className="flex flex-col items-center mb-3 md:mb-6 transition-all duration-300 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <h2 className={getTitleClasses('about')}>
              About
            </h2>
            <div className={getUnderlineClasses('about')} />
          </div>
          <div className="container mx-auto text-center max-w-2xl xl:max-w-3xl px-4 md:px-6">
            <div
              className="bio text-xs md:text-base lg:text-lg font-literata font-normal text-gray-600 dark:text-gray-300 text-center py-3 md:py-4"
              dangerouslySetInnerHTML={{ __html: about }}
            />
          </div>
          <div className="mt-8 md:mt-12 grid grid-cols-10 gap-3 md:gap-4 items-center max-w-5xl mx-auto px-4 md:px-6">
            <img
              src="/images/about/miami.jpeg"
              alt="Land's End"
              className="col-span-3 w-full aspect-square object-cover rounded-2xl shadow-lg"
            />
            <img
              src="/images/about/tiger.JPG"
              alt="Tiger"
              className="col-span-4 w-full aspect-square object-cover rounded-2xl shadow-xl"
            />
            <img
              src="/images/about/japan.JPG"
              alt="A portrait of me"
              className="col-span-3 w-full aspect-square object-cover rounded-2xl shadow-lg"
            />
          </div>
          <p className="text-xs md:text-base lg:text-lg font-literata font-normal text-center text-gray-600 dark:text-gray-300 mt-10 md:mt-14">
            {location}
          </p>
          <div className="block md:hidden border-b border-gray-200 dark:border-gray-700 mt-12"></div>
        </div>
      </section>
    </Layout>
  );
}

export default function Home(props) {
  return (
    <ActiveSectionProvider>
      <HomeContent {...props} />
    </ActiveSectionProvider>
  );
}

