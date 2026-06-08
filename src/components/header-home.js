import { useState, useEffect } from 'react';
import ThemeToggle from './theme-toggle';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useActiveSection } from '../context/ActiveSectionContext';
import Head from 'next/head';

export default function HeaderHome() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const isResearchPage = router.pathname === '/research/[id]';
  const isExperiencePage = router.pathname === '/experience/[id]';
  const { activeSection } = isHomePage ? useActiveSection() : { activeSection: null };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation with offset
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 60;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'auto'
        });
      }
    }
  }, [isHomePage]);

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      // First navigate to home page
      router.push('/');
      
      // Create a handler function that we can reference for cleanup
      const handleRouteChange = () => {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            const headerOffset = 60;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);

        // Remove this listener after it's been used
        router.events.off('routeChangeComplete', handleRouteChange);
      };

      // Add the event listener
      router.events.on('routeChangeComplete', handleRouteChange);
      return;
    }

    // If we're already on the home page, just scroll
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 60;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getButtonClasses = (sectionId) => {
    return "font-literata font-bold text-emerald-600 hover:scale-105 transition-all duration-300 relative";
  };

  const getUnderlineClasses = (sectionId) => {
    const baseClasses = "absolute -bottom-1 left-0 w-full h-0.5 rounded-full transform scale-x-0 transition-transform duration-300 bg-emerald-600";
    const shouldShowUnderline = (isHomePage && activeSection === sectionId) ||
                                 (isResearchPage && sectionId === 'research') ||
                                 (isExperiencePage && sectionId === 'experience');
    return `${baseClasses} ${shouldShowUnderline ? 'scale-x-100' : ''}`;
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap" rel="stylesheet"/>
      </Head>
      <header className={`relative md:fixed top-0 left-0 right-0 z-50 md:transition-all md:duration-300 ${
        isScrolled ? 'md:bg-white/80 md:dark:bg-gray-900/80 md:backdrop-blur-md md:shadow-sm' : ''
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="hidden md:block w-40">
              <Link href="/">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (isHomePage) {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    } else {
                      router.push('/');
                    }
                  }}
                  className="text-xl font-literata font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-200 hover:scale-105 transform whitespace-nowrap relative"
                >
                  Joe Rupertus
                  <div className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full transform transition-transform duration-300 ${isHomePage && !activeSection ? 'scale-x-100' : 'scale-x-0'}`}></div>
                </button>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex space-x-8">
                <button
                  onClick={() => scrollToSection('apps')}
                  className={getButtonClasses('apps')}
                >
                  Apps
                  <div className={getUnderlineClasses('apps')} />
                </button>
                <button
                  onClick={() => scrollToSection('research')}
                  className={getButtonClasses('research')}
                >
                  Research
                  <div className={getUnderlineClasses('research')} />
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className={getButtonClasses('about')}
                >
                  About
                  <div className={getUnderlineClasses('about')} />
                </button>
              </div>
            </nav>

            {/* Theme Toggle */}
            <div className="w-full md:w-auto lg:w-40 flex justify-between md:justify-end lg:justify-end">
              {/* Mobile Home Button */}
              <Link href="/" className="md:hidden p-2">
                <button
                  onClick={() => {
                    if (isHomePage) {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    } else {
                      router.push('/');
                    }
                  }}
                  className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 mt-1.5"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
                  </svg>
                </button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
} 