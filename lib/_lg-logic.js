module.exports = {

  /**
   * Generates the calc value for LostGrid
   * @param {string} fraction
   * @param {string} gutter
   * @param {number} rounder
   * @param {string} unit
   * @param {boolean} [important=false] - Whether "!important" should be added to the end
   * @returns {string}
   */
  calcValue: function(fraction, gutter, rounder, unit, important=false) {
    var calcValue = '';
    var gutterLogic = '';

    if (!gutter) {
      gutter = '0';
    }

    if (gutter !== '0') {
      gutterLogic = ` - (${gutter} - ${gutter} * ${fraction})`;
    }

    if (!unit) {
      unit = '%';
    }

    calcValue = `calc(${rounder}${unit} * ${fraction}${gutterLogic})`;

    if (important) {
      calcValue = calcValue + '!important';
    }
    return calcValue;
  },
  validateUnit: function(value, validUnits) {
    var validation = false;

    if (validUnits.indexOf(value) !== -1) {
      validation = true;
    }
    return validation;
  },
  parseLostProperty: function(nodes, propertyName, defaultPropertyValue) {
    var propertyValue = defaultPropertyValue;

    nodes.forEach(declaration => {
      if (declaration.prop === propertyName) {
        propertyValue = declaration.value;
        declaration.remove();
      }
    });

    return propertyValue;
  }
};
