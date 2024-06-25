import { useEffect, useRef } from "react";

import Transition from "@/components/Transition";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollUp from "@/utils/scrollUp";
import TextReveal from "@/components/Animations/Text/TextReveal";

export default function Enquire() {
  const hero = useRef(null);

  useEffect(() => {
    ScrollUp();
  }, []);
  return (
    <>
      <Transition>
        <Navigation theme="dark" hero={hero} />
        <main>
          <section id="enquire" ref={hero}>
            <div className="wrapper">
              <div className="title">
                <TextReveal
                  paragraphs={['<span class="italic">Enquire</span>']}
                  style="heading"
                />
              </div>
              <rr-resnova
                widget-id="9bedce47-df65-43b1-b73d-3240436b35f8"
                api-url="https://resnova.resrequest.com/api/"
              />
            </div>
          </section>
          <section className="plax"></section>
          <Footer />
        </main>
      </Transition>
    </>
  );
}
