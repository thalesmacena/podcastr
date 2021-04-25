/*
:root {
  --white: #FFF;

  --gray-50: #F7F8FA;
  --gray-100: #E6E8EB;
  --gray-200: #AFB2B1;
  --gray-500: #808080;
  --gray-800: #494D4B;

  --green-500: #04D361;
  
  --purple-300: #9F75FF;
  --purple-400: #9164FA; 
  --purple-500: #8257E5;
  --purple-800: #6F48C9;
}
*/

import { darken, lighten } from 'polished';

export const lightTheme = {
  colors: {
    lighten: '#FFF',

    shape: '#F7F8FA',
    line: '#E6E8EB',
    body: '#AFB2B1',
    bodyMedium: '#808080',
    heading: '#494D4B',

    dot: '#DDDDDD',
    switch: '#BBBBBB',
    smallTextPlayer: '#DCCDFF',
    listHeaderText: '#ABA8B2',

    green500: '#04D361',

    purple300: '#9F75FF',
    purple400: '#9164FA',
    purple500: '#8257E5',
    purple800: '#6F48C9'
  },
  podcastImageBackground:
    'linear-gradient(143.8deg, rgba(145,100,250,0.8) 0%, rgba(145,100,250,0) 100%)',
  buttonHover: `${darken(0.05, '#FFF')}`
};

export const darkTheme = {
  colors: {
    lighten: '#151719',
    shape: '#1c1e1f',
    line: '#363b3d',
    body: '#444A4D',
    bodyMedium: '#988f81',
    heading: '#b9b2a9',

    dot: '#2B2F31',
    switch: '#43494c',
    smallTextPlayer: '#26292B',
    listHeaderText: '#464C4F',

    green500: '#03A94E',

    purple300: '#290086',
    purple400: '#2E058E',
    purple500: '#3C1691',
    purple800: '#4C2C95'
  },
  podcastImageBackground:
    'linear-gradient(143.8deg, rgba(60,22,145,0.8) 0%, rgba(60,22,145,0) 100%)',
  buttonHover: `${lighten(0.05, '#181A1B')}`
};
