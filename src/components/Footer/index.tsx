import Image from 'next/image'

import styles from './Footer.module.scss'
import TextReveal from '../Animations/Text/TextReveal'

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.left}>
        <Image
          width={800}
          height={500}
          className={styles.logo}
          src="/footer.svg"
          alt="LOIRIEN Mara"
        />
      </div>
      <div className={styles.right}>
        <div className="flex dir-column v-end h-end">
          <TextReveal
            paragraphs={['Contact <span class="italic">us</span>']}
            style={styles.heading}
          />
          <div className={`${styles.contact} link`}>contact@loiriemara.com</div>
        </div>
        <ul className={styles.items}>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <div className={styles.divider}></div>
          <li>Instagram</li>
          <li>Tiktok</li>
        </ul>
      </div>
    </footer>
  )
}
