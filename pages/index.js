import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { useState } from "react"
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) { 
  // Delcare what category should be shown
  const [viewCategory, setCategory] = useState('all');

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.intro}>
        <p>
          Hello my friends. Welcome to my personal website. This is where you can find all of my projects and posts. Have fun :)
        </p>
      </section>

      {/* <section>
        <button className={viewCategory == "all" ? styles.selectedbutton : styles.button} onClick={() => setCategory('all')}>All</button>
        <button className={viewCategory == "apps" ? styles.selectedbutton : styles.button} onClick={() => setCategory(viewCategory === 'apps' ? 'all' : 'apps')}>Apps</button>
        <button className={viewCategory == "space" ? styles.selectedbutton : styles.button} onClick={() => setCategory(viewCategory === 'space' ? 'all' : 'space')}>Space</button>
      </section> */}

      <h2 className={styles.sectionhead}>Stuff</h2>
      <div className={styles.projectTable}>
        <div className={styles.projectItem}>
          <Link href="/projects/planetaria">
            <div>
              <img src='/images/Planetaria.png'/>
              <h1>Planetaria</h1>
            </div>
          </Link>
        </div>
        <div className={styles.projectItem}>
          <Link href="/projects/omegacalc">
            <div>
              <img src='/images/Omega_Classic_Blue.png'/>
              <h1>Omega Calculator</h1>
            </div>
          </Link>
        </div>
      </div>

      <section className={styles.posts}>
        <div>
          <h2 className={styles.sectionhead}>Posts</h2>
          {allPostsData.map(({ id, category, subject, title, date, image, desc }) => (
            <li className={styles.listItem} key={id} style={{ 
              display: (viewCategory === category || viewCategory === 'all') ? "block":"none"
            }}>
              <Link href="/[category]/[id]" as={`/${category}/${id}`}>
                <a>
                  <div className={styles.horizontal}>
                    <div className={styles.image}>
                      <img src={image}/>
                    </div>
                    <div>
                      <h1>{`${category.toUpperCase()[0] + category.substr(1)} • ${subject}`}</h1>
                      <h2>{title}</h2>
                      <h3>{desc}</h3>
                      <h4><Date dateString={date}/></h4>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </div>
      </section>
    </Layout>
  )
}