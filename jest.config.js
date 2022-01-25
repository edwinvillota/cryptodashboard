module.exports = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src', '__dirname'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '^@theme(.*)$': '<rootDir>/src/theme$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@page(.*)$': '<rootDir>/src/page$1',
    '^@models(.*)$': '<rootDir>/src/models$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@hook(.*)$': '<rootDir>/src/hook$1',
    '^@public(.*)$': '<rootDir>/src/public$1',
    '^@sagas(.*)$': '<rootDir>/src/sagas$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@app(.*)$': '<rootDir>/src/app$1',
    '^@tests(.*)$': '<rootDir>/src/utils/test-utils$1',
  },
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
};
