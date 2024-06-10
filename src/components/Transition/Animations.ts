export const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 1,
    y: -300,
    opacity: 0,
    brightness: 0.2,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

export const slide = {
  initial: {
    y: '100vh',
  },
  enter: {
    y: '100vh',
  },
  exit: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      type: 'easeIn',
      duration: 0.3,
    },
  },
  exit: {
    opacity: 1,
  },
}
