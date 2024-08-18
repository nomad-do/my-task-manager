module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
