import { useEffect, useState } from 'react';

const useRedirect = () => {
  const [redirect, setRedirect] = useState(false);
  const [redirectHome, setRedirectHome] = useState(false);
  return {
    redirect,
    redirectHome,
    setRedirect,
    setRedirectHome,
  };
};

export default useRedirect;
