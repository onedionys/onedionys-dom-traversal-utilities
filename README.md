<h1 align="center">Welcome to One Dionys - DOM Traversal Utilities! 👋 </h1>

<p align="center">Functions for searching and navigating within the structure of DOM elements. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-dom-traversal-utilities?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-dom-traversal-utilities?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-dom-traversal-utilities?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-dom-traversal-utilities?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-dom-traversal-utilities.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-dom-traversal-utilities?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-dom-traversal-utilities?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
// Import the DOM Traversal Utilities
const domTraversalUtils = require('./src/domTraversalUtils');

// Example usage of findParentBySelector
const childElement = document.querySelector('.child');
const parentElement = domTraversalUtils.findParentBySelector(childElement, '.parent');

// Example usage of findChildrenBySelector
const parentElement = document.querySelector('.parent');
const children = domTraversalUtils.findChildrenBySelector(parentElement, '.child');

// Example usage of findSiblingsBySelector
const siblingElements = domTraversalUtils.findSiblingsBySelector(childElement, '.sibling');
```

#### Explanation

* This package provides utility functions for traversing the DOM (Document Object Model) efficiently. It includes functions to find parent elements, child elements, and sibling elements based on CSS selectors.

#### Return Value

* `findParentBySelector(element, selector)`: Returns the parent element of the given element that matches the specified CSS selector. Returns null if no matching parent is found.
* `findChildrenBySelector(parent, selector)`: Returns an array of child elements of the given parent element that match the specified CSS selector.
* `findSiblingsBySelector(element, selector)`: Returns an array of sibling elements of the given element that match the specified CSS selector.

## 📆 Release Date

* v1.0.0 : 08 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - DOM Traversal Utilities is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - DOM Traversal Utilities? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
