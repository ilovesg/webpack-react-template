export const createLogger = (name) => {
  const logs = [];

  return {
    log(message) {
      logs.push(`Log | ${name} | ${message}`);
    },

    error(errorText) {
      logs.push(`Error | ${name} | ${errorText}`);
    },

    getLogs() {
      return logs;
    },
  }
};