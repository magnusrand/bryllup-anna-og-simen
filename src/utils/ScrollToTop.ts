import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopProps = {
  scrollElement: React.MutableRefObject<any>;
};

export const ScrollToTop = ({ scrollElement }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollElement.current) scrollElement.current.scrollTo(0, 0);
  }, [pathname, scrollElement]);

  return null;
};
