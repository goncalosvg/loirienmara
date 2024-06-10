/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'

import Image from 'next/image'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import TextBlur from '@/components/Animations/Text/TextBlur'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Transition from '@/components/Transition'

import Floating1 from '../../public/gallery/animal.jpg'
import Floating2 from '../../public/gallery/balloon.jpg'
import Floating3 from '../../public/gallery/kulaalfood.jpg'
import Floating4 from '../../public/gallery/picnic.jpg'
import Floating5 from '../../public/gallery/winetasting.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'
import GradientReveal from '@/components/Animations/Text/Gradient'
import TextReveal from '@/components/Animations/Text/TextReveal'
import ScrollUp from '@/utils/scrollUp'

gsap.registerPlugin(ScrollTrigger)

export default function Conserve() {
  const hero = useRef(null)
  const plane1 = useRef(null) as any
  const plane2 = useRef(null) as any

  let requestAnimationFrameId = null as any
  let xForce = 0
  let yForce = 0
  const easing = 0.08
  const speed = 0.01

  const manageMouseMove = (e: any) => {
    const { movementX, movementY } = e
    xForce += movementX * speed
    yForce += movementY * speed

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animatePlane)
    }
  }

  const lerp = (start: any, target: any, amount: any) =>
    start * (1 - amount) + target * amount

  const animatePlane = () => {
    xForce = lerp(xForce, 0, easing)
    yForce = lerp(yForce, 0, easing)

    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` })
    gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })

    if (Math.abs(xForce) < 0.01) xForce = 0
    if (Math.abs(yForce) < 0.01) yForce = 0

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animatePlane)
    } else {
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null
    }
  }

  const container = useRef() as any

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-10vh', '10vh'])

  useEffect(() => {
    ScrollUp()
  }, [])
  return (
    <>
      <Transition>
        <Navigation theme="dark" hero={hero} />
        <main>
          <section
            id="story-hero"
            onMouseMove={(e) => {
              manageMouseMove(e)
            }}
            ref={hero}
          >
            <div className="wrapper">
              <TextBlur
                paragraphs={[
                  'Welcome to LOIRIEN Mara, a sanctuary nestled within the private 952-acre Partakilat Conservancy in the heart of the Maasai Mara. The name &apos;Loirien,&apos; signifies the sacred Masaai Olive Tree and a place of refuge, embodying a peaceful retreat amidst the wilderness.',
                ]}
                style="heading"
                reference="title"
              />
              <div ref={plane1} className="plane">
                <Image src={Floating1} alt="image" width={300} />
                <Image src={Floating2} alt="image" width={300} />
                <Image src={Floating3} alt="image" width={225} />
              </div>
              <div ref={plane2} className="plane">
                <Image src={Floating4} alt="image" width={250} />
                <Image src={Floating5} alt="image" width={225} />
              </div>
            </div>
          </section>
          <section id="ourstory-parallax">
            <div
              className="container"
              ref={container}
              style={{
                clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
              }}
            >
              <div className="text">
                Our three distinct villas—Loirien, Naika, and Kulaal—are
                masterfully designed to harmonize with the surrounding
                landscape. Inside, each villa offers abundant living spaces,
                oversized beds, and floor-to-ceiling windows that frame
                breathtaking views of the Mara Triangle. The interiors blend
                contemporary design with natural materials, featuring accents of
                leather, wood, and linen, complemented by a rotating art
                collection. From these serene spaces, guests can enjoy front-row
                seats to one of nature&apos;s grandest spectacles, the Great
                Migration—one of the Natural Wonders of the World.
              </div>
              <div className="wrap">
                <motion.div className="motion" style={{ y }}>
                  <Image
                    className="background"
                    src="/house.jpg"
                    fill
                    alt="image"
                  />
                  <div className="overlay"></div>
                </motion.div>
              </div>
            </div>
          </section>
          <section id="ourstory-content">
            <div className="w-full flex h-center v-center gap-xs mgbottom-xs">
              <TextReveal paragraphs={['Comfort']} style="subheading" />
              <TextReveal
                paragraphs={['<span class="italic">Privacy</span>']}
                style="subheading"
                delay={0.1}
              />
              <TextReveal
                paragraphs={['Experiences']}
                style="subheading"
                delay={0.2}
              />
            </div>
            <div className="w-full flex h-center">
              <div className="paragraph">
                At LOIRIEN Mara, we provide unparalleled comfort, privacy, and
                bespoke experiences that celebrate the vibrant wildlife and
                culture of the land. From expertly guided safaris and immersive
                cultural excursions to gourmet farm-to-table dining, wine
                tasting, and holistic wellness treatments, every moment is
                crafted to create unforgettable experiences. Engage in rhino
                trekking in our dedicated sanctuary, tour our regenerative farm,
                or explore the wild landscapes of the Mara through fly fishing
                and helicopter excursions. Our dedicated team ensures every
                detail is attended to with the utmost care.
              </div>
            </div>
            <GradientReveal
              paragraph="As custodians of this extraordinary land, we are dedicated to creating a sustainable legacy that preserves the environment, community, and culture. We actively safeguard endangered species like white rhinos, support community education initiatives, and promote conservation efforts to protect the unique biodiversity of the Mara. Through our initiatives, we aim to maintain the delicate balance of this ecosystem and ensure that both wildlife and local communities thrive."
              align="left"
              style="description"
            />
            <div className="team">
              <div className="wrapper">
                <TextReveal
                  paragraphs={[
                    'Our',
                    '<span class="flex"><span class="box"></span><span class="italic">voices</span></span>',
                  ]}
                  style="heading"
                />
                <div className="row" style={{ marginTop: '-30px' }}>
                  <div className="col-md-4">
                    <div className="member">
                      <div className="photowrap">
                        <Image
                          width={800}
                          height={1200}
                          className="photo"
                          src="/roy.jpg"
                          alt="\0"
                        />
                      </div>
                      <div className="info">
                        <h3>Roy—Jr. Chef</h3>
                        <p>
                          “Cooking is an art, and I am an artist in the kitchen.
                          Every day, I learn from our clients and the team, and
                          strive to incorporate these lessons into my craft.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="member">
                      <div className="photowrap">
                        <Image
                          width={800}
                          height={1200}
                          className="photo"
                          src="/winny.jpg"
                          alt="\0"
                        />
                      </div>
                      <div className="info">
                        <h3>Winny—Massage Therapist</h3>
                        <p>
                          “Every client experience is a memory. I love making
                          people relax and feel at home through my work.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="member">
                      <div className="photowrap">
                        <Image
                          width={800}
                          height={1200}
                          className="photo"
                          style={{ transform: 'translateY(-100px)' }}
                          src="/leah.jpg"
                          alt="\0"
                        />
                      </div>
                      <div className="info">
                        <h3>Leah—Housekeeper</h3>
                        <p>
                          “I love exchanging with our guests. When they leave, I
                          hope they carry with them stories of our land and the
                          rich culture of the Maasai community.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="plax"></section>
          <Footer />
        </main>
      </Transition>
    </>
  )
}
