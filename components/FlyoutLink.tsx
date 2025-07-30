'use client';

import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type FlyoutLinkPropsT = {
  children: string;
  href: string;
  FlyoutContent: ReactNode;
};

export default function FlyoutLink({
  children,
  href,
  FlyoutContent,
}: FlyoutLinkPropsT) {
  const [open, setOpen] = useState(false);

  const ShowFlyout = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='relative h-fit w-fit'
    >
      <a href={href} className='relative text-white'>
        {children}
        <span
          style={{ transform: ShowFlyout ? 'scaleX(1)' : 'scaleX(0)' }}
          className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out'
        />
      </a>
      <AnimatePresence>
        {ShowFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className='absolute left-1/2 top-12 -translate-x-1/2 bg-white text-black'
          >
            <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
            <div className=' absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45  bg-white' />
            {FlyoutContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    //
  );
}
