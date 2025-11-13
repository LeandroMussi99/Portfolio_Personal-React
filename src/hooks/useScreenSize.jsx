import { useState, useEffect } from 'react';

const useScreenSize = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);
    
    // Función de limpieza para remover el event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]); // Vuelve a ejecutar si el breakpoint cambia (aunque aquí es estático)

  return { isMobile, breakpoint };
};

export default useScreenSize;