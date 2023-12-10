import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const UseLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const setLoading = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    };

    setLoading();

    return () => {};
  }, [location.pathname]);

  return isLoading;
};

export default UseLoading;
