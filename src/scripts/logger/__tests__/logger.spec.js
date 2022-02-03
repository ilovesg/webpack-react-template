import { createLogger } from "../logger";

it('Should return stored logs', () => {
  const logger = createLogger('user login');

  expect(logger.getLogs()).toEqual([]);
});

it('Should save log message', () => {
  const logger = createLogger('User login');

  logger.log('Login success!');

  expect(logger.getLogs()).toEqual(['Log | User login | Login success!']);
});

it('Should save log error', () => {
  const logger = createLogger('User login');
  logger.error('Login failed!');

  expect(logger.getLogs()).toEqual(['Error | User login | Login failed!']);
});