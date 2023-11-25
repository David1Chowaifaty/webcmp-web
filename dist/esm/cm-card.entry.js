import { r as registerInstance, h, H as Host, g as getElement } from './index-a3c651cf.js';

const cmCardCss = ":host{background-color:hsl(var(--background));border-radius:var(--radius);border:1px solid hsl(var(--border));padding:25px;display:grid}";

const CmCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.element.className = 'container';
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get element() { return getElement(this); }
};
CmCard.style = cmCardCss;

export { CmCard as cm_card };

//# sourceMappingURL=cm-card.entry.js.map