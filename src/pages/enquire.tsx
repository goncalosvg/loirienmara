import { useEffect, useRef } from "react";

import TextReveal from "@/components/Animations/Text/TextReveal";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Transition from "@/components/Transition";
import ScrollUp from "@/utils/scrollUp";

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
              <div className="enquire">To inquire about availability or to learn more about our bespoke experiences, please contact our team at <a className="link" href="mailto:reservations@loirienmara.com">reservations@loirienmara.com</a>, or via WhatsApp or phone at <span className="link">+254 (0) 798 371 180</span>. We look forward to welcoming you home to LOIRIEN Mara.</div>
            </div>
          </section>
          <section className="plax"></section>
          <Footer />
        </main>
      </Transition>
    </>
  );
}
