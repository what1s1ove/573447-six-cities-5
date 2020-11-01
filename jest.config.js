module.exports = {
  verbose: true,
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./src/configs/setup-tests.ts'],
  snapshotSerializers: ['./node_modules/enzyme-to-json/serializer'],
};
