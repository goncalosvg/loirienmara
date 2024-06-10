import Image from 'next/image'

import styles from './Preloader.module.scss'
import ImageReveal from '../Reveal/Image'

function Preloader() {
  return (
    <>
      <section id={styles.preloader}>
        <div className={styles['image-wrap']}>
          <ImageReveal delay={1.5}>
            <Image
              width={800}
              height={500}
              className={styles.credits}
              src="/credits.svg"
              alt="\0"
            />
          </ImageReveal>
        </div>
      </section>
    </>
  )
}

export default Preloader
