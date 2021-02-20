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

      <section className={styles.headingMd}>
        <p>Hello my friends. Welcome to the website.</p>
      </section>

      {/* <section>
        <button className={viewCategory == "all" ? styles.selectedbutton : styles.button} onClick={() => setCategory('all')}>All</button>
        <button className={viewCategory == "apps" ? styles.selectedbutton : styles.button} onClick={() => setCategory(viewCategory === 'apps' ? 'all' : 'apps')}>Apps</button>
        <button className={viewCategory == "space" ? styles.selectedbutton : styles.button} onClick={() => setCategory(viewCategory === 'space' ? 'all' : 'space')}>Space</button>
      </section> */}

      <section className={`${styles.headingMd}`}>
        <h2 className={styles.headingLg}>Posts</h2>
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
      </section>
    </Layout>
  )
}