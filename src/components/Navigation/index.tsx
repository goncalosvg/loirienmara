/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import Link from 'next/link'
import ImageReveal from '../Animations/Reveal/Image'
import TextReveal from '../Animations/Text/TextReveal'
import Arrow from '../Icons/Arrow'
import styles from './Navigation.module.scss'

gsap.registerPlugin(ScrollTrigger)

interface NavProps {
  theme?: string
  hero?: any
}

export default function Navigation({ theme, hero }: NavProps) {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false)
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [isHovering, setIsHovering] = useState<string>("/conserve.jpg")

  const fixedNavRef = useRef(null) as any

  useEffect(() => {
    const navElement = document.getElementById(`${styles.fixednav}`) as any
    if (hero) {
      if (!hero.current) return

      let prevScrollpos = window.scrollY
      let heroInView = false

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            heroInView = entry.isIntersecting
            if (heroInView) {
              navElement.style.transform = 'translateY(-100%)'
            } else {
              navElement.removeAttribute('style')
            }
          })
        },
        { threshold: 0.0 },
      )

      observer.observe(hero.current)

      const handleScroll = () => {
        if (!heroInView) {
          const currentScrollPos = window.scrollY
          if (prevScrollpos < currentScrollPos) {
            navElement.style.transform = 'translateY(-100%)'
          } else if (prevScrollpos > currentScrollPos) {
            navElement.removeAttribute('style')
          }
          prevScrollpos = currentScrollPos
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
        observer.disconnect()
      }
    } else {
      navElement.style.transform = 'translateY(-100%)'
    }
  }, [hero])
  
  useEffect(() => {
    const b = document.body;
  
    if (isMenuOpened || isSidebarOpened) {
      const scrollPosition = window.scrollY;
      b.style.setProperty('--st', -scrollPosition + "px");
      b.dataset.scrollPosition = scrollPosition as any;
      b.classList.add('noscroll');
    } else {
      const scrollPosition = b.dataset.scrollPosition;
      b.classList.remove('noscroll');
      window.scrollTo(0, scrollPosition as any);
    }
  }, [isMenuOpened, isSidebarOpened]);

  return (
    <>
      <div id={styles.fixednav} ref={fixedNavRef}>
        <div className="wrapper sm-w">
          <div className={styles.content}>
            <div className={styles.left}>
              <div
                className={`${styles.menutrigger} ${
                  isSidebarOpened ? styles.active : ''
                } ${styles.relative}`}
                onClick={() => setIsSidebarOpened((prev) => !prev)}
              >
                <div className={styles.hamburguer}>
                  <div className={styles.line}></div>
                  <div className={styles.line}></div>
                </div>
                Menu
              </div>
              <div
                className={`${styles.menutriggerdesktop} ${
                  isMenuOpened ? styles.active : ''
                } ${styles.relative}`}
                onClick={() => setIsMenuOpened((prev) => !prev)}
              >
                <div className={styles.hamburguer}>
                  <div className={styles.line}></div>
                  <div className={styles.line}></div>
                </div>
                Menu
              </div>
            </div>
            <div className={styles.center}>
              <Link href="/" passHref scroll={false}>
                <Image
                  width={800}
                  height={500}
                  className={styles.logo}
                  src="/small-logotype.png"
                  alt="LOIRIEN Mara logotype"
                />
              </Link>
            </div>
            <div className={styles.right}>
              <Link href="/enquire" passHref scroll={false}>
                <button className={styles.btn}>
                  Enquire
                  <div className={styles.arrowwrap}>
                    <Arrow style={styles.arrow} color="#282828" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.menutrigger} ${
          isSidebarOpened ? styles.active : ''
        } ${theme === 'dark' ? styles.dark : ''}`}
        onClick={() => setIsSidebarOpened((prev) => !prev)}
      >
        <div className={styles.hamburguer}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        Menu
      </div>
      <div
        className={`${styles.overlay} ${isSidebarOpened ? styles.active : ''}`}
        onClick={() => setIsSidebarOpened((prev) => !prev)}
      ></div>
      <div id={styles.sidebar} className={isSidebarOpened ? styles.active : ''}>
        <ul className={styles.items}>
          <Link href="/" passHref scroll={false}>
            <li>Home</li>
          </Link>
          <Link href="/conserve" passHref scroll={false}>
            <li>Conserve</li>
          </Link>
          <Link href="/nurture" passHref scroll={false}>
            <li>Nurture</li>
          </Link>
          <Link href="/explore" passHref scroll={false}>
            <li>Explore</li>
          </Link>
          <Link href="/ourstory" passHref scroll={false}>
            <li>Our Story</li>
          </Link>
          <Link href="/loirien" passHref scroll={false}>
            <li>Loirien Villa</li>
          </Link>
          <Link href="/kulaal" passHref scroll={false}>
            <li>Kulaal Villa</li>
          </Link>
          <Link href="/naika" passHref scroll={false}>
            <li className={styles.last}>Naika Villa</li>
          </Link>
        </ul>
        <Link href="/enquire" passHref scroll={false}>
          <button className={styles.btn}>Enquire</button>
        </Link>
      </div>
      {isMenuOpened && (
      <div id={styles.menu} className={`${isMenuOpened ? styles.active : ''}`}>
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6 col-lp-4 col-sm-4">
              <h3 className={styles.subheading}><TextReveal paragraphs={['Enquire']} /></h3>
              <div className={styles.enquire}>To inquire about availability or to learn more about our bespoke experiences, please contact our team at <a className="link" href="mailto:reservations@loirienmara.com">reservations@loirienmara.com</a>, or via WhatsApp or phone at <span className="link">+254 (0) 798 371 180</span>. We look forward to welcoming you home to LOIRIEN Mara.</div>
            </div>
            <div className="col-md-6 col-lp-8 col-sm-8">
              <div className="row">
                <div className="col-md-6 col-sm-8">
                  <ul className={styles.items}>
                    <Link href="/conserve" passHref scroll={false}><li onMouseOverCapture={() => setIsHovering('/conserve.jpg')}><TextReveal paragraphs={['Conserve']} /> <Arrow style={styles.arrow} color="#282828" /></li></Link>
                    <Link href="/nurture" passHref scroll={false}><li onMouseOverCapture={() => setIsHovering('/nurture.jpg')}><TextReveal paragraphs={['Nurture']} delay={0.1} /> <Arrow style={styles.arrow} color="#282828" /></li></Link>
                    <Link href="/explore" passHref scroll={false}><li onMouseOverCapture={() => setIsHovering('/explore.jpg')}><TextReveal paragraphs={['Explore']} delay={0.2} /> <Arrow style={styles.arrow} color="#282828" /></li></Link>
                    <Link href="/ourstory" passHref scroll={false}><li><TextReveal paragraphs={['Our Story']} delay={0.3} /> <Arrow style={styles.arrow} color="#282828" /></li></Link>
                    <Link href="/loirien" passHref scroll={false}><li onMouseOverCapture={() => setIsHovering('/loirien/gallery/room1.jpg')}><TextReveal paragraphs={['Loirien Villa']} delay={0.4} /> <Arrow style={styles.arrow} color="#282828" /></li></Link>
                    <Link href="/kulaal" passHref scroll={false}><li onMouseOverCapture={() => setIsHovering('/kulaal/gallery/room1.jpg')}><TextReveal paragraphs={['Kulaal Villa']} delay={0.5} /> <Arrow style={styles.arrow} color="#282828" /></li></Link>
                    <Link href="/naika" passHref scroll={false}><li onMouseOverCapture={() => setIsHovering('/naika/gallery/room1.jpg')}><TextReveal paragraphs={['Naika Villa']} delay={0.6} /> <Arrow style={styles.arrow} color="#282828" /></li></Link>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-4">
                  <div className={styles.imagewrap}>
                      <Image
                        width={800}
                        height={900}
                        className={styles.image}
                        src={isHovering}
                        alt="\0"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      <nav id={styles.nav} className={styles[`${theme}`]}>
        <div className="wrapper sm-w">
          <div className={styles.content}>
            <div className={styles.left}>
            <div
                className={`${styles.menutriggerdesktop} ${
                  isMenuOpened ? styles.active : ''
                } ${styles.relative} ${theme === 'dark' ? styles.dark : ''}`}
                onClick={() => setIsMenuOpened((prev) => !prev)}
              >
                <div className={styles.hamburguer}>
                  <div className={styles.line}></div>
                  <div className={styles.line}></div>
                </div>
                Menu
              </div>
            </div>
            <div className={styles.center}>
              {theme !== 'dark' && (
                <Link href="/" passHref scroll={false}>
                  <ImageReveal>
                    <Image
                      width={800}
                      height={500}
                      className={`${styles.logo} ${isMenuOpened ? styles.menuOpened : ''}`}
                      src="/logotype.png"
                      alt="LOIRIEN Mara logotype"
                    />
                  </ImageReveal>
                </Link>
              )}
              {theme === 'dark' && (
                <Link href="/" passHref scroll={false}>
                  <ImageReveal>
                    <Image
                      width={800}
                      height={500}
                      className={`${styles.logo} ${isMenuOpened ? styles.menuOpened : ''}`}
                      src="/small-logotype.png"
                      alt="LOIRIEN Mara logotype"
                    />
                  </ImageReveal>
                </Link>
              )}
            </div>
            <div className={styles.right}>
              <Link href="/enquire" passHref scroll={false}>
                <button className={styles.btn}>
                  Enquire
                  <div className={styles.arrowwrap}>
                    <Arrow
                      style={styles.arrow}
                      color={theme === 'dark' ? '#f4efe9' : '#282828'}
                    />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
