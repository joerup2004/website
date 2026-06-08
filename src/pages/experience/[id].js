import { useRouter } from 'next/router';
import Layout from '../../components/layout-home';
import rolesData from '../../../data/roles.json';
import { getSortedAppsData } from '../../../lib/apps';
import Image from 'next/image';

export async function getStaticPaths() {
  const paths = rolesData.map((role) => ({
    params: { id: role.id.toString() },
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

export default function ExperienceRole({ apps }) {
  const router = useRouter();
  const { id } = router.query;
  const role = rolesData.find(r => r.id.toString() === id);

  if (!role) {
    return (
      <Layout apps={apps}>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-semibold font-literata">Role not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout apps={apps}>
      <div className="container mx-auto px-4 md:py-16 max-w-4xl md:pt-24">
        {/* Header with Company Logo */}
        <div className="flex flex-col items-center md:flex-row md:items-start gap-4 mb-3 md:mb-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 md:w-[72px] md:h-[72px] mt-[1px] relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-md">
              <Image
                src={`/images/experience/${role.icon}`}
                alt={`${role.company} logo`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-xl md:text-3xl font-semibold mb-1 text-gray-900 dark:text-white font-literata">
              {role.position}
            </h1>
            <div className="text-lg md:text-lg font-semibold text-gray-700 dark:text-gray-300 md:mb-2">
              {role.company}
            </div>
          </div>
        </div>

        {/* Date and Location */}
        <div className="mb-4 md:mb-6 space-y-3 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-1 md:gap-x-2 text-base text-gray-500 dark:text-gray-400">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {role.startDate} - {role.endDate}
            </span>
            {role.location && (
              <>
                <span className="hidden md:inline">•</span>
                <span>{role.location}</span>
              </>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h2 className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 mb-2 font-literata">Overview</h2>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {role.description}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
