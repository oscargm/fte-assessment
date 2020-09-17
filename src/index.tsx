import * as React from "react";
import * as ReactDOM from "react-dom";
import "fontsource-roboto/400.css";
import { DesktopLayout } from "./layouts/desktop-layout";
import { MainScene } from "./scenes/main-scene";
import { RocheThemeProvider } from "./providers";

const Application = () => (
  <RocheThemeProvider>
    <DesktopLayout>
      <MainScene />
    </DesktopLayout>
  </RocheThemeProvider>
);
ReactDOM.render(<Application />, document.getElementById("root"));
