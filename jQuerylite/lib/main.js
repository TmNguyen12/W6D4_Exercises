let DOMNodeCollection = require('./dom_node_collection.js');

let elementList = document.querySelectorAll('ul');
let sections = document.querySelectorAll('div');

let elementArrList = Array.from(elementList);
let sectionsArr = Array.from(sections);

window.$l = function $l (selector) {
  if (selector instanceof HTMLElement) {
    let elArr = Array.from(selector);
    return new DOMNodeCollection(elArr);   // might need to return new class
  } else {
    let cssArr = Array.from(document.querySelectorAll(selector));
    return new DOMNodeCollection(cssArr);
  }
};
