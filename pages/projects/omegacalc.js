import Layout from '../../components/layout'
import Head from 'next/head'
import styles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function OmegaCalc() {
  return (
    <Layout bottom>
      <Head>
        <title>Omega Calculator</title>
      </Head>

        <div className={styles.projectHeader}>
          <img src="/images/Omega_Classic_Blue.png"/>
          <h1 className={styles.headingLg}>Omega Calculator</h1>
        </div>

        <Link href="/">
          <a>← Back to home</a>
        </Link>

        <p className={styles.projectText}>
          Your everyday calculator with so many features:
          <br/>• Basic Calculator
          <br/>• Scientific Calculator
          <br/>• Store & Edit Calculations
          <br/>• Intuitive Interface
          <br/>• Solve Long Complicated Expressions
          <br/>• Display Settings & Calculation Preferences
          <br/>• Information Tab to Understand Button Functionality
          <br/>• 30+ User Themes
          <br/>Welcome to Omega Calculator        
       </p>

        <div className={styles.projectLinks}>
          <Link href="https://apps.apple.com/is/app/omega-calculator/id1528068503">
            <div>
              <h1>iOS App</h1>
            </div>
          </Link>
        </div>

    </Layout>
  )
}

