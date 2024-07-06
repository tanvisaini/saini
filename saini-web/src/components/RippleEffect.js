import React, { useEffect, useRef } from 'react';
import flower from '../assets/Flower.png';

const RippleEffect = () => {
  const rippleContainerRef = useRef(null);

  useEffect(() => {
    const $ = window.jQuery;

    if ($ && $.fn.ripples) {
      const $rippleContainer = $(rippleContainerRef.current);
      $rippleContainer.ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.24,
      });

      // Cleanup function to remove the ripples effect on component unmount
      return () => {
        $rippleContainer.ripples('destroy');
      };
    } else {
      console.error('Ripples plugin is not initialized');
    }
  }, []);

  return (
    <div
      ref={rippleContainerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'url(flower)',
        backgroundPosition: 'left top',
        backgroundSize: 'cover',
        zIndex: -1,
      }}
    ></div>
  );
};

export default RippleEffect;
