module.exports = function () {
  return {
    files: [
      'lib/**/*.js'
    ],

    tests: [
      'spec/**/*.spec.js'
    ],

    env: {
      type: 'node'
    },

    testFramework: 'jasmine'
  };
};