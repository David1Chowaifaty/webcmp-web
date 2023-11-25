import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cmCardCss = ":host{background-color:hsl(var(--background));border-radius:var(--radius);border:1px solid hsl(var(--border));padding:25px;display:grid}";

const CmCard$1 = /*@__PURE__*/ proxyCustomElement(class CmCard extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  componentWillLoad() {
    this.element.className = 'container';
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get element() { return this; }
  static get style() { return cmCardCss; }
}, [1, "cm-card"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-card"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmCard$1);
      }
      break;
  } });
}

const CmCard = CmCard$1;
const defineCustomElement = defineCustomElement$1;

export { CmCard, defineCustomElement };

//# sourceMappingURL=cm-card.js.map