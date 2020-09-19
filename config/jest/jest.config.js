module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './file-mock.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/build', '<rootDir>/dist'],
  coverageReporters: ['text', 'html', 'lcov'],
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  reporters: ['default'],
  restoreMocks: true,
};
