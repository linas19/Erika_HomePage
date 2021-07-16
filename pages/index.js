import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React from 'react'
import NavBar from '../components/NavBar/NavBar.js'
import FirstSection from './homePage/firstSection/FirstSection.js'
import ThreePointsSection from './homePage/threePointSection/ThreePointsSection.js'
import HiSection from './homePage/hiSection/HiSection.js'
import TechnologyShouldSection from './homePage/technologyShouldSection/TechnologyShouldSection.js'
import AlexSection from './homePage/alexSection/AlexSection.js'
import MagicSection from './homePage/magicSection/MagicSection.js'
import CompetitionSection from './homePage/competitionSection/CompetitionSection.js'
import FormSection from './homePage/formSection/FormSection.js'
import Footer from '../components/Footer/Footer.js'

export default function Home() {

  const bottomRef = React.useRef();
  const scrollToContact = () => {
    bottomRef.current.scrollIntoView();
  }
  return (
    
    <div className={styles.container}>
      <Head>
        <title>JONIKA</title>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <body>
        <section className={styles.firstSection}>
          <NavBar getIn={true}/>
          <FirstSection scrollToContact={scrollToContact}/>
        </section>
        <ThreePointsSection />
        <section className={styles.technologyShouldSection}>
          <TechnologyShouldSection />
        </section>
        <section className={styles.hiSection}>
          <HiSection />
        </section>
        <section className={styles.alexSection}>
          <AlexSection />
        </section>
        <section className={styles.magicSection}>
          <MagicSection />
        </section>
        <section className={styles.competitionSection}>
          <CompetitionSection />
        </section>
        <section className={styles.formSection} ref={bottomRef}>
          <FormSection />
        </section>
        <Footer />
      </body>
    </div>
  )
}
