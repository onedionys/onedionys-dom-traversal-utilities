const domTraversalUtils = {
    // Function to find parent element by selector
    findParentBySelector: function(element, selector) {
      while ((element = element.parentElement)) {
        if (element.matches(selector)) return element;
      }
      return null;
    },
  
    // Function to find child elements by selector
    findChildrenBySelector: function(parent, selector) {
      return Array.from(parent.querySelectorAll(selector));
    },
  
    // Function to find siblings elements by selector
    findSiblingsBySelector: function(element, selector) {
      const siblings = Array.from(element.parentElement.children);
      return siblings.filter(sibling => sibling !== element && sibling.matches(selector));
    }
  };
  
  module.exports = domTraversalUtils;
  