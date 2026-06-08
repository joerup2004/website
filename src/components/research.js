import researchData from '../../data/research.json'
import Link from 'next/link'

export default function Research() {
  return (
    <section>
      <div className="container mx-auto text-center max-w-2xl xl:max-w-5xl">
        <div className="p-0 md:p-4 px-0 md:px-4 lg:px-6">
          <ol className="space-y-0 md:space-y-4 border-t border-b border-gray-200 dark:border-gray-700 md:border-0">
            {researchData.map((project, index) => (
              <li
                key={project.id}
                className="text-left"
              >
                <Link
                  href={`/research/${project.id}`}
                  className={`group block py-5 px-0 md:px-6 rounded-none md:rounded-xl shadow-none md:shadow-sm border-b border-zinc-200 dark:border-gray-600 md:border cursor-pointer ${index === researchData.length - 1 ? 'border-b-0' : ''} ${project.prominent ? 'bg-orange-50/50 dark:bg-amber-900/20 md:border-orange-200 dark:md:border-amber-800/50 md:shadow-md' : 'bg-white dark:bg-[#18202F]'}`}
                >
                  <div className="px-4 md:px-0">
                    <h3 className="text-xs md:text-base font-medium font-literata text-zinc-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-zinc-700 dark:text-gray-300 pt-1 pb-4">
                      {project.authors.join(', ')}
                      {project.date && (
                        <span className="text-zinc-500 dark:text-zinc-400 ml-1">
                          • {(new Date(project.date).getFullYear())}
                        </span>
                      )}
                    </p>
                    <div className="flex items-center justify-between gap-2">
                      {project.tags && project.tags.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <div
                              key={tagIndex}
                              className="inline-flex items-center px-2 py-0.5 md:px-2.5 md:py-1 rounded-md bg-orange-100 dark:bg-amber-900/40 text-orange-800 dark:text-amber-200 text-[10px] md:text-xs font-medium border border-orange-200 dark:border-amber-800"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                      ) : <div />}
                      <div className="hidden md:flex items-center text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 whitespace-nowrap">
                        <span className="group-hover:underline">Learn more</span>
                        <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                        </svg>
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
  )
}