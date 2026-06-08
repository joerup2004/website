import { useRouter } from 'next/router';
import Layout from '../../components/layout-home';
import researchData from '../../../data/research.json';
import { getSortedAppsData } from '../../../lib/apps';

export async function getStaticPaths() {
  const paths = researchData.map((project) => ({
    params: { id: project.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const apps = getSortedAppsData();
  return {
    props: {
      apps,
    },
  };
}

export default function ResearchProject({ apps }) {
  const router = useRouter();
  const { id } = router.query;
  const project = researchData.find(p => p.id === id);
  if (!project) {
    return (
      <Layout apps={apps}>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Project not found</h1>
        </div>
      </Layout>
    );
  }
  return (
    <Layout apps={apps}>
      <div className="container mx-auto px-4 md:py-16 max-w-4xl md:pt-24">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4 text-gray-900 dark:text-white font-literata">
          {project.title}
        </h1>

        {/* Authors */}
        <div className="mb-3 md:mb-4">
          <p className="text-base md:text-lg font-literata text-gray-700 dark:text-gray-200 font-medium">
            {project.authors.join(', ')}
          </p>
        </div>

        {/* Institution and Conference */}
        <div className="mb-6 md:mb-8 space-y-3">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 text-sm font-medium border border-orange-200 dark:border-orange-800"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-medium text-gray-600 dark:text-gray-300">{project.institution}</span>
            {project.date && (
              <>
                <span className="hidden sm:inline">•</span>
                <span>{new Date(project.date + 'T00:00:00Z').toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  timeZone: 'UTC'
                })}</span>
              </>
            )}
          </div>
        </div>

        {/* Abstract */}
        <div className="mb-8">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h2 className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 mb-2 font-literata">Abstract</h2>
            <p className="text-xs md:text-sm font-literata text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.abstract}
            </p>
          </div>
        </div>

        {/* PDF and Publication/Video Links */}
        <div className="flex flex-wrap gap-4">
          {project.pdf && (
            <a
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-semibold">View Paper</span>
            </a>
          )}
          {project.publication && (
            <a
              href={project.publication}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            >
              <span className="font-semibold">View Publication</span>
              <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Watch Video</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="font-semibold">View on GitHub</span>
            </a>
          )}
        </div>
      </div>
    </Layout>
  );
} 