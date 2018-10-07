const COLOR_RESET = '%s\x1b[0m';
const NEW_LINE = '\n';
const listOfColors = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

class ShowStatusBuild {
  constructor(initData = {}) {
    this.colors = this.combinedColorsParam(initData.colors || {});
    this.success = initData.success || 'Build Passed!';
    this.failed = initData.failed || 'Build Failed';
    this.showErrorsNumber = initData.showErrorsNumber || false;
  }

  updateColors(colors, type, defaultColor) {
    if (colors[type] && (colors[type] in listOfColors)) {
      return {
        ...colors,
        [type]: listOfColors[colors[type]],
      };
    } else {
      return {
        ...colors,
        [type]: listOfColors[defaultColor],
      };
    }
  }

  combinedColorsParam(colors) {
    if (Object.prototype.toString.call(colors).slice(8, -1) !== 'Object') {
      console.warn('Please set type "Object" to colors property');
      return { success: listOfColors.green, failed: listOfColors.red };
    }

    let updatedColors = { ...colors };
    updatedColors = this.updateColors(updatedColors, 'success', 'green');
    updatedColors = this.updateColors(updatedColors, 'failed', 'red');
    return updatedColors;
  }

  getCorrectWording(errorCount) {
    const correctEnding = errorCount > 1 ? 'errors' : 'error';

    return this.showErrorsNumber
      ? `${this.failed} with ${errorCount} ${correctEnding}`
      : this.failed;
  }

  output(content, additionalInfo) {
    console.info('============================================================');
    console.info(NEW_LINE);
    console.info(content, additionalInfo)
    console.info(NEW_LINE);
    console.info('============================================================');
  }

  apply(compiler) {
    compiler.hooks.done.tap('ShowStatusBuild', (status) => {
      setTimeout(() => {
        if (!status.hasErrors()) {
          this.output(`${this.colors.success}${COLOR_RESET}`, this.success);
          return;
        }

        const errorCount = status.compilation.errors.length;
        this.output(`${this.colors.failed}${COLOR_RESET}`, this.getCorrectWording(errorCount));
      }, 0);
    });
  }
}

module.exports = ShowStatusBuild;
