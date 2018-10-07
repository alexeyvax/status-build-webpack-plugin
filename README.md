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

Then you can see:
- default message when the build is success
![default-success](https://github.com/alexeyvax/status-build-webpack-plugin/blob/master/examples/default-success.png?raw=true)

- default message when the build is failed
![default-failed](https://github.com/alexeyvax/status-build-webpack-plugin/blob/master/examples/default-failed.png?raw=true)

- when you set the custom message(image) and build is success
![success-with-image](https://github.com/alexeyvax/status-build-webpack-plugin/blob/master/examples/success-with-image.png?raw=true)

- when you set the custom message(image) and build is failed
![failed-with-image](https://github.com/alexeyvax/status-build-webpack-plugin/blob/master/examples/failed-with-image.png?raw=true)

If you want to see [more](https://github.com/alexeyvax/status-build-webpack-plugin/blob/master/examples/index.js) please see examples

## API

### - colors

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

### - success

  description: *show this content when build is success*

  type **String**

  default:
```
success: 'Build Passed!'
```

### - failed

  description: *show this content when build is failed*

  type **String**

  default:
```
failed: 'Build Failed'
```

### - showErrorsNumber

  description: *show errors number when build is failed*

  type **Boolean**

  default:
```
showErrorsNumber: false
```

## Keywords

**build status**   **status image**   **status**   **webpack**   **plugin**

## License

[MIT](https://github.com/alexeyvax/status-build-webpack-plugin/blob/master/LICENSE.md)
