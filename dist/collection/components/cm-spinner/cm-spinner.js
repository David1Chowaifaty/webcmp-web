import { Host, h } from "@stencil/core";
export class CmSpinner {
  render() {
    return (h(Host, null, h("div", { class: "spinner" }, h("div", { class: "bar1" }), h("div", { class: "bar2" }), h("div", { class: "bar3" }), h("div", { class: "bar4" }), h("div", { class: "bar5" }), h("div", { class: "bar6" }), h("div", { class: "bar7" }), h("div", { class: "bar8" }), h("div", { class: "bar9" }), h("div", { class: "bar10" }), h("div", { class: "bar11" }), h("div", { class: "bar12" }))));
  }
  static get is() { return "cm-spinner"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-spinner.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-spinner.css"]
    };
  }
}
//# sourceMappingURL=cm-spinner.js.map
