/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import styles from './Navigation.module.scss'
import Arrow from '../Icons/Arrow'
import Link from 'next/link'
import TextReveal from '../Animations/Text/TextReveal'
import ImageReveal from '../Animations/Reveal/Image'

gsap.registerPlugin(ScrollTrigger)

interface NavProps {
  theme?: string
  hero?: any
}

export default function Navigation({ theme, hero }: NavProps) {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false)

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
              <ul className={styles.items}>
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
              </ul>
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
              <button className={styles.btn}>
                Enquire
                <div className={styles.arrowwrap}>
                  <Arrow style={styles.arrow} color="#282828" />
                </div>
              </button>
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
      <nav id={styles.nav} className={styles[`${theme}`]}>
        <div className="wrapper sm-w">
          <div className={styles.content}>
            <div className={styles.left}>
              <ul className={styles.items}>
                <Link href="/conserve" passHref scroll={false}>
                  <li>
                    <TextReveal paragraphs={['Conserve']} delay={0.4} />
                  </li>
                </Link>
                <Link href="/nurture" passHref scroll={false}>
                  <li>
                    <TextReveal paragraphs={['Nurture']} delay={0.5} />
                  </li>
                </Link>
                <Link href="/explore" passHref scroll={false}>
                  <li>
                    <TextReveal paragraphs={['Explore']} delay={0.6} />
                  </li>
                </Link>
                <Link href="/ourstory" passHref scroll={false}>
                  <li>
                    <TextReveal paragraphs={['Our Story']} delay={0.7} />
                  </li>
                </Link>
              </ul>
            </div>
            <div className={styles.center}>
              {theme !== 'dark' && (
                <Link href="/" passHref scroll={false}>
                  <ImageReveal>
                    <Image
                      width={800}
                      height={500}
                      className={styles.logo}
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
                      className={styles.logo}
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
