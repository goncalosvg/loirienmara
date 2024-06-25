import Image from 'next/image'

import styles from './Footer.module.scss'
import TextReveal from '../Animations/Text/TextReveal'
import Link from 'next/link'

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
          <li className={styles.link}>Privacy Policy</li>
          <li className={styles.link}>Terms of Service</li>
          <div className={styles.divider}></div>
          <Link
            href="https://www.instagram.com/loirienmara/"
            passHref
            target="_blank"
          >
            <li>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99805 3C6.13905 3 3 6.14195 3 10.002V20.002C3 23.861 6.14195 27 10.002 27H20.002C23.861 27 27 23.858 27 19.998V9.99805C27 6.13905 23.858 3 19.998 3H9.99805ZM22 7C22.552 7 23 7.448 23 8C23 8.552 22.552 9 22 9C21.448 9 21 8.552 21 8C21 7.448 21.448 7 22 7ZM15 9C18.309 9 21 11.691 21 15C21 18.309 18.309 21 15 21C11.691 21 9 18.309 9 15C9 11.691 11.691 9 15 9ZM15 11C13.9391 11 12.9217 11.4214 12.1716 12.1716C11.4214 12.9217 11 13.9391 11 15C11 16.0609 11.4214 17.0783 12.1716 17.8284C12.9217 18.5786 13.9391 19 15 19C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15C19 13.9391 18.5786 12.9217 17.8284 12.1716C17.0783 11.4214 16.0609 11 15 11Z"
                  fill="#282828"
                />
              </svg>
            </li>
          </Link>
          <Link
            href="https://www.tiktok.com/@loirienmara"
            passHref
            target="_blank"
          >
            <li>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6 2.40002H5.40002C3.74582 2.40002 2.40002 3.74582 2.40002 5.40002V24.6C2.40002 26.2542 3.74582 27.6 5.40002 27.6H24.6C26.2542 27.6 27.6 26.2542 27.6 24.6V5.40002C27.6 3.74582 26.2542 2.40002 24.6 2.40002ZM22.2036 13.3938C22.0674 13.4064 21.9294 13.4148 21.7896 13.4148C20.2158 13.4148 18.8328 12.6054 18.0282 11.382C18.0282 14.5914 18.0282 18.243 18.0282 18.3042C18.0282 21.1296 15.7374 23.4204 12.912 23.4204C10.0866 23.4204 7.79582 21.1296 7.79582 18.3042C7.79582 15.4788 10.0866 13.188 12.912 13.188C13.0188 13.188 13.1232 13.1976 13.2282 13.2042V15.7254C13.1232 15.7128 13.02 15.6936 12.912 15.6936C11.4696 15.6936 10.3008 16.8624 10.3008 18.3048C10.3008 19.7472 11.4696 20.916 12.912 20.916C14.3544 20.916 15.6282 19.7796 15.6282 18.3372C15.6282 18.2802 15.6534 6.58082 15.6534 6.58082H18.063C18.2898 8.73542 20.0292 10.4358 22.2036 10.5918V13.3938Z"
                  fill="#282828"
                />
              </svg>
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  )
}
