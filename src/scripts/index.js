import createLogger from './logger/logger';
import '../styles/index.scss';
import Preview from '../images/preview.jpg';

const logger = createLogger();

logger.log('Test log');
logger.error('Error log');

// console.log('logger.getLogs() :>> ', logger.getLogs());

const img = document.createElement('IMG');

img.src = Preview;
img.alt = 'Стартовый шаблон Webpack';

document.getElementById('main').prepend(img);
