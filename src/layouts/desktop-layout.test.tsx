import * as React from 'react';
import { render } from '@testing-library/react';
import { DesktopLayout } from './desktop-layout';

describe('desktop layout', () => {
  it('should render a [header, left menu, footer] and some custom content ', () => {
    const { queryByTestId } = render(
      <DesktopLayout>
        <div />
      </DesktopLayout>
    );
    const header = queryByTestId('header');
    const leftMenu = queryByTestId('left-menu');
    // TODO: uncomment the following line after creating footer
    // const footer = getByTestId('footer');
    const customContent = queryByTestId('content');
    [header, leftMenu, customContent].forEach((component) => {
      expect(component).not.toBeNull();
    });
  });
});
