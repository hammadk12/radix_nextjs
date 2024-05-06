import { useRef } from 'react';

const useScrollTo = () => {
  const ref = useRef(null);

  const scrollTo = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return { ref, scrollTo };
};

export default useScrollTo;
