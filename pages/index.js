import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.headingMd}>
        <p>Hello my friends. Welcome to the website.</p>
      </section>

      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Posts</h2>

        <ul className={styles.list}>
          {allPostsData.map(post => (
            <li className={styles.listItem} key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>
                  <div className={styles.horizontal}>
                    <div className={styles.image}>
                      <img src={post.image}/>
                    </div>
                    <div>
                      <h1>{post.subject}</h1>
                      <h2>{post.title}</h2>
                      <h3>{post.desc}</h3>
                      <h4>{post.date}</h4>
                    </div>
                  </div>
                </a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}