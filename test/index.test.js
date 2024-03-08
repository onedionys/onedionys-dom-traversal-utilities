const assert = require('assert');
const domTraversalUtils = require('../src/domTraversalUtils');

describe('DOM Traversal Utilities', function() {
  describe('findParentBySelector()', function() {
    it('should return the parent element with the given selector', function() {
      const childElement = document.createElement('div');
      childElement.className = 'child';
      const parentElement = document.createElement('div');
      parentElement.appendChild(childElement);
      
      const result = domTraversalUtils.findParentBySelector(childElement, '.parent');
      
      assert.strictEqual(result, parentElement);
    });

    it('should return null if no parent with the given selector is found', function() {
      const childElement = document.createElement('div');
      const result = domTraversalUtils.findParentBySelector(childElement, '.parent');
      assert.strictEqual(result, null);
    });
  });

  // Add more test cases for other functions...
});
