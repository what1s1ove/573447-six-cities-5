module.exports = {
  verbose: true,
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./src/configs/setup-tests.js'],
  snapshotSerializers: ['./node_modules/enzyme-to-json/serializer'],
};
