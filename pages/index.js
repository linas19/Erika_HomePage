import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image.js'
import { faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'

export default function Home() {
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
        <div className={styles.topLine}></div>
        <div className={styles.firstPage}>
          <div className={styles.firstPageLeftSide}>
            <div className={styles.title}>JONIKA</div>
            <div className={styles.firstImage}>
              <Image src='/example-scene-1.png' width={740} height={682} alt='Image1'/>
            </div>
          </div>
          <div className={styles.firstPageRightSide}>
            <nav className={styles.nav}>
              <button className={styles.navButton}>APPS</button>
              <button className={styles.navButton}>ABOUT</button>
              <button className={styles.navButton}>BLOG</button>
              <button className={styles.navButton} id={styles.getInTouchButton}>GET IN TOUCH</button>
            </nav>
            <div className={styles.firstPageRightSideBottom}>
              <div className={styles.firstPageRightSideBottomTitle}>Turn your tech idea into a product people love</div>
              <div className={styles.firstPageRightSideBottomText}>Technology should work for you. I’m here to build your mobile or web app, so you can focus on what really matters - growing your business.</div>
              <button className={styles.getInTouchButton}>GET IN TOUCH</button>
            </div>
          </div>
        </div>
        <div className={styles.secondPage}>
          <div className={styles.threePointsBackGround}>
            <div className={styles.threePoints}>
              <div className={styles.solution}>
                <div className={styles.solutionBox}>
                  <div className={styles.solutionBackRec}></div>
                  <div className={styles.solutionTitle}>Solution</div>
                  <div className={styles.solutionText}>Development work can sometimes feel like a mystery, so I work closely with your product and design teams to help them explore solutions and define a product roadmap that meets your goals.</div>
                </div>
              </div>
              <div className={styles.technology}>
                <div className={styles.technologyBox}>
                  <div className={styles.technologyBackRec}></div>
                  <div className={styles.technologyTitle}>Technology</div>
                  <div className={styles.technologyText}>Building an app that is both stable and scalable is not easy but I have been fortunate to have worked with some of the latest Javascript technologies on a variety of problems. I adapt my approach to meet the specific needs of your team and product.</div>
                </div>
              </div>
              <div className={styles.experience}>
                <div className={styles.experienceBox}>
                  <div className={styles.experienceBackRec}></div>
                  <div className={styles.experienceTitle}>Experience</div>
                  <div className={styles.experienceText}>I have helped define and develop applications and features for global corporates as well as early-stage startups and industries ranging from social media management to sports TV to consumer analytics.</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondPageBottom}>
            <div className={styles.secondPageBottomLeft}>
              <div className={styles.secondPageBottomLeftTitle}>Technology should
              work for you</div>
              <div className={styles.secondPageBottomLeftText}>
                <p>Let’s be honest - creating a successful tech product that people love is hard. You have to juggle ever-changing stakeholder expectations, user needs with sometimes strict deadlines and tight budgets on top of it all.</p>
                <p>What tech solution will work for your product shouldn’t be yet another thing for you to worry about.</p>
                <p>I’m here to help you navigate through the murky waters of technology, so you can focus on realising your idea.</p>
              </div>
              <button className={styles.getInTouchButton}>GET IN TOUCH</button>
            </div>
            <div className={styles.secondPageBottomRight}>
              <Image src='/example-scene-2.png' width={744.66} height={594.92} alt='Image2'/>
            </div>
          </div>
        </div>
        <div className={styles.thirdPage}>
          <div className={styles.thirdPageTop}>
            <div className={styles.thirdPageTopLeft}>
              <div className={styles.thirdPageTopLeftImage}>
                <Image src='/Erika.png' width={753} height={840} alt='Image2'/>
              </div>
            </div>
            <div className={styles.thirdPageTopRight}>
              <div className={styles.thirdPageTopRightText}>
                <div className={styles.thirdPageTopRightTextIntro}>Hi, I’m Erika. Nice to meet you!</div>
                <div className={styles.thirdPageTopRightTextDescription}>I am a full stack JavaScript developer with a passion for creating user-centric tech products. For more than five years, I have helped companies both big and small to bring new products and features into the hands of their users.</div>
                <div className={styles.thirdPageTopRightTextButtons}>
                  <Link href='https://www.instagram.com/'>
                    {/* <a>Home</a> */}
                    <FontAwesomeIcon icon={faInstagram} height='30px'/>
                  </Link>
                  <Link href='https://www.linkedin.com/'>
                    {/* <a>Home</a> */}
                    <FontAwesomeIcon icon={faLinkedinIn} height='30px'/>
                  </Link>
                  <Link href='https://www.twitter.com/'>
                    {/* <a>Home</a> */}
                    <FontAwesomeIcon icon={faTwitter} height='30px'/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdPageBottom}>
            <div className={styles.thirdPageBottomText}>
              <p>I’ve been really impressed in my time working with Erika in her role as one of the leading developers in the Eurosport team.</p>
              <p>I find Erika astute, approachable and engaging - she takes the time and effort to walk through implications and options for decisions we need to make and is a really solid trusted sounding board on technical feasibility and approaches to requirements needs.</p>
              <p>On top of being a really good developer and really hard working, Erika is a joy to work with from a business and stakeholder engagement perspective and I hope to work with her again in the future.</p>
            </div>
            <div className={styles.thirdPageBottomAuthor}>Alex Brown, Senior Product Manager at Eurosport</div>
          </div>
        </div>
        <div className={styles.thirdPage}>
          <div className={styles.thirdPageTopLeft}>
            <div>Let’s get your idea from
            notepad to launchpad</div>
            <div>
              <img />
            </div>
          </div>
          <div className={styles.thirdPageTopRight}>
            <form>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <input type='submit' value='Send'/>
            </form>
          </div>
          <div className={styles.thridPageBottomLeft}>
            <div>JONIKA</div>
            <div className={styles.socialMediaButtons}>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div><a href=''>hello@jonika.io</a></div>
            <p>
              <div>86 - 90 Paul Street</div>
              <div>London</div>
              <div>EC2 4NE</div>
            </p>
          </div>
          <div className={styles.thirdPageBottomRight}>
            <div><a>Terms and Conditions</a></div>
            <div><a>Privacy Policy</a></div>
            <div><a>Cookie Policy</a></div>
          </div>
        </div>
      </body>
      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
