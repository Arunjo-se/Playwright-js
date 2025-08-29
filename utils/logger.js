class Logger {
  static info(message) {
    console.log(`ℹ️ [INFO]: ${message}`);
  }

  static warn(message) {
    console.warn(`⚠️ [WARN]: ${message}`);
  }

  static error(message) {
    console.error(`❌ [ERROR]: ${message}`);
  }

  static debug(message) {
    if (process.env.DEBUG === "true") {
      console.log(`🐞 [DEBUG]: ${message}`);
    }
  }
}

export default Logger;
