import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image.js'
import React from 'react'
import { faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Link from 'next/link'
import NavBar from './components/NavBar/NavBar.js'
import FirstSection from './homePage/firstSection/FirstSection.js'
import ThreePointsSection from './homePage/threePointSection/ThreePointsSection.js'
import HiSection from './homePage/hiSection/HiSection.js'
import TechnologyShouldSection from './homePage/technologyShouldSection/TechnologyShouldSection.js'
import AlexSection from './homePage/alexSection/AlexSection.js'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const bottomRef = React.useRef();

  const onClick = () => {
  bottomRef.current.scrollIntoView();
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      message
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    })
  }
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Erika pag</title>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <body>
        <section className={styles.firstSection}>
          <NavBar />
          <FirstSection />
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
        {/* <div className={styles.fourthPage}>
          <div className={styles.fourthPageTitle}>How the magic happens:</div>
          <div className={styles.fourthPageBottom}>
            <div className={styles.fourthPagePoints}>
              <div className={styles.fourthPagePointNumber}>1.</div>
              <div className={styles.fourthPagePointSquare}></div>
              <div className={styles.fourthPagePointNumber}>2.</div>
              <div className={styles.fourthPagePointSquare}></div>
              <div className={styles.fourthPagePointNumber}>3.</div>
            </div>
            <div className={styles.fourthPagePointText}>
              <div className={styles.fourthPagePointTextBox}>
                <div className={styles.fourthPagePointTextTitle}>Let's chat</div>
                <div className={styles.fourthPagePointTextText}>It all starts with a small first step - getting in touch</div>
              </div>
              <div className={styles.fourthPagePointTextBox}>
                <div className={styles.fourthPagePointTextTitle}>Prep and plan</div>
                <div className={styles.fourthPagePointTextText}>Every project has its own needs. I will work with you to understand your unique requirements and expectations before we agree on a plan of action</div>
              </div>
              <div className={styles.fourthPagePointTextBox}>
                <div className={styles.fourthPagePointTextTitle}>Let’s get it done</div>
                <div className={styles.fourthPagePointTextText}>I will work alongside your existing team or bring together a group of trusted freelancers to realise your idea on budget and on time</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fifthPage}>
          <div className={styles.fifthPageLeft}>
            <div className={styles.fifthPageLeftTitle}>
              Don’t let your competition beat you to market
            </div>
            <button className={styles.getInTouchButton} onClick={onClick}>GET IN TOUCH</button>
          </div>
          <div className={styles.fifthPageRight}>
            <Image src='/example-scene-2.png' width={544} height={519} alt='Image2'/>
          </div>
        </div>
        <div className={styles.sixthPage} ref={bottomRef}>
          <div className={styles.sixthPageLeft}>
            <div className={styles.sixthPageLeftText}>Let’s get your idea from
            notepad to launchpad</div>
            <div className={styles.sixthPageLeftImage}>
            <Image src='/launch.png' width={787.21} height={571} alt='Image2'/>
            </div>
          </div>
            <form className={styles.sixthPageRight}>
              <input className={styles.sixthPageRightTopBox} type='text' placeholder='What should I call you?'  onChange={(e)=>{setName(e.target.value)}} name='name'/>
              <input className={styles.sixthPageRightTopBox} type='text' placeholder='What’s your email?'  onChange={(e)=>{setEmail(e.target.value)}} name='email'/>
              <textarea className={styles.sixthPageRightBottomBox} type='text' placeholder='Let me know about the awesome product you have - what is it about? What type help are you looking for?' onChange={(e)=>{setMessage(e.target.value)}} name='message'/>
              <input className={styles.submit} type='submit' value='Send' onClick={(e)=>{handleSubmit(e)}}/>
            </form>

        </div>
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <div className={styles.footerLeftTitle}>JONIKA</div>
            <div className={styles.footerLeftButtons}>
              <Link href='https://www.instagram.com/'>
                <FontAwesomeIcon icon={faInstagram} height='30px'/>
              </Link>
              <Link href='https://www.linkedin.com/'>
                <FontAwesomeIcon icon={faLinkedinIn} height='30px'/>
              </Link>
              <Link href='https://www.twitter.com/'>
                <FontAwesomeIcon icon={faTwitter} height='30px'/>
              </Link>
            </div>
            <div className={styles.footerLeftEmail}>
              <Link href='https://hello@jonika.io/'>
                hello@jonika.io
              </Link>
            </div>
            <div className={styles.footerLeftAddress}>
              <div>86 - 90 Paul Street</div>
              <div>London</div>
              <div>EC2 4NE</div>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerLeftLink}>
              <Link href='https://hello@jonika.io/'>
                Terms and Conditions
              </Link>
            </div>
            <div className={styles.footerLeftLink}>
              <Link href='https://hello@jonika.io/'>
                Privacy Policy
              </Link>
            </div>
            <div className={styles.footerLeftLink}>
              <Link href='https://hello@jonika.io/'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div> */}
      </body>
      <main className={styles.main}>

      </main>

    </div>
  )
}
