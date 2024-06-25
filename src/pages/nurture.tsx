/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

import Image from "next/image";

import Marquee from "react-fast-marquee";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Transition from "@/components/Transition";
import TextReveal from "@/components/Animations/Text/TextReveal";
import Fade from "@/components/Animations/Fade";
import ScrollUp from "@/utils/scrollUp";

gsap.registerPlugin(ScrollTrigger);

export default function Conserve() {
  const hero = useRef(null);
  const fixedRef = useRef(null) as any;

  useEffect(() => {
    const scrollTriggerOptions = {
      trigger: ".fixed",
      start: "40% top",
      end: "bottom bottom",
      scrub: true,
    };
    const scrollTriggerOptions2 = {
      trigger: ".fixed",
      start: "70% top",
      end: "bottom bottom",
      scrub: true,
    };
    gsap.to(".second-mock", {
      opacity: 1,
      scrollTrigger: scrollTriggerOptions,
      ease: "steps(1)",
    });
    gsap.to(".third-mock", {
      opacity: 1,
      scrollTrigger: scrollTriggerOptions2,
      ease: "steps(1)",
    });
  }, []);

  useEffect(() => {
    ScrollUp();
  }, []);
  return (
    <>
      <Transition>
        <Navigation theme="dark" hero={hero} />
        <main>
          <section id="nurture-hero" ref={hero}>
            <div className="wrapper">
              <div className="title">
                <TextReveal
                  paragraphs={[
                    "Nurture",
                    '<span class="italic">your senses</span>',
                  ]}
                  style="heading"
                />
              </div>
            </div>
            <Fade delay={1}>
              <Marquee>
                <Image
                  width={900}
                  height={1200}
                  className="image"
                  src="/marquee/1.jpg"
                  alt="\0"
                  priority
                />
                <Image
                  width={900}
                  height={1200}
                  className="image"
                  src="/marquee/2.jpg"
                  alt="\0"
                  priority
                />
                <Image
                  width={900}
                  height={1200}
                  className="image"
                  src="/marquee/3.jpg"
                  alt="\0"
                  priority
                />
                <Image
                  width={900}
                  height={1200}
                  className="image"
                  src="/marquee/4.jpg"
                  alt="\0"
                  priority
                />
                <Image
                  width={900}
                  height={1200}
                  className="image"
                  src="/marquee/5.jpg"
                  alt="\0"
                  priority
                />
                <Image
                  width={900}
                  height={1200}
                  className="image"
                  src="/marquee/6.jpg"
                  alt="\0"
                  priority
                />
                <Image
                  width={900}
                  height={1200}
                  className="image"
                  src="/marquee/7.jpg"
                  alt="\0"
                  priority
                />
              </Marquee>
            </Fade>
          </section>
          <div id="main">
            <section id="nurture-content">
              <div className="wrapper">
                <div className="flex h-center">
                  <div className="paragraph">
                    At LOIRIEN Mara, we are masters in the art of well-being. We
                    create spaces that nurture mind and body, inspired by the
                    unique influences of the Mara. Indulge in spa treatments
                    that rejuvenate you. Delight in farm-to-table culinary
                    experiences, celebrating fresh ingredients from our
                    regenerative farm. Enjoy personalized meal plans crafted by
                    our star chef to cater to every need and desire.
                  </div>
                </div>
                <div className="w-full flex h-center mgbottom-md">
                  <Image
                    width={900}
                    height={1200}
                    className="photo"
                    src="/nurture-photo.svg"
                    alt="\0"
                  />
                </div>
                <TextReveal
                  paragraphs={[
                    '<span class="italic">Slow down</span>, our',
                    "clocks are on Mara time",
                  ]}
                  style="heading"
                />
                <div className="row mgtop-xl">
                  <div className="col-md-6">
                    <TextReveal
                      paragraphs={[
                        '<span class="italic">Holistic</span>',
                        "Wellness",
                      ]}
                      style="subheading"
                    />
                    <div className="paragraph full">
                      In the Mara&apos;s energetic heart, harmonize your mind,
                      body, and spirit. Indulge in treatments from our signature
                      spa menu that soothe and rejuvenate. Unwind in our sauna
                      and steam room, or enjoy in-room treatments and other
                      wellness amenities. Each practice integrates ancient
                      wisdom with modern wellness techniques.
                    </div>
                    <TextReveal
                      paragraphs={[
                        '<span class="italic">Farm-to-Table</span>',
                        "Culinary Journies",
                      ]}
                      style="subheading"
                    />
                    <div className="paragraph full">
                      Savor the finest farm-to-table cuisine with produce
                      harvested fresh from our regenerative farm, crafted into
                      gourmet dishes by our star chef. Personalized meal plans
                      cater to all dietary preferences, from gluten-free to
                      gourmet indulgences. Enjoy cooking classes that turn
                      farm-harvested ingredients into culinary masterpieces.
                      Each meal celebrates nature's bounty, nourishing body and
                      soul.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fixed" ref={fixedRef}>
                      <div className="imagewrap scrollwrap">
                        <Image
                          width={1500}
                          height={900}
                          className="textmock first-mock"
                          src="/gallery/kulaalfood.jpg"
                          alt="\0"
                        />
                        <Image
                          width={1500}
                          height={900}
                          className="textmock second-mock"
                          src="/gallery/picnic.jpg"
                          alt="\0"
                        />
                        <Image
                          width={1500}
                          height={900}
                          className="textmock third-mock"
                          src="/gallery/massage.jpg"
                          alt="\0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="plax"></section>
          <Footer />
        </main>
      </Transition>
    </>
  );
}
