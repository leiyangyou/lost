/* globals describe, require, it, beforeEach */

'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;

var lgCloneAllBefore = require('./_lg-clone-all-before');

chai.use(sinonChai);

describe('lgCloneAllBefore', function () {
  var decl = {};

  beforeEach(function () {
    decl.cloneBefore = function () {};
  });

  it('calls "cloneBefore" correctly', function () {
    decl.cloneBefore = sinon.spy();
    lgCloneAllBefore({'margin-left': '0'}, decl);
    expect(decl.cloneBefore)
      .to.have.been.calledWith({
        prop: 'margin-left',
        value: '0',
      });
  });
});
