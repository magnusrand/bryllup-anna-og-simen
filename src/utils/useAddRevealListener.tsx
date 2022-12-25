import React, { useEffect } from "react";
import { Location } from "react-router-dom";

export const useAddRevealListener = (
  scrollElement: React.MutableRefObject<null>,
  currentPath: Location
) => {
  useEffect(() => {
    const currentScrollElement = scrollElement.current;
    revealOrHideElement();
    //@ts-expect-error possibly null
    currentScrollElement.addEventListener("scroll", revealOrHideElement);

    return () =>
      //@ts-expect-error possibly null
      currentScrollElement.removeEventListener("scroll", revealOrHideElement);
  }, [scrollElement, currentPath]);
};

const revealOrHideElement = () => {
  const revealElements = document.querySelectorAll(
    ".reveal-children :is(p, h1, h2, h3):not(.page-header)"
  );

  revealElements.forEach((domElement) => {
    const viewHeight = window.innerHeight;
    const elementTopPosition = domElement.getBoundingClientRect().top;
    const pixelsOfElementInViewBeforeReveal = 30;

    const topOfElementIsWithinViewThreshold =
      elementTopPosition < viewHeight - pixelsOfElementInViewBeforeReveal;

    if (topOfElementIsWithinViewThreshold) {
      domElement.classList.add("active");
    } else {
      domElement.classList.remove("active");
    }
  });
};
