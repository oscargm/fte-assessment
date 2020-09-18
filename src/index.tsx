import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'fontsource-roboto/400.css';
import { DesktopLayout } from './layouts';
import { MainScene } from './scenes';
import { RocheThemeProvider } from './providers';

const Application = () => (
  <RocheThemeProvider>
    <DesktopLayout>
      <MainScene />
    </DesktopLayout>
  </RocheThemeProvider>
);
ReactDOM.render(<Application />, document.getElementById('root'));
