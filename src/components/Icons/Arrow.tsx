interface IArrow {
  style: string
  color: string
}

export default function Arrow({ style, color }: IArrow) {
  return (
    <svg
      width="21"
      height="12"
      viewBox="0 0 21 12"
      className={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7238 6.58838C20.0487 6.74094 20.4358 6.6012 20.5884 6.27625C20.741 5.95129 20.6012 5.56419 20.2763 5.41162L19.7238 6.58838ZM12.2242 0.912483C14.3951 3.55631 16.2622 4.96313 19.7238 6.58838L20.2763 5.41162C16.967 3.85789 15.2621 2.56367 13.2289 0.0875169L12.2242 0.912483Z"
        fill={color}
      />
      <path
        d="M20 6C16.0253 7.79653 14.4369 9.00223 12.7266 11.5"
        stroke={color}
        strokeWidth="1.3"
      />
      <path
        d="M0.198975 6C7.93136 6 12.2666 6 19.999 6"
        stroke={color}
        strokeWidth="1.3"
      />
    </svg>
  )
}
