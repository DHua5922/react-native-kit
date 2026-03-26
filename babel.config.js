module.exports = function (api) {
  const isTest = api.env("test");
  api.cache.using(() => isTest);

  return {
    presets: isTest
      ? ["module:@react-native/babel-preset"]
      : [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
  };
};
