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
        <div className={styles.fourthPage}>
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
            <button className={styles.getInTouchButton}>GET IN TOUCH</button>
          </div>
          <div className={styles.fifthPageRight}>
            <Image src='/example-scene-2.png' width={544} height={519} alt='Image2'/>
          </div>
        </div>
        <div className={styles.sixthPage}>
          <div className={styles.sixthPageLeft}>
            <div className={styles.sixthPageLeftText}>Let’s get your idea from
            notepad to launchpad</div>
            <div className={styles.sixthPageLeftImage}>
            <Image src='/launch.png' width={787.21} height={571} alt='Image2'/>
            </div>
          </div>
            <form className={styles.sixthPageRight}>
              <input className={styles.sixthPageRightTopBox} type='text' placeholder='What should I call you?'/>
              <input className={styles.sixthPageRightTopBox} type='text' placeholder='What’s your email?'/>
              <input className={styles.sixthPageRightBottomBox} type='text' placeholder='Let me know about the awesome product you have - what is it about? What type help are you looking for?'/>
              <input className={styles.submit} type='submit' value='Send'/>
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
            {/* <a href=''>hello@jonika.io</a></div> */}
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
        </div>
      </body>
      <main className={styles.main}>

      </main>

      {/* <footer className={styles.footer}>

      </footer> */}
    </div>
  )
}
