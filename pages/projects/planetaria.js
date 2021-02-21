import Layout from '../../components/layout'
import Head from 'next/head'
import styles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function Planetaria() {
  return (
    <Layout bottom>
      <Head>
        <title>Planetaria</title>
      </Head>

        <div className={styles.projectHeader}>
          <img src="/images/PlanetariaClear.png"/>
          <h1 className={styles.headingLg}>Planetaria</h1>
        </div>

        <Link href="/">
          <a>← Back to home</a>
        </Link>

        <p className={styles.projectText}>
          There is so much to explore in space: from the smallest comets that orbit the Sun every couple thousand years, to the planets that crown the Solar System, and the enormous stars seen from hundreds of light years away. Planetaria is a cumulative catalog of the astronomical objects in the Solar System and the Galaxy. Explore our local objects: the Sun, the eight planets, the dwarf planets, over two hundred moons, as well as small bodies like asteroids and comets. And now, explore beyond our system to find hundreds of stars and exoplanets waiting for discovery. See their stories, their beauty, their characteristics, and their impact. The universe is waiting to be explored with Planetaria.
        </p>

        <div className={styles.projectLinks}>
          <Link href="https://apps.apple.com/is/app/planetaria/id1546887479">
            <div>
              <h1>iOS App</h1>
            </div>
          </Link>
          <Link href="https://planetaria.app">
            <div>
              <h1>Website</h1>
            </div>
          </Link>
        </div>

    </Layout>
  )
}

