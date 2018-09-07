import { STAGE_TITLE, STAGE_GAME, STAGE_ENDING, FONT } from './constants';
import { camera, pressingKeys, stage } from './models';

const description = [
  'The terrorists broke into the planetary defense system',
  'in an attempt to destroy the 13 planets in the system.',
  'The only way to stop it is to take the satellite station',
  'on the planet offline.'
];

let _stage = STAGE_TITLE;

export default context => {
  if (_stage === STAGE_TITLE) {
    drawTitle(context);
  }

  if (pressingKeys[13]) {
    stage.code = STAGE_GAME;
  }

  _stage = stage.code;
};

function drawTitle(context) {
  camera.vx = 0;
  camera.vy = 0;
  camera.vr = 0;
  camera.zoom = 15;

  context.fillStyle = '#000';
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);

  context.shadowColor = '#fff';
  context.shadowBlur = 20;
  context.textAlign = 'center';
  context.fillStyle = '#fff';

  context.font = `72px ${FONT}`;
  context.fillText('G R A V I T Y', window.innerWidth / 2, window.innerHeight / 5);

  context.font = `24px ${FONT}`;
  context.fillText('Press Enter to start', window.innerWidth / 2, window.innerHeight * 0.8);

  context.font = `16px ${FONT}`;
  context.textAlign = 'left';
  description.map((text, index) =>
    context.fillText(text, window.innerWidth / 2 - 270, window.innerHeight * 0.66 + 20 * index)
  );

  context.shadowBlur = 0;
}