"use client";

import {motion, AnimatePresence} from 'framer-motion';

export default function AnimationDivX({children, delay}: {children: React.ReactNode, delay: number}) {
        return (
            <AnimatePresence>
                <motion.div
                initial={{opacity: 0, x: -150}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: delay}}
                >
                {children}
                </motion.div>
            </AnimatePresence> 
        ) 
}