# Chrome Manifest Plugin
This plugin generates a Chrome Manifest file.

## Install
This repository is not currently published to `npm`, so add to your project using `KeiserCorp/webpack-plugin-webmanifest`.

## Usage
```js
var ChromeManifestPlugin = require('chrome-manifest-plugin')

module.exports = {
  entry: {...},
  output: {...},
  module: {...},
  plugins: [
    new ChromeManifestPlugin({
      filename: "manifest",
      filetype: "json",
      variableName: "manifest"
    })
  ]
};
```

## Copyright and License
Copyright [Keiser Corporation](http://keiser.com/) under the [MIT license](LICENSE.md).
