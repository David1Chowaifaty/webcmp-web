'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4476fe0b.js');

const cmCardCss = ":host{background-color:hsl(var(--background));border-radius:var(--radius);border:1px solid hsl(var(--border));padding:25px;display:grid}";

const CmCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.element.className = 'container';
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get element() { return index.getElement(this); }
};
CmCard.style = cmCardCss;

exports.cm_card = CmCard;

//# sourceMappingURL=cm-card.cjs.entry.js.map