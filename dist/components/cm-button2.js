import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './cm-spinner2.js';

const cmButtonCss = ".sc-cm-button-h{display:block;--ring-color:hsl(var(--ring))}button.sc-cm-button{all:unset;cursor:pointer;padding:10px;border-radius:var(--radius);transition:all 300ms ease-in-out;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;gap:10px;position:relative;box-sizing:border-box}button.sc-cm-button:focus-visible{outline:1px solid var(--ring-color);outline-offset:2px}.default.sc-cm-button{background:hsla(var(--primary));color:hsl(var(--primary-foreground));--ring-color:hsl(var(--primary));--spinner-background:hsl(var(--primary-foreground))}.link.sc-cm-button{color:hsl(var(--primary));--ring-color:hsl(var(--primary))}.secondary.sc-cm-button{background:hsl(var(--secondary));--ring-color:hsl(var(--secondary));color:hsl(var(--secondary-foreground));--spinner-background:hsl(var(--secondary-foreground))}.danger.sc-cm-button{background:hsl(var(--destructive));color:hsl(var(--destructive-foreground));--spinner-background:hsl(var(--destructive-foreground));--ring-color:hsl(var(--destructive))}.default.sc-cm-button:hover{background:hsla(var(--primary), 0.8)}.secondary.sc-cm-button:hover{background:hsla(var(--secondary), 0.8)}.danger.sc-cm-button:hover{background-color:hsla(var(--destructive), 0.8)}.link.sc-cm-button:hover{text-decoration:underline}.ghost.sc-cm-button:hover{background:hsla(var(--muted))}.spinner.sc-cm-button{height:24px;width:24px}";

const CmButton = /*@__PURE__*/ proxyCustomElement(class CmButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.buttonClicked = createEvent(this, "buttonClicked", 7);
    this.type = 'button';
    this.disabled = false;
    this.variants = 'default';
    this.name = undefined;
    this.value = undefined;
    this.isLoading = false;
  }
  render() {
    return (h("button", { class: this.variants, onClick: e => this.buttonClicked.emit(e), type: this.type, disabled: this.disabled, name: this.name, value: this.value }, h("slot", null), this.isLoading && h("cm-spinner", { class: 'spinner' })));
  }
  static get style() { return cmButtonCss; }
}, [6, "cm-button", {
    "type": [513],
    "disabled": [516],
    "variants": [513],
    "name": [513],
    "value": [513],
    "isLoading": [516, "is-loading"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-button", "cm-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmButton);
      }
      break;
    case "cm-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { CmButton as C, defineCustomElement as d };

//# sourceMappingURL=cm-button2.js.map