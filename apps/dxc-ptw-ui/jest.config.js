module.exports = {
  name: 'dxc-ptw-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dxc-ptw-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
