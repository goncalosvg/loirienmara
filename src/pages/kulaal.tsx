/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'

import Image from 'next/image'

import { motion, useScroll, useTransform } from 'framer-motion'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import Picture1 from '../../public/kulaal/chef.jpg'
import Picture2 from '../../public/kulaal/interior1.jpg'
import Picture3 from '../../public/kulaal/interior2.jpg'
import Picture4 from '../../public/kulaal/exterior2.jpg'
import Picture5 from '../../public/kulaal/exterior1.jpg'

import TextReveal from '@/components/Animations/Text/TextReveal'
import Transition from '@/components/Transition'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollUp from '@/utils/scrollUp'
import Arrow from '@/components/Icons/Arrow'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'

gsap.registerPlugin(ScrollTrigger)

export default function Kulaal() {
  const hero = useRef(null)

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4.3])
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale4,
    },
    {
      src: Picture5,
      scale,
    },
  ]

  const horizontalContainer = useRef(null)

  const { scrollYProgress: horizontalGallery } = useScroll({
    target: horizontalContainer,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(horizontalGallery, [0, 1], ['0vw', '-300vw'])

  useEffect(() => {
    ScrollUp()
  }, [])
  return (
    <>
      <Transition>
        <Navigation theme="dark" hero={hero} />
        <main>
          <section id="villa-hero" ref={hero}>
            <div className="container" ref={container}>
              <div className="sticky">
                {pictures.map(({ src, scale }, index) => {
                  return (
                    <motion.div
                      key={index}
                      style={{ scale }}
                      className="element"
                    >
                      <div className="imageContainer">
                        <Image className="picture" src={src} fill alt="\0" />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>
          <section id="villa-content">
            <div className="wrapper">
              <div className="title">
                <TextReveal
                  paragraphs={['KULAAL <span class="italic">Villa</span>']}
                  style="heading"
                />
              </div>
              <div className="info">
                <div className="description">
                  Inspired by the spirit of bonfire camps, Kulaal Villa offers
                  guests an intimate 225 square meters (2,422 square feet) of
                  accommodation nestled within the core of the Partakilat
                  Conservancy. This two-bedroom villa combines stunning vistas
                  with a warm, inviting atmosphere. At the heart of the villa, a
                  private fireplace and expansive terrace form central spaces to
                  gather and enjoy the seamless indoor-outdoor living
                  experience, ideal for entertaining amidst the panoramic views
                  of the Maasai Mara.
                  <br />
                  <br />
                  The villa affords guests ample privacy, with king-sized beds
                  and en-suite bathrooms in each of the two beautifully
                  appointed bedrooms. To ensure a seamless stay, our dedicated
                  team is on hand to cater to every need, including transporting
                  guests around the conservancy in the villa&apos;s private
                  buggy. Reflecting the villa&apos;s nature-inspired ethos,
                  serene garden areas surround the villa, providing moments of
                  private reflection.
                </div>
                <div className="row mgtop-lg">
                  <div className="col-md-4">
                    <div className="tab">
                      <h3>All stays include</h3>
                      <ul className="items">
                        <li className="item">
                          Full board accommodation across 3 private villas
                        </li>
                        <li className="item">Two daily game drives</li>
                        <li className="item">
                          Night game drives within the conservancy
                        </li>
                        <li className="item">
                          Local airstrip transfers (Kichwa Tembo)
                        </li>
                        <li className="item">
                          All conservancy-based activities
                        </li>
                        <li className="item">
                          One complimentary massage per guest per stay
                        </li>
                        <li className="item">
                          Selected cellar wines, spirits, beers, and soft drinks
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="tab">
                      <h3>Amenities at Kulaal Villa</h3>
                      <ul className="items">
                        <li className="item">
                          Offering 225m² (2,422 sq.ft) of living space
                        </li>
                        <li className="item">
                          Expansive terrace with panoramic views
                        </li>
                        <li className="item">Private fireplace</li>
                        <li className="item">Outdoor lounge for stargazing</li>
                        <li className="item">
                          Two bedrooms with king-size beds
                        </li>
                        <li className="item">
                          En-suite bathrooms with bathtubs
                        </li>
                        <li className="item">Air conditioning</li>
                        <li className="item">Wi-Fi and Satellite Wi-Fi</li>
                        <li className="item">Dedicated entertainment areas</li>
                        <li className="item">
                          Elegant indoor-outdoor living design
                        </li>
                        <li className="item">Dedicated team</li>
                        <li className="item">Private buggy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="tab">
                      <h3>2024 Rates</h3>
                      <ul className="items">
                        <li className="item">
                          $3,750 per night for up to 4 guests, with each
                          additional guest at $700 per night.
                        </li>
                      </ul>
                    </div>
                    <div className="tab">
                      <h3>2025 Rates</h3>
                      <ul className="items">
                        <li className="item">
                          $6,250 per night for up to 4 guests, with each
                          additional guest at $1,200 per night.
                        </li>
                      </ul>
                    </div>
                    <div className="tab">
                      <h3>Terms and Conditions</h3>
                      <ul className="items">
                        <li className="item">
                          Rates valid from 1st July 2024 to 30th April 2025 and
                          from 1st May 2025 to 30th April 2026.
                        </li>
                        <li className="item">
                          Minimum stay: 3 nights year-round, 4 nights during
                          Christmas and New Year.
                        </li>
                        <li className="item">
                          Children under 5 stay free; children 5-15 pay 50% of
                          the adult rate.
                        </li>
                        <li className="item">
                          Daily conservation fee: $200 per adult, $100 per child
                          (aged 5 to 15).
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Link href="/enquire" passHref scroll={false}>
                  <button className="btn">
                    Enquire
                    <div className="arrowwrap">
                      <Arrow style="arrow" color="#f4efe9" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <section id="villa-carousel-gallery" className="is-mobile">
            <Carousel
              dynamicHeight
              transitionTime={800}
              showIndicators={false}
              showArrows={false}
              showThumbs={false}
            >
              <div>
                <Image
                  width={1200}
                  height={1500}
                  className="photo"
                  src="/kulaal/gallery/exterior1.jpg"
                  alt="\0"
                />
              </div>
              <div>
                <Image
                  width={1200}
                  height={1500}
                  className="photo"
                  src="/kulaal/gallery/exterior2.jpg"
                  alt="\0"
                />
              </div>
              <div>
                <Image
                  width={1200}
                  height={1500}
                  className="photo"
                  src="/kulaal/gallery/interior1.jpg"
                  alt="\0"
                />
              </div>
              <div>
                <Image
                  width={1200}
                  height={1500}
                  className="photo"
                  src="/kulaal/gallery/interior2.jpg"
                  alt="\0"
                />
              </div>
              <div>
                <Image
                  width={1200}
                  height={1500}
                  className="photo"
                  src="/kulaal/gallery/food1.jpg"
                  alt="\0"
                />
              </div>
              <div>
                <Image
                  width={1200}
                  height={1500}
                  className="photo"
                  src="/kulaal/gallery/food2.jpg"
                  alt="\0"
                />
              </div>
              <div>
                <Image
                  width={1200}
                  height={1500}
                  className="photo"
                  src="/kulaal/gallery/room1.jpg"
                  alt="\0"
                />
              </div>
              <div>
                <Image
                  width={1200}
                  height={1500}
                  className="photo"
                  src="/kulaal/gallery/room2.jpg"
                  alt="\0"
                />
              </div>
            </Carousel>
          </section>
          <section id="villa-gallery" ref={horizontalContainer}>
            <motion.div className="gallery" style={{ x }}>
              <div className="panel">
                <div className="photowrap">
                  <Image
                    width={1200}
                    height={1500}
                    className="photo"
                    src="/kulaal/gallery/exterior1.jpg"
                    alt="\0"
                  />
                </div>
                <div className="photowrap">
                  <Image
                    width={1200}
                    height={1500}
                    className="photo"
                    src="/kulaal/gallery/exterior2.jpg"
                    alt="\0"
                  />
                </div>
              </div>
              <div className="panel">
                <div className="photowrap">
                  <Image
                    width={1200}
                    height={1500}
                    className="photo"
                    src="/kulaal/gallery/interior1.jpg"
                    alt="\0"
                  />
                </div>
                <div className="photowrap">
                  <Image
                    width={1200}
                    height={1500}
                    className="photo"
                    src="/kulaal/gallery/interior2.jpg"
                    alt="\0"
                  />
                </div>
              </div>
              <div className="panel">
                <div className="photowrap">
                  <Image
                    width={1200}
                    height={1500}
                    className="photo"
                    src="/kulaal/gallery/food1.jpg"
                    alt="\0"
                  />
                </div>
                <div className="photowrap">
                  <Image
                    width={1200}
                    height={1500}
                    className="photo"
                    src="/kulaal/gallery/food2.jpg"
                    alt="\0"
                  />
                </div>
              </div>
              <div className="panel">
                <div className="photowrap">
                  <Image
                    width={1200}
                    height={1500}
                    className="photo"
                    src="/kulaal/gallery/room1.jpg"
                    alt="\0"
                  />
                </div>
                <div className="photowrap">
                  <Image
                    width={1200}
                    height={1500}
                    className="photo"
                    src="/kulaal/gallery/room2.jpg"
                    alt="\0"
                  />
                </div>
              </div>
              <div className="panel last">
                <TextReveal
                  paragraphs={[
                    'Enjoy',
                    '<span class="italic">your stay</span>',
                  ]}
                  style="end"
                />
              </div>
            </motion.div>
          </section>
          <section className="plax"></section>
          <Footer />
        </main>
      </Transition>
    </>
  )
}
