/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

import { motion } from 'framer-motion'

import { slide, opacity, perspective } from './Animations'

interface ITransition {
  children: ReactNode
}

function Transition({ children }: ITransition) {
  const anim = (variants: any) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants,
    }
  }
  return (
    <div className="inner">
      <motion.div className="slide" {...anim(slide)} />
      <motion.div className="page" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  )
}

export default Transition
