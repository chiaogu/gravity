import { OBJECT_SATELLITE_STATION } from './constants';

export const camera = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  vr: 0,
  zoom: 1,
  rotaion: 0,
  isJumping: false,
  fuel: 100,
  planet: undefined
};

export const planets = [
  {
    name: 'Nadium',
    x: 0,
    y: 2010,
    radius: 2000,
    gravity: 0.05,
    color: {
      land: '#961F0E',
      atmosphere: '#D16A20'
    },
    objects: [[0, OBJECT_SATELLITE_STATION, false]]
  },
  {
    name: 'Catlax',
    x: -200,
    y: -2000,
    radius: 100,
    gravity: 0.05,
    color: {
      land: '#fff',
      atmosphere: '#00f'
    },
    objects: [[200, OBJECT_SATELLITE_STATION, false]]
  },
  {
    name: 'Kapbula',
    x: 0,
    y: -12010,
    radius: 2000,
    gravity: 0.02,
    color: {
      land: '#fff',
      atmosphere: '#ff0'
    },
    objects: [[180, OBJECT_SATELLITE_STATION, false]]
  }
];

export const character = {
  width: 5,
  height: 5 * 1.618
};

export const pressingKeys = {};

export const objectives = {
  savedPlanets: {}
}

export const radarWaves = [];