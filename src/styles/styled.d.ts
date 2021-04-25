/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

interface Theme {
  colors: {
    lighten: string;
    shape: string;
    line: string;
    body: string;
    bodyMedium: string;
    heading: string;

    dot: string;
    switch: string;
    smallTextPlayer: string;
    listHeaderText: string;

    green500: string;

    purple300: string;
    purple400: string;
    purple500: string;
    purple800: string;
  };
  podcastImageBackground: string;
  buttonHover: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
