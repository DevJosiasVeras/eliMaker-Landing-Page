"use client";

import {motion, AnimatePresence} from 'framer-motion';

export default function AnimateVisual({children} : {children: React.ReactNode}){
    return (
        <AnimatePresence>
            <motion.div
            initial={"hidden"}
            whileInView={{opacity: [0,1], x: [-150,0]}}
            transition={{delay: 0.2, duration: 1}}
            >
            {children}
            </motion.div>
        </AnimatePresence> 
    ) 
}