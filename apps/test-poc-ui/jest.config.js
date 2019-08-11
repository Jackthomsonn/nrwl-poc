module.exports = {
  name: 'test-poc-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/test-poc-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
