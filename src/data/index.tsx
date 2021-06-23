import React from 'react';
import Greeter from '../views/Greeter';
import Diploma from '../views/Diploma';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, pink } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import sweData from './json/swe.json';
import mbaData from './json/mba.json';
import pkg from '../../package.json';

import { calculateDiplomaProgress } from '../utils';
import { faBluetooth } from '@fortawesome/free-brands-svg-icons';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
  {
    name: "Bachelor's degree in Computer Science",
    url: '/bsc',
    icon: 'graduation-cap',
    isInternal: true,
    badge: `${calculateDiplomaProgress(sweData, 0)}%`,
    comp: () => <Diploma diplomaData={sweData} />,
  },
  {
    name: 'Self Taught',
    url: '/st',
    icon: 'graduation-cap',
    isInternal: true,
    badge: `${calculateDiplomaProgress(mbaData, 0)}%`,
    comp: () => <Diploma diplomaData={mbaData} />,
  },
];

export const tabs: TabLink[] = [
  {
    name: 'about-me.html',
    url: '/about',
    icon: ['fab', 'html5'],
    color: pink,
    mdFileName: 'about',
  },
  {
    name: 'skills.js',
    url: '/skills',
    icon: ['fab', 'js'],
    color: jsOrange,
    mdFileName: 'skills',
  },
  {
    name: '.educationrc',
    url: '/education',
    icon: 'university',
    color: midBlue,
    mdFileName: 'education',
  },
  {
    name: 'projects.config',
    url: '/projects',
    icon: 'sliders-h',
    color: green,
    mdFileName: 'projects',
  },
  {
    name: 'contact-me.css',
    url: '/contact',
    icon: ['fab', 'css3'],
    color: midBlue,
    mdFileName: 'contact',
  },
];
