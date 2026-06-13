/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',

  // Procura automaticamente por arquivos de teste
  testMatch: [
    '**/__tests__/**/*.test.js',
    '**/?(*.)+(spec|test).js'
  ],

  collectCoverage: true,

  collectCoverageFrom: [
    'utils-*.js',
    '!**/node_modules/**'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'text',
    'lcov',
    'html'
  ],

  verbose: true
};