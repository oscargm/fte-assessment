import * as React from 'react';

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = React.useState<boolean>(true);

  const onWindowResize = () => {
    window.innerWidth < 800 && isDesktop
      ? setIsDesktop(false)
      : window.innerWidth >= 800 && !isDesktop && setIsDesktop(true);
  };
  React.useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [window.innerWidth]);
  return [isDesktop] as const;
};
