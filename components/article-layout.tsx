'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { GridItemStyle } from './grid-item';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
};

interface ArticleLayoutProps {
  children: ReactNode;
  title?: string;
}

const ArticleLayout = ({ children, title }: ArticleLayoutProps) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {children}
      <GridItemStyle />
    </>
  </motion.article>
);

export default ArticleLayout;

