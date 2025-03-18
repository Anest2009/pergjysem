import React, { useEffect, useRef } from 'react';

export const DistortImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      img.style.transform = `scale(1.1) translate(${x * 20}px, ${y * 20}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`transition-transform duration-100 ${className}`}
    />
  );
};