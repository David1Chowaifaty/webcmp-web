import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cmSpinnerCss = "div.spinner.sc-cm-spinner{position:relative;width:100%;height:100%;display:inline-block;box-sizing:border-box}div.spinner.sc-cm-spinner div.sc-cm-spinner{width:6%;height:16%;background:var(--spinner-background, inherit);position:absolute;left:49%;top:43%;opacity:0;-webkit-border-radius:50px;border-radius:50px;-webkit-box-shadow:0 0 3px rgba(0, 0, 0, 0.2);box-shadow:0 0 3px rgba(0, 0, 0, 0.2);-webkit-animation:fade 1s linear infinite;animation:fade 1s linear infinite}@-webkit-keyframes fade{from{opacity:1}to{opacity:0.25}}@keyframes fade{from{opacity:1}to{opacity:0.25}}div.spinner.sc-cm-spinner div.bar1.sc-cm-spinner{-webkit-transform:rotate(0deg) translate(0, -130%);transform:rotate(0deg) translate(0, -130%);-webkit-animation-delay:0s;animation-delay:0s}div.spinner.sc-cm-spinner div.bar2.sc-cm-spinner{-webkit-transform:rotate(30deg) translate(0, -130%);transform:rotate(30deg) translate(0, -130%);-webkit-animation-delay:-0.9167s;animation-delay:-0.9167s}div.spinner.sc-cm-spinner div.bar3.sc-cm-spinner{-webkit-transform:rotate(60deg) translate(0, -130%);transform:rotate(60deg) translate(0, -130%);-webkit-animation-delay:-0.833s;animation-delay:-0.833s}div.spinner.sc-cm-spinner div.bar4.sc-cm-spinner{-webkit-transform:rotate(90deg) translate(0, -130%);transform:rotate(90deg) translate(0, -130%);-webkit-animation-delay:-0.7497s;animation-delay:-0.7497s}div.spinner.sc-cm-spinner div.bar5.sc-cm-spinner{-webkit-transform:rotate(120deg) translate(0, -130%);transform:rotate(120deg) translate(0, -130%);-webkit-animation-delay:-0.667s;animation-delay:-0.667s}div.spinner.sc-cm-spinner div.bar6.sc-cm-spinner{-webkit-transform:rotate(150deg) translate(0, -130%);transform:rotate(150deg) translate(0, -130%);-webkit-animation-delay:-0.5837s;animation-delay:-0.5837s}div.spinner.sc-cm-spinner div.bar7.sc-cm-spinner{-webkit-transform:rotate(180deg) translate(0, -130%);transform:rotate(180deg) translate(0, -130%);-webkit-animation-delay:-0.5s;animation-delay:-0.5s}div.spinner.sc-cm-spinner div.bar8.sc-cm-spinner{-webkit-transform:rotate(210deg) translate(0, -130%);transform:rotate(210deg) translate(0, -130%);-webkit-animation-delay:-0.4167s;animation-delay:-0.4167s}div.spinner.sc-cm-spinner div.bar9.sc-cm-spinner{-webkit-transform:rotate(240deg) translate(0, -130%);transform:rotate(240deg) translate(0, -130%);-webkit-animation-delay:-0.333s;animation-delay:-0.333s}div.spinner.sc-cm-spinner div.bar10.sc-cm-spinner{-webkit-transform:rotate(270deg) translate(0, -130%);transform:rotate(270deg) translate(0, -130%);-webkit-animation-delay:-0.2497s;animation-delay:-0.2497s}div.spinner.sc-cm-spinner div.bar11.sc-cm-spinner{-webkit-transform:rotate(300deg) translate(0, -130%);transform:rotate(300deg) translate(0, -130%);-webkit-animation-delay:-0.167s;animation-delay:-0.167s}div.spinner.sc-cm-spinner div.bar12.sc-cm-spinner{-webkit-transform:rotate(330deg) translate(0, -130%);transform:rotate(330deg) translate(0, -130%);-webkit-animation-delay:-0.0833s;animation-delay:-0.0833s}";

const CmSpinner = /*@__PURE__*/ proxyCustomElement(class CmSpinner extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("div", { class: "spinner" }, h("div", { class: "bar1" }), h("div", { class: "bar2" }), h("div", { class: "bar3" }), h("div", { class: "bar4" }), h("div", { class: "bar5" }), h("div", { class: "bar6" }), h("div", { class: "bar7" }), h("div", { class: "bar8" }), h("div", { class: "bar9" }), h("div", { class: "bar10" }), h("div", { class: "bar11" }), h("div", { class: "bar12" }))));
  }
  static get style() { return cmSpinnerCss; }
}, [2, "cm-spinner"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-spinner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmSpinner);
      }
      break;
  } });
}

export { CmSpinner as C, defineCustomElement as d };

//# sourceMappingURL=cm-spinner2.js.map