import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll position on every route change so a page never opens
// mid-scroll after navigating from a long page.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
