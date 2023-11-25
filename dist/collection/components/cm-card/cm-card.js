import { Host, h } from "@stencil/core";
export class CmCard {
  componentWillLoad() {
    this.element.className = 'container';
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "cm-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-card.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-card.css"]
    };
  }
  static get elementRef() { return "element"; }
}
//# sourceMappingURL=cm-card.js.map
