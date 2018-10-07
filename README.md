# status-build-webpack-plugin

This plugin provide user-friendly messages or images about build status.

## Installation

```
npm install --save-dev status-build-webpack-plugin

or

npm install -D status-build-webpack-plugin

or

yarn add -D status-build-webpack-plugin
```

## Usage

```
const ShowStatusBuild = require('status-build-webpack-plugin');

{
  plugins = [
    new ShowStatusBuild(),
  ];
}
```

## API

- **colors**

  description: *colors for output content, you can use colors from collection, please see below:*

    colors collection:
    - black
    - red
    - green
    - yellow
    - blue
    - cyan
    - white

  type **Object**

  default:
```
colors: {
  success: 'green',
  failed" 'red',
}
```
-------------------------------------------------------------------------------
- **success**

  description: *show this content when build is success*

  type **String**

  default:
```
success: 'Build Passed!'
```
-------------------------------------------------------------------------------
- **failed**

  description: *show this content when build is failed*

  type **String**

  default:
```
failed: 'Build Failed'
```
-------------------------------------------------------------------------------
- **showErrorsNumber**

  description: *show errors number when build is failed*

  type **Boolean**

  default:
```
showErrorsNumber: false
```
-------------------------------------------------------------------------------

## Keywords

**build status**   **status image**   **status**   **webpack**   **plugin**

## License

[MIT](https://github.com/alexeyvax/status-build-webpack-plugin/blob/master/LICENSE.md)
