"use client";

import { useEffect, useRef } from 'react';
import twemoji from 'twemoji';

interface TwemojiTextProps {
  children: string;
  className?: string;
}

const TwemojiText = ({ children, className }: TwemojiTextProps) => {
  const rootRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (rootRef.current) {
      // twemoji.parse() finds emojis in the text and replaces them with <img> tags
      // The images are loaded from Twitter's CDN
      twemoji.parse(rootRef.current, {
        // Load SVGs from a reliable CDN (cdnjs) matching installed version
        base: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/',
        folder: 'svg',
        ext: '.svg',
        className: 'twemoji',
      });
    }
  }, [children]);

  return (
    <span ref={rootRef} className={className}>
      {children}
    </span>
  );
};

export default TwemojiText;
