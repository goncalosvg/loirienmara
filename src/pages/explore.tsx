import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import Transition from '@/components/Transition'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import TextReveal from '@/components/Animations/Text/TextReveal'
import ScrollUp from '@/utils/scrollUp'

export default function Explore() {
  const hero = useRef(null)
  const [lastIndex, setLastIndex] = useState<string | null>(null)

  useEffect(() => {
    const activities =
      document.querySelectorAll<HTMLLIElement>('.activities li')
    const images = document.querySelectorAll<HTMLDivElement>('.imagewrap')

    activities.forEach((activity) => {
      const handleMouseOver = () => {
        const index = activity.getAttribute('data-index')
        if (index) {
          setLastIndex(index)
          images.forEach((image) => {
            if (image.getAttribute('data-index') === index) {
              image.style.display = 'block'
            } else {
              image.style.display = 'none'
            }
          })
        }
      }

      const handleMouseOut = () => {
        images.forEach((image) => {
          image.style.display = 'none'
        })
        if (lastIndex) {
          const lastImage = document.querySelector<HTMLDivElement>(
            `.imagewrap[data-index="${lastIndex}"]`,
          )
          if (lastImage) {
            lastImage.style.display = 'block'
          }
        }
      }

      activity.addEventListener('mouseover', handleMouseOver)
      activity.addEventListener('mouseout', handleMouseOut)

      // Clean up event listeners
      return () => {
        activity.removeEventListener('mouseover', handleMouseOver)
        activity.removeEventListener('mouseout', handleMouseOut)
      }
    })
  }, [lastIndex])

  useEffect(() => {
    ScrollUp()
  }, [])
  return (
    <>
      <Transition>
        <Navigation theme="dark" hero={hero} />
        <main>
          <section id="explore" ref={hero}>
            <div className="wrapper">
              <div className="title">
                <TextReveal
                  paragraphs={[
                    'Explore',
                    'our <span class="italic">experiences</span>',
                  ]}
                  style="heading"
                />
              </div>
              <div className="items">
                <div className="item">
                  <div className="header">
                    <div className="flex v-center gap-xs">
                      <div className="photo">
                        <Image
                          width={800}
                          height={500}
                          className="image"
                          src="/gallery/animal.jpg"
                          alt="\0"
                        />
                      </div>
                      <span>Game</span>
                      <span>Drives</span>
                    </div>
                    <div className="text">
                      Embark on thrilling safaris, witness the great migration,
                      and meet the Big Five.
                    </div>
                  </div>
                  <div className="photowrap">
                    <Image
                      width={1920}
                      height={1080}
                      className="photo"
                      src="/activities/gamedrive.jpg"
                      alt="\0"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="flex v-center gap-xs">
                      <span>Walking</span>
                      <div className="photo">
                        <Image
                          width={800}
                          height={500}
                          className="image"
                          src="/gallery/walkingsafari.jpg"
                          alt="\0"
                        />
                      </div>
                      <span>Safaris</span>
                    </div>
                    <div className="text">
                      Venture on foot into the wild, up close with nature.
                    </div>
                  </div>
                  <div className="photowrap">
                    <Image
                      width={1920}
                      height={1080}
                      className="photo"
                      src="/activities/walkingsafaribig.jpg"
                      alt="\0"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="flex v-center gap-xs">
                      <div className="photo">
                        0
                        <Image
                          width={800}
                          height={500}
                          className="image"
                          src="/gallery/rhinotrekking.jpg"
                          alt="\0"
                        />
                      </div>
                      <span>Rhino</span>
                      <span>Trekking</span>
                    </div>
                    <div className="text">
                      Journey with guides to encounter majestic northern white
                      rhinos.
                    </div>
                  </div>
                  <div className="photowrap">
                    <Image
                      width={1920}
                      height={1080}
                      className="photo"
                      src="/activities/rhinotrekkingbig.jpg"
                      alt="\0"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="flex v-center gap-xs">
                      <div className="photo">
                        <Image
                          width={800}
                          height={500}
                          className="image"
                          style={{ transform: 'translate(-50%, -35%) ' }}
                          src="/gallery/balloon.jpg"
                          alt="\0"
                        />
                      </div>
                      <span>Hot Air</span>
                      <span>Balloon</span>
                    </div>
                    <div className="text">
                      Soar at dawn over the Mara&apos;s breathtaking landscapes.
                    </div>
                  </div>
                  <div className="photowrap">
                    <Image
                      width={1920}
                      height={1080}
                      className="photo"
                      src="/activities/balloonbig.jpg"
                      alt="\0"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="flex v-center gap-xs">
                      <span>Helicopter</span>
                      <div className="photo">
                        <Image
                          width={800}
                          height={500}
                          className="image"
                          style={{ transform: 'translate(-50%, -70%) ' }}
                          src="/gallery/helicopter.jpg"
                          alt="\0"
                        />
                      </div>
                      <span>Safari</span>
                    </div>
                    <div className="text">
                      Explore the Mara&apos;s hidden gems from the sky.
                    </div>
                  </div>
                  <div className="photowrap">
                    <Image
                      width={1920}
                      height={1080}
                      className="photo"
                      src="/activities/helicopterbig.jpg"
                      alt="\0"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="flex v-center gap-xs">
                      <div className="photo">
                        <Image
                          width={800}
                          height={500}
                          className="image"
                          src="/gallery/kulaalfood.jpg"
                          alt="\0"
                        />
                      </div>
                      <span>Cultural</span>
                      <span>Immersion</span>
                    </div>
                    <div className="text">
                      Dive into Maasai culture and ancient traditions.
                    </div>
                  </div>
                  <div className="photowrap">
                    <Image
                      width={1920}
                      height={1080}
                      className="photo"
                      src="/activities/kulaalfoodbig.jpg"
                      alt="\0"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="flex v-center gap-xs">
                      <div className="photo">
                        <Image
                          width={800}
                          height={500}
                          className="image"
                          src="/gallery/flycamping.jpg"
                          alt="\0"
                        />
                      </div>
                      <span>Fly</span>
                      <span>Camping</span>
                    </div>
                    <div className="text">
                      Sleep under the stars in the heart of the wilderness.
                    </div>
                  </div>
                  <div className="photowrap">
                    <Image
                      width={1920}
                      height={1080}
                      className="photo"
                      src="/activities/flycamping.jpg"
                      alt="\0"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="flex v-center gap-xs">
                      <span>Wine</span>
                      <div className="photo">
                        <Image
                          width={800}
                          height={500}
                          className="image"
                          src="/gallery/winetasting.jpg"
                          alt="\0"
                        />
                      </div>
                      <span>Tasting</span>
                    </div>
                    <div className="text">
                      Indulge in world-class wines amidst stunning scenery.
                    </div>
                  </div>
                  <div className="photowrap">
                    <Image
                      width={1920}
                      height={1080}
                      className="photo"
                      src="/activities/winetastingbig.jpg"
                      alt="\0"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="flex v-center gap-xs">
                      <span>Farm</span>
                      <div className="photo">
                        <Image
                          width={800}
                          height={500}
                          className="image"
                          src="/gallery/farm.jpg"
                          alt="\0"
                        />
                      </div>
                      <span>Visits</span>
                    </div>
                    <div className="text">
                      Engage with Ankole cattle and sustainable farming.
                    </div>
                  </div>
                  <div className="photowrap">
                    <Image
                      width={1920}
                      height={1080}
                      className="photo"
                      src="/activities/farmbig.jpg"
                      alt="\0"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="flex v-center gap-xs">
                      <div className="photo">
                        <Image
                          width={800}
                          height={500}
                          className="image"
                          src="/gallery/starysky.jpg"
                          alt="\0"
                        />
                      </div>
                      <span>Star</span>
                      <span>Safari</span>
                    </div>
                    <div className="text">
                      Unveil the universe with a guided stargazing adventure.
                    </div>
                  </div>
                  <div className="photowrap">
                    <Image
                      width={1920}
                      height={1080}
                      className="photo"
                      src="/activities/starskybig.jpg"
                      alt="\0"
                    />
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
