/**
 * Performs the "cloneBefore" method for each key/value pair given
 *
 * @param {object} props - Key/Value pairs for each CloneBefore
 * @param {Declaration} decl - The PostCSS Declaration
 *
 * @example
 *
 * cloneAllBefore({
 *   'margin-left': '0 !important',
 *   'margin-right': lostOffsetGutter + ' !important',
 *   declaration
 * });
 */
module.exports = function lgCloneAllBefore(props, decl) {
  Object.keys(props).forEach(function traverseProps(prop) {
    decl.cloneBefore({
      prop: prop,
      value: props[prop]
    });
  });
};
