import projectsData from '../../data/projects.json'

export default function Projects() {
  return (
    <section>
      <div className="container mx-auto text-center max-w-2xl xl:max-w-4xl sm:pb-10">
        <div className="rounded-2xl bg-gradient-to-br from-zinc-50 dark:from-gray-800 to-white dark:to-gray-900 p-6 shadow-sm">
          <ol className="space-y-3">
            {projectsData.map((project, index) => (
              <li key={project.id}>
                <a
                  href={project.link}
                  className="block group hover:bg-zinc-50/80 dark:hover:bg-gray-700/80 p-3 -mx-2 rounded-xl transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <svg 
                        className="w-4 h-4 text-zinc-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-gray-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 text-xs rounded-md bg-zinc-100 dark:bg-gray-700 text-zinc-600 dark:text-gray-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}