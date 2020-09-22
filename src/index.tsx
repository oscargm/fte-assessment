import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'fontsource-roboto/400.css';
import { DesktopLayout, MobileLayout } from './layouts';
import { MainScene } from './scenes';
import { RocheThemeProvider } from './providers';
import { useIsDesktop } from './common/hooks/use-is-desktop';

const Application: React.FC = () => {
  const [isDesktop] = useIsDesktop();

  return (
    <RocheThemeProvider>
      {isDesktop ? (
        <DesktopLayout>
          <MainScene />
        </DesktopLayout>
      ) : (
        <MobileLayout>
          <MainScene />
        </MobileLayout>
      )}
    </RocheThemeProvider>
  );
};
ReactDOM.render(<Application />, document.getElementById('root'));
